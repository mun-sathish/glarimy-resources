package com.glarimy.accounts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glarimy.accounts.api.Account;
import com.glarimy.accounts.api.AccountsManager;
import com.glarimy.accounts.api.AccountNotFoundException;
import com.glarimy.accounts.api.BankException;
import com.glarimy.accounts.api.Customer;
import com.glarimy.accounts.api.InvalidCustomerException;
import com.glarimy.accounts.db.AccountsRepository;

@Service
public class AccountsManagerService implements AccountsManager {
	@Autowired
	private AccountsRepository repo;

	@Override
	public Account openAccount(Customer customer) throws InvalidCustomerException, BankException {
		Account account = new Account();
		account.setCustomer(customer);
		return repo.save(account);
	}

	@Override
	public Account find(String number) throws AccountNotFoundException, BankException {
		Account account = repo.findOne(number);
		if (account == null)
			throw new AccountNotFoundException();
		return account;
	}

}
