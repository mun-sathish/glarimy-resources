package com.glarimy.vertx;

import java.io.IOException;
import java.net.ServerSocket;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.unit.Async;
import io.vertx.ext.unit.TestContext;
import io.vertx.ext.unit.junit.VertxUnitRunner;

@RunWith(VertxUnitRunner.class)
public class RestVerticleTest {
	private Vertx vertx;
	private int port;

	@Before
	public void setUp(TestContext context) throws IOException {
		vertx = Vertx.vertx();
		ServerSocket socket = new ServerSocket(0);
		port = socket.getLocalPort();
		socket.close();
		DeploymentOptions options = new DeploymentOptions().setConfig(new JsonObject().put("http.port", port));
		vertx.deployVerticle(DirectoryController.class.getName(), options, context.asyncAssertSuccess());
	}

	@After
	public void tearDown(TestContext context) {
		vertx.close(context.asyncAssertSuccess());
	}

	@SuppressWarnings("deprecation")
	@Test
	public void testMyApplication(TestContext context) {
		Employee payload = new Employee();
		payload.setEid(123);
		payload.setName("Krishna");
		payload.setPhoneNumber(34567);
		String json = Json.encodePrettily(payload);
		final Async async = context.async();
		vertx.createHttpClient().post(port, "localhost", "/v1/employees").putHeader("Content-Type", "application/json")
				.putHeader("Content-Length", Integer.toString(json.length())).handler(response -> {
					context.assertEquals(response.statusCode(), 201);
					context.assertTrue(response.headers().get("Content-Type").contains("application/json"));
					context.assertTrue(response.headers().get("Location") != null);
					response.bodyHandler(body -> {
						Employee employee = Json.decodeValue(body.toString(), Employee.class);
						context.assertTrue(employee.getEid() == 123);
						async.complete();
					});
				}).write(json).end();
	}
}
