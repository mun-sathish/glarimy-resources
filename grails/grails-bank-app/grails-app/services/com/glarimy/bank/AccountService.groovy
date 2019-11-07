package com.glarimy.bank

import grails.gorm.transactions.Transactional

@Transactional
class AccountService {
    def getAccount(Long id){
        return Account.get(id)
    }

    def doTransaction(Long id, String tx, double amount){
        Account account = Account.get(id)
        if(tx == 'deposit'){
            account.balance += amount
            Transaction t = new Transaction()
            t.amount = amount
            t.balance = account.balance
            account.transactions.add(t)
        }
        if(tx == 'withdraw'){
            account.balance -= amount
            Transaction t = new Transaction()
            t.amount = amount
            t.balance = account.balance
            account.transactions.add(t)
        }
        return account
    }

    def getTransactions(Long id){
        return Account.get(id).transactions
    }
}
