package com.glarimy.accounts.api;

public interface AccountsManager {
	public Account openAccount(Customer customer) throws InvalidCustomerException, BankException;

	public Account find(String number) throws AccountNotFoundException, BankException;;

}
