const get = require('./dadaxon.cy')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'
const new_product = 'Pixel 7 pro'

describe('Fifth step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct fifth step', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Go back to the loan"
    // TODO: Implement action: "Check if the all info in the contract is correct"
    cy.wait(3000)
    cy.contains('ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ')
    // TODO: Implement result: "Номер заявки in the contract and on the top of the website should be the same"
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type the correct otp from phone"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open the sixth step"
    cy.contains('Файл')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    cy.wait(5000)
  });

  it('Back button in the fifth step', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Tap on back button"
    cy.wait(2000)
    cy.get('svg[data-testid="KeyboardArrowLeftIcon"]').last().click()
    // TODO: Implement result: "Should open the fourth step with disabled inputs"
    cy.get('input[placeholder="Цена"]').should('be.disabled')
    // TODO: Implement action: "Tap on fifth step's tab"
    cy.contains('Договор').click()
    // TODO: Implement result: "Contract should appear"
    cy.wait(3000)
    cy.contains('ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    cy.wait(5000)
  });

  // it('Exit from the fifth step', function () {
  //   this.actionwords.finishedFourthStepLoanKey();
  //   // TODO: Implement action: "Go to Возвраты page"
  //   // TODO: Implement action: "Go back to Loans page and tap on the previous loan"
  //   cy.get('.MuiBox-root > .MuiButtonBase-root').click()
  //   cy.get('.active > .MuiButtonBase-root').click()
  //   cy.get('div[class="_item_2xst8_56"]').eq(0).click()
  //   // TODO: Implement action: "Tap on fifth step's tab"
  //   cy.wait(5000)
  //   // TODO: Implement action: "Go back to Loans page and tap on the previous loan"
  //   cy.get('.MuiBox-root > .MuiButtonBase-root').click()
  //   cy.get('.active > .MuiButtonBase-root').click()
  //   cy.get('div[class="_item_2xst8_56"]').eq(0).click()
  //   cy.contains('Договор').click()
  //   // TODO: Implement result: "Contract should appear"
  //   cy.wait(3000)
  //   cy.contains('ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ')
  //   // TODO: Implement action: "Delete the loan"
  //   cy.get('div[style="margin-left: 12px;"]').find('button').click()
  //   cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
  //   cy.contains('Не устраивает сумма').click()
  //   cy.get('.MuiPaper-root').contains('Продолжить').click() 
  // });

  it('Delete the loan in the fifth step', function () {
    this.actionwords.finishedFourthStepLoanKey();
    cy.wait(3000)
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
    cy.wait(5000)
    // TODO: Implement action: "Tap on delete button"
    // TODO: Implement result: "Popup with Отменить заявку should appear"
    // TODO: Implement action: "Choose any reason and continue"
    // TODO: Implement result: "Should open Loans page and previous loan's status should be Отменен"
    // TODO: Implement action: "Open the test-admin website"
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date and choose previously created loan"
    this.actionwords.openTheTestadminWebsite();
    // TODO: Implement action: "Go to История изменений"
    // TODO: Implement result: "The last status should be Отменена"
    cy.contains('Отменена')
  });

  it('Incorrect fifth step (incorrect otp)', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    // TODO: Implement action: "Tap on Отправить заново"
    // TODO: Implement action: "Type incorrect otp and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('2')
    cy.get(':nth-child(3) > input').type('2')
    cy.get(':nth-child(4) > input').type('5')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Неправильный код should appear"
    cy.get('.MuiAlert-message').contains('Введен неверный код подтверждения!')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    cy.wait(5000)    
  });

  it('Incorrect fifth step (go back from otp)', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    cy.wait(2000)
    // TODO: Implement action: "Go back by back button"
    cy.get('svg[data-testid="KeyboardArrowLeftIcon"]').last().click()
    // TODO: Implement result: "Should redirect to the fifth step with contract"
    cy.wait(3000)
    cy.contains('ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    cy.wait(6000)
  });

  it('Correct fifth step with Отправить заново in OTP', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    cy.wait(120000)
    // TODO: Implement action: "Type the correct otp from phone"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Неправильный код should appear"
    cy.get('.MuiAlert-message').contains('Code is expired.')
    // TODO: Implement action: "Tap on Отправить заново"
    cy.contains('Отправить заново').click()
    // TODO: Implement action: "Type second correct otp and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should redirect to the sixth step"
    cy.contains('Файл')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    cy.wait(5000)
  });

  it('Incorrect fifth step (expired otp)', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    cy.wait(120000)
    // TODO: Implement action: "Tap on Отправить заново"
    cy.contains('Отправить заново')
    // TODO: Implement action: "Type the correct otp from phone"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Неправильный код should appear"
    cy.get('.MuiAlert-message').contains('Code is expired.')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    cy.wait(5000)
  });
});
