#include <iostream>
#include <sys/time.h>

using namespace std;

class BasicSecurity
{
    private:
        string names[10];
        string passwords[10];
        string uids[10];
        string logins[10];
        int count;
    public:
        BasicSecurity()
        {
            count = 0;
        }
        void add(string uid, string password, string name){
            int index;
            for(index=0; index<count; index++)
            {
                if(uids[index] == uid)
                    throw "User already exists";
            }
            uids[count] = uid;
            passwords[count] = password;
            names[count] = name;
            logins[count++] = "";
        }
        string login(string uid, string password){
            int index;
            for(index=0; index<count; index++)
            {
                if(uids[index] == uid)
                {
                    if(logins[index] != "")
                    {
                        throw "User already signed in";
                    }else{
                        logins[index] = names[index];
                        return logins[index];
                    }
                }
            }
            throw "User doesn't exist";
        }
        void logout(string uid){
            int index;
            for(index=0; index<count; index++)
            {
                if(uids[index] == uid)
                {
                    if(logins[index] == "")
                    {
                        throw "User not signed in yet";
                    }else{
                        logins[index] = "";
                        return;
                    }
                }
            }
            throw "User doesn't exist";
        }
};

class Credentials
{
    public:
        string uid;
        string password;
        Credentials()
        {

        }
        Credentials(string uid, string password)
        {
            this->uid = uid;
            this->password = password;
        }
};

class User
{
    public:
        string uname;
        Credentials credentials;
        User()
        {

        }
        User(string uname, Credentials credentials)
        {
            this->uname = uname;
            this->credentials = credentials;
        }
};

class Security
{
    public:
        virtual void signup(User user) = 0;
        virtual string signin(Credentials Credentials) = 0;
        virtual void signout(string uid) = 0;
};

class SimpleSecurity: public Security
{
    private:
        BasicSecurity security;
    public:
        SimpleSecurity()
        {
            security = BasicSecurity();
        }
        void signup(User user){
            security.add(user.credentials.uid, user.credentials.password, user.uname);
        }
        string signin(Credentials credentials){
            return security.login(credentials.uid, credentials.password);
        }
        void signout(string uid){
            security.logout(uid);
        }
};

class SecurityFactory 
{
    public:
        static Security* getSecurity(string type){
            if(type == "simple")
            {
                return new SimpleSecurity();
            }
            throw "No security component found of type " + type;
        }
};

int main()
{
    Credentials creds = Credentials("koyya", "123456");
    User user = User("Krishna Mohan Koyya", creds);
    try {
        Security* security = SecurityFactory::getSecurity("simple");
        security->signup(user);
        cout << "User successfully signed up" << endl;
        string name = security->signin(creds);
        cout << "User successfully signed in as " << name << endl;
        security->signout(creds.uid);
        cout << "user successfully signed out" << endl;
    }catch(char const* error){
        cout << error << endl;
    }
}