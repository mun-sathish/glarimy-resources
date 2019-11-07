package com.glarimy.bank

class Customer {
    String name
    long phone
    static hasOne = [account:Account]

    static constraints = {
        name nullable: false, blank: false, size: 3..32
        phone min: 0L
        account nullable: true
    }
}
