const get = require('./dadaxon.cy')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'

describe('Third step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct third step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    cy.get('._success_1f25r_11').contains('Успешно!')
    // TODO: Implement action: "Choose any option and continue"
    cy.get('input[name="radio-buttons"]').eq(0).click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open the fourth step"
    cy.wait(3000)
    cy.contains('Товары')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
    // TODO: Implement action: "Open the Admin website > Все рассрочки > Choose previous loan > История изменений"
    cy.visit(admin_url)
    cy.viewport('macbook-16')
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    cy.contains('Заявки').click()
    cy.contains('Все рассрочки').click()
    cy.wait(2000)
    cy.get('thead > tr').find('th').eq(2).find('div').last().click()
    cy.wait(3000)
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()
    cy.wait(2000)
    // TODO: Implement result: "The last status should be В работе"
    cy.contains('История изменений').click()
    cy.contains('В работе')
  });

  it('Клиент отказался', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    cy.get('._success_1f25r_11').contains('Успешно!')
    // TODO: Implement action: "Tap on Клиент отказался"
    cy.contains('Клиент отказался').click()
    // TODO: Implement result: "Should open popup with reasons of canceling"
    cy.get('.MuiPaper-root').find('button[aria-label="Open"]').click()
    cy.wait(1000)
    // TODO: Implement action: "Choose any reason and continue"
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
    // TODO: Implement result: "Should open Loans page and previous loan's status should be Отменен"
    cy.get('div[class="_item_2xst8_56"]').eq(0)
    .contains('Отменена')
    // TODO: Implement action: "Open the Admin website > Все рассрочки > Choose previous loan > История изменений"
    cy.visit(admin_url)
    cy.viewport('macbook-16')
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    cy.contains('Заявки').click()
    cy.contains('Все рассрочки').click()
    cy.wait(2000)
    cy.get('thead > tr').find('th').eq(2).find('div').last().click()
    cy.wait(3000)
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()
    cy.wait(2000)
    // TODO: Implement result: "The last status should be Отменена"
    cy.contains('История изменений').click()
    cy.contains('Отменена')
  });

  it('Back button in the third step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    cy.get('._success_1f25r_11').contains('Успешно!')
    // TODO: Implement action: "Tap on back button"
    cy.get('svg[data-testid="KeyboardArrowLeftIcon"]').last().click()
    cy.wait(3000)
    // TODO: Implement result: "Should open the second step with disabled inputs and all previously written data"
    cy.get('input[name="card_expary"]').should('be.disabled')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open third step with editable options"
    cy.get('input[name="radio-buttons"]').eq(0).click()
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
  });

  it('Exit from the third step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    cy.get('._success_1f25r_11').contains('Успешно!')
    // TODO: Implement action: "Exit from the loan"
    cy.get('.MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.active > .MuiButtonBase-root').click()
    cy.contains('Продолжить').click()
    // TODO: Implement action: "Open the previous loan again"
    cy.get('div[class="_item_2xst8_56"]').eq(0).click()
    // TODO: Implement result: "Should open the first step with disabled inputs and all previously written data"
    cy.get('input[name="phone_number"]').should('be.disabled')
    // TODO: Implement action: "Tap on third step's tab"
    cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
    // TODO: Implement result: "Should open third step with editable options"
    cy.get('input[name="radio-buttons"]').eq(0).click()
    // TODO: Implement action: "Delete the loan"
    cy.get('.MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.active > .MuiButtonBase-root').click()
    cy.get('div[class="_item_2xst8_56"]').eq(0)
    cy.get('button[style="height: 35px; width: 30px;"]').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
  });

  it('Delete the new loan from the third step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    cy.get('._success_1f25r_11').contains('Успешно!')
    // TODO: Implement action: "Tap on delete button on the top right"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
    // TODO: Implement result: "Popup with Отменить заявку should appear"
    // TODO: Implement action: "Go to Loans page and look at status of previous loan"
    cy.get('div[class="_item_2xst8_56"]').eq(0)
    // TODO: Implement result: "Status should be Отменен"
    .contains('Отменен')
    // TODO: Implement action: "Open that loan and go to third step"
    cy.get('div[class="_item_2xst8_56"]').eq(0).click()
    // TODO: Implement result: "Third step should not be editable"
    cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
    cy.get('input[name="radio-buttons"]').eq(0).click()
  });

  it('Incorrect third step (Continue without any choice)', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should not be any action"
    cy.get('._success_1f25r_11').contains('Успешно!')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
  });

  // it('Multiple choice of options', function () {
  //   this.actionwords.finishedSecondStepLoanKey();
  //   // TODO: Implement action: "Try to choose several options"
  //   cy.get('input[name="radio-buttons"]').eq(0).click()
  //   cy.get('input[name="radio-buttons"]').eq(1).click()
  //   // TODO: Implement result: "Only the last option should be chosen"
  //   cy.get('input[name="radio-buttons"]').eq(0).should('not.be.active')
  //   // TODO: Implement action: "Delete the loan"
  //   cy.get('div[style="margin-left: 12px;"]').find('button').click()
  //   cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
  //   cy.contains('Не устраивает сумма').click()
  //   cy.get('.MuiPaper-root').contains('Продолжить').click() 
  // });
});
