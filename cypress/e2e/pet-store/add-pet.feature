Feature: PetStore API - Add Pet

  # HAPPY PATHS:

  Scenario: Add a new pet with valid data and check status code and response body

    Given I have valid data to add a pet
    When I send a POST request to the pet endpoint
    Then the response should have status 201 and body with same keys as request data



  Scenario: Add a new pet with valid data and check response body contains ID

    Given I have valid data to add a pet
    When I send a POST request to the pet endpoint
    Then the response body should have an ID



  Scenario: Add a new pet with only required fields data and check status code and response body

    Given I have only required fields data to add a pet
    When I send a POST request to the pet endpoint
    Then the response should have status 201 and body with same keys as request data


  # NEGATIVE PATHS:

  Scenario: Add a new pet with empty object as data and check status code and response body

    Given I have an empty object as data to add a pet
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message



  Scenario: Add a new pet with missing required fields and check status code and response body

    Given I have data missing required fields to add a pet
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message



  Scenario: Add a new pet with invalid data type for name field and check status code and response body

    Given I have an invalid data type for name value
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message



  Scenario: Add a new pet with invalid data type for photoUrls field and check status code and response body

    Given I have an invalid data type for photoUrls value
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message



  Scenario: Add a new pet with invalid data type for category field and check status code and response body

    Given I have an invalid data type for category value
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message



  Scenario: Add a new pet with invalid data type for tags field and check status code and response body

    Given I have an invalid data type for tags value
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message



  Scenario: Add a new pet with invalid data type for status field and check status code and response body

    Given I have an invalid data type for status value
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message
