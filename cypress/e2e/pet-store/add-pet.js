import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const validPetData = require("../../fixtures/validPetData.json");
const onlyRequiredFieldsPetData = require("../../fixtures/onlyRequiredFieldsPetData.json");
const emptyObjectPetData = require("../../fixtures/emptyObjectPetData.json");
const missingRequiredFieldsPetData = require("../../fixtures/missingRequiredFieldsPetData.json");
const invalidTypeNamePetData = require("../../fixtures/invalidTypeNamePetData.json");
const invalidTypePhotoURLsPetData = require("../../fixtures/invalidTypePhotoURLsPetData.json");
const invalidTypeCategoryPetData = require("../../fixtures/invalidTypeCategoryPetData.json");
const invalidTypeTagsPetData = require("../../fixtures/invalidTypeTagsPetData.json");
const invalidTypeStatusPetData = require("../../fixtures/invalidTypeStatusPetData.json");

const context = {};
const petEndpoint = "https://petstore.swagger.io/v2/pet";

Given("I have valid data to add a pet", () => {
  context.petData = validPetData;
});

Given("I have only required fields data to add a pet", () => {
  context.petData = onlyRequiredFieldsPetData;
});

Given("I have an empty object as data to add a pet", () => {
  context.petData = emptyObjectPetData;
});

Given("I have an object missing required fields as data to add a pet", () => {
  context.petData = missingRequiredFieldsPetData;
});

Given("I have an invalid data type for name value", () => {
  context.petData = invalidTypeNamePetData;
});

Given("I have an invalid data type for photoUrls value", () => {
  context.petData = invalidTypePhotoURLsPetData;
});

Given("I have an invalid data type for category value", () => {
  context.petData = invalidTypeCategoryPetData;
});

Given("I have an invalid data type for tags value", () => {
  context.petData = invalidTypeTagsPetData;
});

Given("I have an invalid data type for status value", () => {
  context.petData = invalidTypeStatusPetData;
});

When("I send a POST request to the pet endpoint", () => {
  cy.request({
    method: "POST",
    url: petEndpoint,
    body: context.petData,
    failOnStatusCode: false,
  }).as("postRequest");
});

Then(
  "the response should have status 201 and body with same keys as request data",
  () => {
    cy.get("@postRequest").then((response) => {
      expect(response.status).to.eq(201);
      const requestDataKeys = Object.keys(context.petData);
      requestDataKeys.forEach((key) => {
        expect(response.body).to.have.property(key);
      });
    });
  }
);

Then("the response should have an ID inside body keys", () => {
  cy.get("@postRequest").then((response) => {
    expect(response.body).to.have.property("id");
  });
});

Then("the response should have status 400 and an error message", () => {
  cy.get("@postRequest").then((response) => {
    expect(response.status).to.eq(400);
    expect(response.body).to.have.property("error");
  });
});
