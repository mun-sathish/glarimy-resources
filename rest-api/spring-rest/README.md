# REST API using Spring Boot #

Sprign Boot is an opiniated framework for developing enterprise Java applications. Developing REST-API using Spring Boot is rather easy. 

**Contents**

1. [Important Spring-REST Annotations](#markdown-header-important-spring-rest-annotations)
2. [Hello World with Spring Boot REST](#markdown-header-hello-world-with-spring-boot-rest)
3. [Mapping for HTTP Methods](#markdown-header-mappings-for-http-methods)

## Important Spring-REST Annotations ##
1. ``@RestController`` on a class to handle REST resources
2. ``@RequestMapping`` binds a HTTP call to a Java method 
3. ``@PathVariable`` binds a path parameter of URI to a Java variable
4. ``@RequestParam`` binds a query string parameter of URI to a Java variable
5. ``@HeaderParam`` binds a HTTP Request header parameter to a Java variable
6. ``@RequestBody`` binds the HTTP Request payload to a Java bean
7. ``@GetMapping`` binds a HTTP GET request to Java method
8. ``@PostMapping`` binds a HTTP POST request to a Java method

## Hello World with Spring Boot REST ##

**1. Create a maven project**

Use your favourite IDE like Eclipse and create a quickstart Maven project with ``com.glarimy`` as Group ID and ``spring-rest`` as Artifact ID.

Add the parent reference in the pom.xml.
```
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.3.RELEASE</version>
    <relativePath />
</parent>
```

Add the dependency for Spring Boot
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>
```

Add the dependency for REST support
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>
```

Add the Spring Boot plug-in 
```
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
</plugin>
```
This plug-in forces the maven to prepare a self-sufficient FAT jar along with all dependencies, including an embedded Tomcat.

**2. Prepare the REST API**

Create a Java Bean for resource modelling

```
package com.glarimy.spring;

public class Employee {
	private String name;
	private String mail;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

}
```
Create a controller for handling Employee resource

```
package com.glarimy.spring;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DirectoryController {

	@PostMapping("/employee")
	public ResponseEntity<Employee> add(@RequestBody Employee employee) {
		return new ResponseEntity<Employee>(employee, HttpStatus.CREATED);
	}
}
```
The ``@RestController`` annotation hints the spring to treat it as controller for REST layer. This annotations defaults the payloads of request and response to "application/json".

The ``@PostMapping`` annotation binds the method to ``HTTP POST`` call.

The ``@RequestBody`` annotation binds the request payload to the specified Java bean.

The ``ResponseEntity`` hints the Spring to prepare HTTP Response with the specified payload and headers.

**3. Create the entrypoint for Spring Boot**
```
package com.glarimy.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DirectoryApplication {
	public static void main(String[] args) {
		SpringApplication.run(DirectoryApplication.class, args);
	}
}
```
The ``@SpringBootApplication`` prepares the necessary configuration for a Spring Boot Application.

**4. Build the application**
```
mvn package
```

**5. Run the application and expose the REST API**
```
java -jar spring-rest-0.0.1.jar
```
The Tomcat starts on http://localhost:8080.

**6. Test the REST API**
```
curl http://localhost:8080/employee -H "Content-Type:application/json" -d '{"name":"Krishna Mohan Koyya", "mail":"krishna@glarimy.com"}'
```
This makes a POST request to the REST API Server and receives the following response
```
{"name":"Krishna Mohan Koyya", "mail":"krishna@glarimy.com"}
```
The subsequent topics illustrates vairous popular scenarios

## Mappings for HTTP Methods ##

``@RequestMapping`` annotation helps in mapping HTTP methods to the Java code. This is an elaborate annotation to map various aspects of the HTTP request. Spring-REST also offer several utilities such as ``@GetMapping`` to reduce the boilerplate. ``ResponseEntity`` is used to returns the responses with body and headers.

Following snippets illustrate most frequently used scenarios in REST API.

**1. Get request to return a list**
```
@RequestMapping(method=RequestMethod.GET, url="/employee")
public ResponseEntity<List<Employee>> all() {
    List<Employee> employees = .... // fill the list
    return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
}
```
This mapping works for ``GET /employee``. It returns a list of employees in JSON format.

**2. Get request with a path parameterd**
```
@RequestMapping(method=RequestMethod.GET, url="/employee/{eid}")
public ResponseEntity<Employee> find(@PathVariable("eid) long eid) {
    Employee employee = .... // find the employee
    return new ResponseEntity<Employee>(employee, HttpStatus.OK);
}
```
This mapping works for ``GET /employee/12345``. It returns the specified employee in JSON format.

**3. Get request with a query parameter**
```
@RequestMapping(method=RequestMethod.GET, url="/employee")
public ResponseEntity<List<Employee>> search(@RequestParam("name") String name) {
    List<Employee> employees = .... // search the employees by name
    return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
}
```
This mapping works for ``GET /employees?name=Krishna``. It returns list of employees whose name is Krishna, in JSON format.

**4. Get request with path as well as query parameters**
```
@RequestMapping(method=RequestMethod.GET, url="/department/{dept}/employee")
public ResponseEntity<List<Employee>> search(@PathVariable("dept") String dept, @RequestParam("name") String name) {
    List<Employee> employees = .... // search the employees by name & dept
    return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
}
```
This mapping works for ``GET /department/engineering/employee?name=Krishna``. It returns list of all employees of engineering department whose name is Krishna, in JSON format.

**5. Get request to return an image**
```
@RequestMapping(RequestMethod.GET, url="/employee/{eid}/picture", produces = "image/png")
public ResponseEntity<InputStreamResource> get(@PathVariable("eid) long eid) {
    InputStream is = ... // stream the picture from a file
	return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(new InputStreamResource(is));
}
```
This mapping works for ``GET /employee/12345/picture``. It returns a PNG image of specified employee. 

**6. Get request with header parameters**
```
@RequestMapping(method=RequestMethod.GET, url="/department/{dept}/employee")
public ResponseEntity<List<Employee>> search(@PathVariable("dept") String dept, @RequestHeader("uname")String uname) {
	Logger.log(uname + " querried for employees of " + dept);
    List<Employee> employees = .... // search the employees by dept
    return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
}
```
This mapping works for ``GET /department/engineering/employee`` and returns list of employees of engineering repartment while printing a log record.

**7. Post request with payload and parameters, to return headers**
```
@RequestMapping(method=RequestMethod.POST, url="/department/{dept}/employee")
public ResponseEntity<Employee> search(@PathVariable("dept") String dept, @RequestBody Employee employee,UriComponentsBuilder builder) {
	String eid = ... // store the employee and get the newly generated eid
	HttpHeaders headers = new HttpHeaders();
	headers.setLocation(builder.path("/employee/{eid}").buildAndExpand(eid).toUri());
    return new ResponseEntity<List<Employee>>(employees, headers, HttpStatus.CREATED);
}
```
This mapping works for ``POST /department/engineering/employee``. It binds the JSON payload of the request to Employee bean. While returning, it sets the ``Status`` to 201 and also adds ``Location`` header with the URI for the newly created employee. 

**8. Exception Handling**
```
@RequestMapping(method=RequestMethod.GET, url="/department/{dept}/employee")
public ResponseEntity<List<Employee>> search(@PathVariable("dept") String dept) {
    try {
		List<Employee> employees = .... // search the employees by dept
	    return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
	}catch(DepartmentNotFoundException dnfe){
	    return new ResponseEntity<List<Employee>>(HttpStatus.NOT_FOUND);
	}catch(Excpetion e){
	    return new ResponseEntity<List<Employee>>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
```
This code returns 404 if specified department is not found and 500 for all other server side errors.

**9. Common path prefix for the controller**
```
@RestController("/employee)
public class DirectoryController {
	@PostMapping("/")
	public ResponseEntity<Employee> add(@RequestBody Employee employee) {
		return new ResponseEntity<Employee>(employee, HttpStatus.CREATED);
	}
}
```
This maps to ``POST /employee`` since ``@RestController`` is supplied with a common path prefix.