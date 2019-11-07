package com.glarimy.vertx;

import java.util.List;
import java.util.stream.Collectors;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.eventbus.MessageConsumer;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.jdbc.JDBCClient;
import io.vertx.ext.sql.SQLConnection;

public class DataService extends AbstractVerticle {
	public DataService() {
		System.out.println("Data Service is created");
	}

	@Override
	public void start(Future<Void> future) throws Exception {
		MessageConsumer<JsonObject> consumer = vertx.eventBus().consumer("data-service");
		consumer.handler(msg -> {
			vertx.eventBus().publish("auditor", "listing");
			if (msg.body().getString("op").equalsIgnoreCase("list")) {
				try {
					JDBCClient jdbc = JDBCClient.createShared(vertx, config(), "directory");
					jdbc.getConnection(ar -> {
						SQLConnection connection = ar.result();
						connection.query("SELECT * FROM directory", result -> {
							List<Employee> employees = result.result().getRows().stream().map(o -> {
								return Json.decodeValue(o.encode(), Employee.class);
							}).collect(Collectors.toList());
							connection.close();
							msg.reply(Json.encode(employees));
						});
					});

				} catch (Exception e) {
					msg.fail(500, "something went wrong");
				}
			} else {
				msg.fail(500, "operation not found");
			}
		});

		future.complete();
	}
}
