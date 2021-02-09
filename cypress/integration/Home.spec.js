///<reference types='cypress'/>

describe('Checks Home Page for key display elements', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    });

    it('has a logo', () => {
        cy.get('[alt="CLSS-logo"]').should("be.visible");
    });

    it('has a background video', () => {
        cy.get('[id="background-video"]');
    });
    
})