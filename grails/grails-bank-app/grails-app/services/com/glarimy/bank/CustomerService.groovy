package com.glarimy.bank

import grails.gorm.transactions.Transactional

@Transactional
class CustomerService {
    def persist(Customer customer){
        Account account = new Account()
        account.transactions = []
        account.customer = customer
        account.save()
        return account
    }
}
