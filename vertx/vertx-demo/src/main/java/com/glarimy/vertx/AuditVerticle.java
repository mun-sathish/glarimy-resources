package com.glarimy.vertx;

import io.vertx.rxjava.core.AbstractVerticle;

public class AuditVerticle extends AbstractVerticle {
	@Override
	public void start() throws Exception {
		vertx.eventBus().<String>consumer("auditor").bodyStream().toObservable().filter(msg -> {
			return true;
		}).map(message -> {
			return message.toUpperCase();
		}).subscribe(body -> {
			System.out.println("Auditor received " + body);
		});
	}
}
