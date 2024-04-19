# FlyFish Test Task

## Task Instructions
Use BDD approach to test "petstore" https://petstore.swagger.io/ RESTful Web Service.

Your task is to test POST /pet service:

- Use any BDD framework of your choice, e.g., Cucumber
- Use any JavaScript testing libraries, e.g., Jest
- Identify and model Steps needed to test the feature. Please use some pseudo code to show your approach to implementing the steps.
- Implement the test scenarios using the Steps
- Use any version control software to develop and submit the above exercise e.g., Git.

## Installation Instructions & Running Tests
- Clone the repo locally and cd to flyfish-test-task directory
- On repo's root directory run `npm install`
- When installation is finished run `npx cypress open`
- On 'Welcome  to Cypress!' screen choose E2E testing
- On 'Choose a browser' choose your favorite browser
- Then on the next screen that popups click on 'add-pet.feature'
- The tests should run then
- Alternatively you can also run `npx cypress run` after installation to run tests on the CLI


## Steps to test the feature:

- Install Cypress
- Install Cypress cucumber preprocessor (in order to use BDD and integrate gherkin syntax into Cypress)
- Define test cases in plain text
- Translate test cases in plain text to BDD scenarios
- Write code defining the various Given When Then steps needed for the scenarios
- Create test data in the form of fixtures 
- Run tests



## Text Cases in plain text
    Happy paths:
    - Check that sending request with valid data returns correct status code and response body			
    - Check that sending a request with valid data returns an ID
    - Check that sending a request with only required fields returns correct status code and response body
    
    Negative paths:
    - Check that sending a request with empty body returns the correct status code and message
    - Check that sending a request with missing required fields returns the correct status code and message
    - Check that sending a request with invalid name field  returns the correct status code and message
    - Check that sending a request with invalid photoUrls fields returns the correct status code and message
    - Check that sending a request with invalid category fields returns the correct status code and message
    - Check that sending a request with invalid tags field returns the correct status code and message
    - Check that sending a request with invalid tags field returns the correct status code and message


## Text Cases as BDD scenarios

    Happy paths:
    - Add a new pet with valid data and check status code and response body
    - Add a new pet with valid data and check response body contains ID
    - Add a new pet with only required fields data and check status code and response body

    Negative paths:
    - Add a new pet with empty object as data and check status code and response body
    - Add a new pet with missing required fields and check status code and response body
    - Add a new pet with invalid data type for name field and check status code and response body
    - Add a new pet with invalid data type for photoUrls field and check status code and response body
    - Add a new pet with invalid data type for category field and check status code and response body
    - Add a new pet with invalid data type for tags field and check status code and response body
    - Add a new pet with invalid data type for status field and check status code and response body

 ## Current results and reasons for failures

    ❌ - Add a new pet with valid data and check status code and response body
    Test expects a status code 201 on successful pet creation it receives a 200 code instead

    ✅ - Add a new pet with valid data and check response body contains ID

    ❌ - Add a new pet with only required fields data and check status code and response body
    Test expects a status code 201 on successful pet creation it receives a 200 code instead

    ❌ - Add a new pet with empty object as data and check status code and response body
    Test expects a status code 400 on sending a bad request it receives a 200 code instead

    ❌ - Add a new pet with missing required fields and check status code and response body
    Test expects a status code 400 on sending a bad request it receives a 200 code instead

    ❌ - Add a new pet with invalid data type for name field and check status code and response body
    Test expects a status code 400 on sending a bad request it receives a 200 code instead

    ❌ - Add a new pet with invalid data type for photoUrls field and check status code and response body
    Test expects a status code 400 on sending a bad request it receives a 500 code instead

    ❌ - Add a new pet with invalid data type for category field and check status code and response body
    Test expects a status code 400 on sending a bad request it receives a 500 code instead

    ❌ - Add a new pet with invalid data type for tags field and check status code and response body
    Test expects a status code 400 on sending a bad request it receives a 500 code instead

    ❌ - Add a new pet with invalid data type for status field and check status code and response body
    Test expects a status code 400 on sending a bad request it receives a 200 code instead



 ## Notes

Although nothing in the petstore documentation for the POST /pet endpoint mentions that status code 201 will be returned I found it confusing and a bit misleading to return code 200 when a record has been successfully created. Therefore I've tested the API endpoint as I expect any other API to work: by returning 201 on a successfully created record and 400 on a bad request, whether this be by invalid data types or missing required data.  This is the reason why most tests currently fail. I decided to leave them like this as to pass the tests with incorrect status code in my opinion wouldn't be ideal.

I suppose the https://petstore.swagger.io/ team simply didn't go into such detail when developing this demo API.

I've also expected in these tests to not only return the appropriate status code but also gracefully handle any missing or invalid inputs with error messages. This is because I would expect an API to inform the user about what exactly was missing or wrong about its inputs.


 