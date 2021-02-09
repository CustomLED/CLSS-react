///<reference types='cypress'/>

//PLEASE NOTE THIS DATABASE IS SEEDED WITH 10 ITEMS
//IF THE DATABASE DOES NOT HAVE AN ITEM AT ID 5 THIS TEST WILL FAIL ON LINE 23

describe("login", () => {
    const email = "customledscreensolutions@gmail.com";
    const password = "password";

    beforeEach(() => {
      cy.visit("http://localhost:3001/sign_in");
    });
  
    it("Log In and delete an existing post", () => {
      cy.contains("Login").click();
      cy.url().should("include", "sign_in");
      cy.get("input[name=email]").type(email);
      cy.get("input[name=password]").type(password);
      cy.contains("Login").click();
      cy.wait(2000)
      cy.visit('http://localhost:3001/adminenquiries');
      cy.url().should("include", "adminenquiries");
      cy.get('a[href*="/adminenquiries/5"]').click();
      cy.contains("Delete").click();
    });

  });