package com.glarimy.accounts.db;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.glarimy.accounts.api.Account;

@Repository
public interface AccountsRepository extends MongoRepository<Account, String> {

}
