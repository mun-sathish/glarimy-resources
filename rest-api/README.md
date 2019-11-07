# REST #

**REST** stands for **Representations State Transfer**. It's an architectural style for developing platform independent client server applications as described by [Roy Thomas Fielding ](https://en.wikipedia.org/wiki/Roy_Fielding) in his [dessertion paper](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) in 2000.

Though the paper is nothing specific to [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) protocol, it became a de facto protocol for implementing the REST style applications. 

## REST Expectations ##

Following are the general expectaions from a REST style client/server application:

1. Clients send data in JSON format. Servers respond with data in [JSON](https://www.json.org/) format.
2. Clients use HTTP GET request to query data from a server.
3. Clients use HTTP POST request to create new data on a server.
4. Clients use HTTP PUT request to replace existing data on a server.
5. Clients use HTTP DELETE request to remove data from a server.
6. Clients use HTTP PATCH request to update data on a server.
7. REST APIs consist only nouns, not verbs.
8. Clients use path parameters to uniquly identify resources.
9. Clients use query parameters to get filtered response.
10. Clients and server use headers to exchange meta data.
11. Post and PUT requests usually exchange JSON payloads.

## REST API Illustrations ##

Following are to give a general understanding of convensions used in the REST APIs.

1. ``GET /employee`` fetches all the employees
2. ``GET /employee/GTS12345`` fetches an employee with id GTS12345
3. ``GET /employee?name=Krishna&office=Bengaluru`` fetches employees with name 'Krishna' and office 'Bengaluru'
4. ``POST /employee`` adds a new employe to the server (with employe data in the payload)
5. ``PUT /employee/GTS12345`` replaces the data of an employee whose id is GTS12345 (with data in the payload)
6. ``DELETE /employee/GTS12345`` removes the employee with id GTS12345
7. ``DELETE /employee?status=resigned`` removes all employees with status 'resigned'

## REST API Documentation ##

[Swagger](https://swagger.io/) is the most popular tool used in documenting the REST API. 

Following illustrations give an idea of how to interpret the API.

1. ``GET /employee/{eid}`` where ``{eid}`` is to be replaced with actual eid
2. ``GET /bank/{branch}/account/{no}`` where ``{branch}`` and ``{no}`` are placeholders to be filled with actual values

## Popular MIME types ##

1. ``application/json`` for JSON payload
2. ``application/xml`` for XML payload
3. ``application/octet-stream`` for everything
4. [List of MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types) 

## Popular HTTP Request Headers in REST ##

1. ``Content-Type`` to specify type of the request payload like ``application/json`` and etc., 
2. ``Accept`` to specify the type of payload expected in the response.
3. ``Authorization`` to send the credentials, usually in Base64 format.
4. [Complete list of HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

## Popular HTTP Response Headers in REST ##
1. ``Location`` to specify the URI of newly created resource
2. ``Access-Control-Allow-Origin`` for [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
3. [Complete list of HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

## Popular HTTP Status Codes ##
1. ``200`` to specify successful processing of the request
2. ``201`` to specify successful creation of a new resource in response to a POST request
3. ``400`` to specify a bad request
4. ``403`` to specify authentication failure
5. ``404`` to specify failure of GET request if the resource is not found
6. ``500`` to specify a server-side issue
7. [Complete list of HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Popular frameworks for developing REST API ##
1. [Jersey](https://jersey.github.io/) on Java platform using JAX-RS specification
2. [Spring REST](https://spring.io/guides/gs/rest-service/) on Spring Platform
3. [Flask-RESTful](https://flask-restful.readthedocs.io/en/latest/) on Python
4. [Express](https://expressjs.com/) on NodeJS

## Popular libraries/frameworks for consuming REST API ##
1. [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) API on plain Javascript
2. [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) library of Javascript
3. [JQuery](https://api.jquery.com/jquery.ajax/)

## Tools for verifying REST API ##
1. [curl](https://curl.haxx.se/) command line tool
2. [Postman](https://www.getpostman.com/)
3. [REST Client](https://addons.mozilla.org/en-US/firefox/addon/restclient/) plug-in for Mozilla Firefox browser
4. [Advanced Rest Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) from Google Chrome 
