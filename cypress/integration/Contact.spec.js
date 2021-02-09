///<reference types='cypress'/>

describe('Checks Contact Page for key elements and their functionality', () => {
    const firstname = "This"
    const lastname = "is an entirely"
    const organisation = "automated"
    const email = "test"
    const phone = "0422274998"
    const enquiry ="done with cypress"

    beforeEach(() => {
        cy.visit('http://localhost:3001/contact')
    });

    it('has a Submit button', () => {
        cy.contains('Submit').click()
    });

    it('has a background video', () => {
        cy.get('[id="background-video"]');
    });

    it('contains an Enquiry form that works', () => {
        cy.get('[id="enquiry-table"]').should("be.visible");
        cy.contains("Submit").click();
        cy.url().should("include", "contact");
        cy.get("input[name=first_name]").type(firstname);
        cy.get("input[name=last_name]").type(lastname);
        cy.get("input[name=organisation]").type(organisation);
        cy.get("input[name=email]").type(email);
        cy.get("input[name=phone_number]").type(phone);
        cy.get("textarea[name=description]").type(enquiry);
        cy.contains("Submit").click();
    });
})