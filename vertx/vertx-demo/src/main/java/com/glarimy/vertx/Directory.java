package com.glarimy.vertx;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.dropwizard.DropwizardMetricsOptions;
import io.vertx.spi.cluster.hazelcast.HazelcastClusterManager;

public class Directory {
	public static void main(String[] args) {
		DeploymentOptions options = new DeploymentOptions();

		options.setConfig(
				new JsonObject().put("http.port", 8081).put("url", "jdbc:mysql://localhost:3306/glarimy?useSSL=false")
						.put("user", "root").put("password", "admin").put("driver_class", "com.mysql.jdbc.Driver"));
		VertxOptions opts = new VertxOptions().setClusterManager(new HazelcastClusterManager()).setMetricsOptions(
				new DropwizardMetricsOptions().setEnabled(true).setRegistryName("directory-registry"));
		Vertx.clusteredVertx(opts, h -> {
			Vertx vertx = h.result();
			vertx.deployVerticle(DirectoryController.class.getName(), options);
			vertx.deployVerticle(DataService.class.getName(), options);
			vertx.deployVerticle(AuditVerticle.class.getName(), options);
		});

	}
}