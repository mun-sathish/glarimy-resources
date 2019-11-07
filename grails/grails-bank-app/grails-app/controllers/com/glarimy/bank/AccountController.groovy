package com.glarimy.bank


import grails.rest.*
import grails.converters.*

class AccountController {
	static responseFormats = ['json', 'xml']
	AccountService accountService

    def show(Long id){
        respond accountService.getAccount(id), [status: 200]
    }

    def update(Long id){
        Account account = accountService.doTransaction(id, params.tx, params.amount as Double);
        respond account, [status: 204]
    }

    def history(Long id){
        def txs = accountService.getTransactions(id)
        respond txs, [status: 200]
    }
}
