package com.glarimy.accounts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class AccountsManagerLauncher {
	public static void main(String[] args) {
		SpringApplication.run(AccountsManagerLauncher.class, args);
	}
}