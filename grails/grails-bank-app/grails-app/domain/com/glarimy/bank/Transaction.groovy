package com.glarimy.bank

class Transaction {
    String type
    double amount
    double balance
    static belongsTo = [account: Account]

    static constraints = {
        amount min: 0D
        balance min: 0D
    }
}
