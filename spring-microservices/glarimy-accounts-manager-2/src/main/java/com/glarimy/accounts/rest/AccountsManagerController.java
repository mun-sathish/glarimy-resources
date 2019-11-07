package com.glarimy.accounts.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.glarimy.accounts.api.Account;
import com.glarimy.accounts.api.AccountsManager;
import com.glarimy.accounts.api.Customer;

@RestController
public class AccountsManagerController {
	@Autowired
	private AccountsManager am;

	@RequestMapping(method = RequestMethod.POST, path = "/account")
	public ResponseEntity<Account> open(@RequestBody Customer customer, UriComponentsBuilder builder) {
		Account account = am.openAccount(customer);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/account/{number}").buildAndExpand(account.getNumber()).toUri());
		return new ResponseEntity<Account>(account, headers, HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.GET, path = "/account/{number}")
	public ResponseEntity<Account> find(@PathVariable("number") String number) {
		Account account = am.find(number);
		return new ResponseEntity<Account>(account, HttpStatus.OK);
	}

}
