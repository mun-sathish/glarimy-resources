package com.glarimy.bank


import grails.rest.*
import grails.converters.*

class CustomerController {
	static responseFormats = ['json', 'xml']
    CustomerService customerService
    def store(Customer customer){
        Account account = customerService.persist(customer)
        respond account, [status: 201] 
    }
}
