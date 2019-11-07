#ReactJs with Redux Learning Resources#
## Illustrations ##
### State ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/state
```
Concepts Covered

0. Setup with Babel and Webpack
1. React Component
2. Internal State Management
3. Event Handling
4. Simple Forms
5. One-way binding

### Properties ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/properties
```
Concepts Covered

1. Passing properties to components
2. Accessing properties

### Collections ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/collections
```
Concepts Covered

1. Rendering collection of components
2. Supplying unique keys

### Composites ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/composites
```
Concepts Covered

1. Components within components
2. Wiring parents and child components
3. Using callbacks for child to parent communication

### Ajax Calls ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/ajax
```
Concepts Covered

1. Using fetch library

### Redux Stores ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/redux
```
Concepts Covered

1. Desiging reducers
2. Creating stores
3. Combining multiple reducers
4. Subscribing to stores
5. Dispatching actions
6. Access state from store
7. Desiging for application level state management

### Applying Middleware ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/middleware
```
Concepts Covered

1. Desiging middleware
2. Applying middleware to store
3. Side-effects in middleware
4. Action creators

### Providers ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/provider
```
Concepts Covered

1. Supplying store via Provider
2. Mapping dispatchs to props
3. Mapping state to props

### Functional Components ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/stateless
```
Concepts Covered

1. Stateless components
2. Functional components
3. Prop Types
4. Default values for props

### Presentational & Container Components ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/containers
```
Concepts Covered

1. Separating visualization from data handling
2. Stateless Presentational components
3. Containers

### Applying Styles ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/styles
```
Concepts Covered

1. Styles as javascript objects
2. Styled components

### Routing ###
```
https://bitbucket.org/glarimy/glarimy-resources/src/master/ReactJS/router
```
Concepts Covered

1. Hash Routers
2. History manipulation

##Assignment##

Build a front-end application for running quiz. The app should display the list of topics. Once user selects the topic, the app should display the questions with selectable options. After user selects the options and submits for evaluation, the app should display the score along with analysis.

The backend is exposed as a set of the following REST APIs:

###Fetch the list of topics###
```
GET https://ansznhx4he.execute-api.us-east-1.amazonaws.com/v1/glarimy-quiz/topics
```

###Fetch the list of questions on a given topic###
```
GET https://ansznhx4he.execute-api.us-east-1.amazonaws.com/v1/glarimy-quiz/topics/{topic-id}/questions
```

###Fetch the evaluation report###
```
POST https://ansznhx4he.execute-api.us-east-1.amazonaws.com/v1/glarimy-quiz/answers
```
Example Payload:
```
[{
    "qid": "123",
    "topic": "123-1",
    "option": "a"
}, {
    "qid": "123",
    "topic": "123-2",
    "option": "c"
}]
```