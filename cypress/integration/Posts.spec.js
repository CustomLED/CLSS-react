///<reference types='cypress'/>

describe('Do the post images load in?', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3001/posts')
  });

  it('has posts', () => {
      cy.get('[src="https://res.cloudinary.com/custom-led-screen-solutions/image/upload/v1612589056/CLSS/CA9550F6-C742-4C1A-B307-FC965A14917A_1_105_c_dmaa1d.jpg"]')
      .should("be.visible");
  });

  it('has buttons', () => {
    cy.contains('READ').click()
  });

})

