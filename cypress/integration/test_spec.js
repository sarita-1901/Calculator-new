// example from the docs
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

// my actual first test - does the page load
describe('The main page loads', () => {
  it('successfully loads', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
  }) 
})


// testing basic operations
describe('Basic Calculator Operation Add', () => {
  it('checks 9 + 7 equals 16', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5501/index.html')

    // Act
    cy.get(".num-9").click();
    cy.get(".operplus").click();
    cy.get(".num-7").click();
    cy.get(".operequal").click();

    // Assert
    cy.get(".calc-answer1").should("have.text", "16");

    
  }) 
})

describe('Basic Calculator Operation Minus', () => {
  it('checks 9 - 7 equals 2', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5501/index.html')

    // Act
    cy.get(".num-9").click();
    cy.get(".operminus").click();
    cy.get(".num-7").click();
    cy.get(".operequal").click();

    // Assert
    cy.get(".calc-answer1").should("have.text", "2");

  }) 
})

describe('Basic Calculator Operation Multiply', () => {
  it('checks 9 * 7 equals 63', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5501/index.html')

    // Act
    cy.get(".num-9").click();
    cy.get(".opermultiply").click();
    cy.get(".num-7").click();
    cy.get(".operequal").click();

    // Assert
    cy.get(".calc-answer1").should("have.text", "63");
    
  }) 
})

describe('Basic Calculator Operation Divide', () => {
  it('checks 9 divides 7 equals ', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5501/index.html')

    // Act
    cy.get(".num-9").click();
    cy.get(".operdivide").click();
    cy.get(".num-7").click();
    cy.get(".operequal").click();

    // Assert
    cy.get(".calc-answer1").should("have.text", "1.2857142857");

  
  }) 
})

