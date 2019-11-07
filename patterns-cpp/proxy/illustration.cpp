#include <iostream>
#include <sys/time.h>

using namespace std;

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
        User users[10];
        string logins[10];
        int count;
    public:
        SimpleSecurity()
        {
            count = 0;
        }
        void signup(User user){
            int index;
            for(index=0; index<count; index++)
            {
                if(users[index].credentials.uid == user.credentials.uid)
                    throw "User already exists";
            }
            users[count++] = user;
            logins[count++] = "";
        }
        string signin(Credentials credentials){
            int index;
            for(index=0; index<count; index++)
            {
                if(users[index].credentials.uid == credentials.uid)
                {
                    if(logins[index] != "")
                    {
                        throw "User already signed in";
                    }else{
                        logins[index] = users[index].uname;
                        return logins[index];
                    }
                }
            }
            throw "User doesn't exist";
        }
        void signout(string uid){
            int index;
            for(index=0; index<count; index++)
            {
                if(users[index].credentials.uid == uid)
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

class ValidationProxy: public Security
{
    private:
        Security* target;
    public:
        ValidationProxy(Security* target)
        {
            this->target = target;
        }
        void signup(User user){
            if(user.uname == "" || user.credentials.uid == "" || user.credentials.password =="")
                throw "Invalid registration";
            this->target->signup(user);
        }
        string signin(Credentials credentials){
            if(credentials.uid == "" || credentials.password =="")
                throw "Invalid credentials";
            return this->target->signin(credentials);
        }
        void signout(string uid){
            if(uid == "")
                throw "Invalid User ID";
            this->target->signout(uid);
        }
};

class Configuration
{
    public:
        string type;
        string feature;
};

class SecurityFactory 
{
    public:
        static Security* getSecurity(Configuration config){
            if(config.type == "simple")
            {
                Security* security = new SimpleSecurity();
                if(config.feature == "")
                    return security;
                if(config.feature == "validation"){
                    Security* proxy = new ValidationProxy(security);
                    return proxy;
                }
                throw "Feature " + config.feature + " not available";
            }
            throw "No security component found of type " + config.type;
        }
};

int main()
{
    try {
        Configuration config = Configuration();
        config.type = "simple";
        config.feature = "validation";
        Credentials creds = Credentials("", "123456");
        User user = User("Krishna Mohan Koyya", creds);
        Security* security = SecurityFactory::getSecurity(config);
        security->signup(user);
        cout << "User successfully signed up" << endl;
        string name = security->signin(creds);
        cout << "User successfully signed in as " << name << endl;
        security->signout(creds.uid);
        cout << "user successfully signed out" << endl;
    }catch(string error){
        cout << error << endl;
    }catch(char const* error){
        cout << error << endl;
    }
    return 0;
}