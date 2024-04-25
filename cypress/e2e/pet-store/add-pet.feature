Feature: PetStore API - Add Pet

  # HAPPY PATHS:

  Scenario Outline: Add a new pet with valid data and check status code and response body
  
    Given I have valid data to add a pet
    When I send a POST request to the pet endpoint
    Then the response should have <response content>

    Examples:
        | response content  | 
        | status 201 and body with same keys as request data |
        | an ID inside body keys |

  Scenario: Add a new pet with only required fields data and check status code and response body

    Given I have only required fields data to add a pet
    When I send a POST request to the pet endpoint
    Then the response should have status 201 and body with same keys as request data


  # NEGATIVE PATHS:

  Scenario Outline: Add a new pet with empty or invalid as data and check status code and response body
  
    Given I have an <type of data> as data to add a pet
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message

    Examples:
        | type of data | 
        | empty object |
        | object missing required fields  |


  Scenario Outline: Add a new pet with invalid data type for <field> field and check status code and response body
  
    Given I have an invalid data type for <field> value
    When I send a POST request to the pet endpoint
    Then the response should have status 400 and an error message

    Examples:
        | field | 
        | name |
        | photoUrls  |
        | category  |
        | tags  |
        | status  |