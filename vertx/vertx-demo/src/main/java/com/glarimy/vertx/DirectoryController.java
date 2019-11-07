package com.glarimy.vertx;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.dropwizard.MetricsService;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.StaticHandler;

public class DirectoryController extends AbstractVerticle {

	@Override
	public void start(Future<Void> future) {
		MetricsService metrics = MetricsService.create(vertx);
		Router router = Router.router(vertx);
		router.route().handler(BodyHandler.create());
		router.route("/").handler(routingContext -> {
			HttpServerResponse response = routingContext.response();
			response.putHeader("content-type", "text/html")
					.end("<h1>Glarimy Employee Directory</h1><hr/><a href='static/index.html'>Login</a>");
		});
		router.route("/metrics/dashboard").handler(context -> {
			context.response().end(Json.encodePrettily(metrics.getMetricsSnapshot(vertx)));
		});
		router.route("/metrics").handler(context -> {
			String comp = context.request().getParam("comp");
			JsonObject snapshot = metrics.getMetricsSnapshot(vertx);
			context.response().end(Json.encodePrettily(snapshot.getJsonObject(comp)));
		});

		router.route("/static/*").handler(StaticHandler.create("assets"));
		router.get("/v1/employees/").handler(new Handler<RoutingContext>() {

			@Override
			public void handle(RoutingContext context) {
				vertx.eventBus().send("data-service", new JsonObject().put("op", "list"), response -> {
					context.response().putHeader("content-type", "application/json; charset=utf-8")
							.end(response.result().body().toString());
				});
			}
		});
		router.get("/v1/employees/:eid").handler(new Handler<RoutingContext>() {

			@Override
			public void handle(RoutingContext context) {
				int eid = Integer.parseInt(context.request().getParam("eid"));
				context.response().putHeader("context-type", "application/json")
						.end(Json.encodePrettily(DirectoryService.find(eid)));

			}
		});

		router.post("/v1/employees").handler(new Handler<RoutingContext>() {

			@Override
			public void handle(RoutingContext context) {
				Employee employee = Json.decodeValue(context.getBodyAsString(), Employee.class);
				context.response().putHeader("content-type", "application/json").setStatusCode(201)
						.putHeader("Location", "/employee").end(Json.encodePrettily(DirectoryService.add(employee)));

			}
		});

		vertx.createHttpServer().requestHandler(router).listen(config().getInteger("http.port", 8080), result -> {
			if (result.succeeded()) {
				future.complete();
			} else {
				future.fail(result.cause());
			}
		});
	}
}