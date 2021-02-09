///<reference types='cypress'/>

describe("login", () => {
    const email = "customledscreensolutions@gmail.com";
    const password = "password";
  
    beforeEach(() => {
      cy.visit("http://localhost:3001/sign_in");
    });
  
    it("Log In", () => {
      cy.contains("Login").click();
      cy.url().should("include", "sign_in");
      cy.get("input[name=email]").type(email);
  
      cy.get("input[name=password]").type(password);
  
      cy.contains("Login").click();
    });
  });