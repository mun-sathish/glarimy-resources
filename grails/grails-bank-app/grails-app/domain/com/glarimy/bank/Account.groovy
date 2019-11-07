package com.glarimy.bank

class Account {
    double balance
    static belongsTo = [customer: Customer]
    static hasMany = [transactions: Transaction]
    static constraints = {
        
    }
}
