///<reference types='cypress'/>

describe("login", () => {
    const email = "customledscreensolutions@gmail.com";
    const password = "password";
    const jobname = "Cypress Incorporated"
    const jobdescription = "Installation completed via Cypress"
    beforeEach(() => {
      cy.visit("http://localhost:3001/sign_in");
    });
  
    it("Log In and create a new post", () => {
      cy.contains("Login").click();
      cy.url().should("include", "sign_in");
      cy.get("input[name=email]").type(email);
      cy.get("input[name=password]").type(password);
      cy.contains("Login").click();
      cy.wait(2000)
      cy.visit('http://localhost:3001/posts/new');
      cy.url().should("include", "posts/new");
      cy.get('textarea[name=name]').type(jobname);
      cy.get('textarea[name=text]').type(jobdescription);
      cy.contains("Create").click();
    });

  });