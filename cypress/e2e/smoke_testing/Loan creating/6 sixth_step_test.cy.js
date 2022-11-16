const get = require('./elyor.cy')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'
const new_product = 'Pixel 7 pro'

describe('Sixth step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct sixth step', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Download the contract and check it"
    // TODO: Implement result: "All data should be as you have written while creating the loan"
    // TODO: Implement action: "Upload the required photo and continue"
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    cy.wait(5000)
    cy.contains('Продолжить').click()
    cy.wait(3000)
    // TODO: Implement result: "Should open Loans page with Оформлено статус of previous loan"
    this.actionwords.openTheTestadminWebsite();
    cy.contains('Оформлена')
  });

  it('InCorrect sixth step (Without uploading the photo)', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Download the contract and check it"
    // TODO: Implement result: "All data should be as you have written while creating the loan"
    // TODO: Implement action: "Tap on Продолжить without uploading the photo"
    cy.wait(3000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Файл Не Найден should appear"
    cy.contains('Файл не найден')
    //Delete the loan
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
    cy.wait(5000)
  });

  it('Back button in the sixth step', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Tap on back button"
    cy.wait(2000)
    cy.get('svg[data-testid="KeyboardArrowLeftIcon"]').last().click()
    // TODO: Implement result: "Should open the fifth step"
    cy.contains('Договор').click()
    // TODO: Implement action: "Tap on sixth step's tab"
    cy.contains('Фото клиента').click()
    // TODO: Implement result: "Contract should appear"
    cy.wait(3000)
    // TODO: Implement result: "Upload photo input should be available"
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    cy.wait(3000)
    cy.contains('Продолжить').click()
    cy.wait(3000)
    //Check from admin
    this.actionwords.openTheTestadminWebsite();
    cy.contains('Оформлена')
  });

  it('Delete the loan in the sixth step', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Tap on delete button"
    // TODO: Implement result: "Popup with Отменить заявку should appear"
    // TODO: Implement action: "Choose any reason and continue"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
    cy.wait(5000)
    // TODO: Implement result: "Should open Loans page and previous loan's status should be Отменен"
    // TODO: Implement action: "Open the test-admin website"
    this.actionwords.openTheTestadminWebsite();
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date and choose previously created loan"
    // TODO: Implement action: "Go to История изменений"
    // TODO: Implement result: "The last status should be Отменена"
    cy.contains('Отменена')
  });

  it('Exit from the sixth step', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('.MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.active > .MuiButtonBase-root').click()
    cy.contains('Продолжить').click()
    // TODO: Implement action: "Go back to Loans page and tap on the previous loan"
    cy.get('div[class="_item_2xst8_56"]').eq(0).click()
    // TODO: Implement action: "Tap on sixth step's tab"
    cy.contains('Фото клиента').click()
    // TODO: Implement result: "Upload photo input should be available"
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    cy.wait(3000)
    cy.contains('Продолжить').click()
    cy.wait(3000)
  });
  // it('Correct sixth step (two or more photo upload)', function () {
  //   this.actionwords.finishedFifthStepLoanKey();
  //   // TODO: Implement action: "Download the contract and check it"
  //   // TODO: Implement result: "All data should be as you have written while creating the loan"
  //   // TODO: Implement action: "Upload the required photo"
  //   cy.get('label[class="add-block block"]').selectFile(get.filePath)
  //   cy.wait(3000)
  //   // TODO: Implement action: "Upload the another photo and continue"
  //   cy.get('label[class="add-block block"]').selectFile(get.filePath)
  //   cy.wait(3000)
  //   cy.contains('Продолжить').click()
  //   cy.wait(5000)
  //   // TODO: Implement result: "Should open Loans page with Оформлено статус of previous loan"
  //   this.actionwords.openTheTestadminWebsite();
  //   cy.contains('Оформлена')
  // });

  // it('Uploading the photo after the loan is finished', function () {
  //   this.actionwords.finishedFifthStepLoanKey();
  //   // TODO: Implement action: "Download the contract and check it"
  //   // TODO: Implement result: "All data should be as you have written while creating the loan"
  //   // TODO: Implement action: "Upload the required photo"
  //   // TODO: Implement action: "Upload the another photo and continue"
  //   // TODO: Implement result: "Should open Loans page with Оформлено статус of previous loan"
  //   this.actionwords.checkFromAdmin();
  //   // TODO: Implement action: "Open the previous loan again and go to the sixth step"
  //   // TODO: Implement action: "Upload another photo and continue"
  //   this.actionwords.checkFromAdmin();
  //   throw 'Not implemented';
  // });
});
