Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// const get = require('./dadaxon.cy')
const url = 'https://test-new-agent.tbcfin.uz/'
const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'

describe('Return Loans', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
  });
  it('Correct loan return creation (without payments)', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('[aria-label="Return"]').click()
    // TODO: Implement result: "Should open Возвраты page with all created returns list"
    cy.contains("Возвраты")
    // TODO: Implement action: "Tap on plus button on the top right"
    cy.get('button[aria-label="Новая заявка"]').click()
    // TODO: Implement result: "Should open popup with inputs of return"
    cy.contains("Найти возврат")
    // TODO: Implement action: "Type correct loan number and correct passport details, tap on Продолжить"
    cy.get('input[placeholder="Номер заявки"]').type(998480273499)
    cy.get('input[placeholder="Серия паспорта"]').type("AA")
    cy.get('input[placeholder="Номер паспорта"]').type(9796400)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open details of the chosen loan, with products client had chosen (without payments)"
    cy.wait(2000)
    cy.contains('998480273-499')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Another input with reason choosing should appeaer"
    cy.contains('Выберите причину').click()
    // TODO: Implement action: "Choose any reason and Продолжить"
    cy.get('input[placeholder="Выберите причину"]').type('то')
    cy.contains('Товар бракованный').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open OTP entering popup"
    cy.contains('Код подтверждения')
    // TODO: Implement action: "Enter the correct OTP from phone sms"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement result: "Should open Возвраты page with previously created Return and status should be Новый"
    cy.intercept('GET', 'https://test-api-agent.tbcfin.uz/v1/loan-return?limit=10&page=1').as('get-returns')
    cy.wait('@get-returns', {timeout: 10000})
    // TODO: Implement action: "Open the test-admin website"
    cy.visit(admin_url)
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    // TODO: Implement action: "Go to the Возвраты and look at the status of the previously returned loan"
    cy.contains('Заявки').click()
    cy.contains('Возвраты').click()
    cy.wait(2000)
    // TODO: Implement action: "Open that loan"
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()
    cy.wait(2000)
    // TODO: Implement result: "Status should be В процессе"
    cy.contains('998480273-499')
    cy.contains('В процессе')
    //Loan cancelation from admin
    cy.contains('История возврата').click()
    cy.get('#text').type('Cypress работает отпадно)')
    cy.get('.select__clear-indicator').click()
    cy.contains('Выберите').click()
    cy.get('#react-select-6-option-0').click()
    cy.contains('Сохранить').click()
  });

  it('Correct loan return creation (with payments)', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('[aria-label="Return"]').click()
    // TODO: Implement result: "Should open Возвраты page with all created returns list"
    cy.contains("Возвраты")
    // TODO: Implement action: "Tap on plus button on the top right"
    cy.get('button[aria-label="Новая заявка"]').click()
    // TODO: Implement result: "Should open popup with inputs of return"
    cy.contains("Найти возврат")
    // TODO: Implement action: "Type correct loan number and correct passport details, tap on Продолжить"
    cy.get('input[placeholder="Номер заявки"]').type(998480273133)
    cy.get('input[placeholder="Серия паспорта"]').type("AA")
    cy.get('input[placeholder="Номер паспорта"]').type(9796400)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open details of the chosen loan, with products client had chosen with payments"
    cy.wait(2000)
    cy.contains('998480273-133')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Another inputs with reasons of returning and bank account details, inn, mfo and transit account should appear"
    cy.contains('Реквизиты для возврата денежных средств')
    cy.contains('Выберите причину').click()
    // TODO: Implement action: "Type any info in all new inputs"
    cy.get('input[placeholder="Наименование банка"]').type('zi')
    cy.contains('АО ZIRAAT BANK').click()
    cy.get('input[placeholder="ИНН"]').type('111111111')
    cy.get('input[placeholder="МФО"]').type('22222')
    cy.get('input[placeholder="Транзитный cчет"]').type('33333333333333333333')
    // TODO: Implement action: "Choose any reason and Продолжить"
    cy.get('input[placeholder="Выберите причину"]').type('то')
    cy.contains('Товар бракованный').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open OTP entering popup"
    cy.contains('Код подтверждения')
    // TODO: Implement action: "Enter the correct OTP from phone sms"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement result: "Should open Возвраты page with previously created Return and status should be Новый"
    cy.intercept('GET', 'https://test-api-agent.tbcfin.uz/v1/loan-return?limit=10&page=1').as('get-returns')
    cy.wait('@get-returns', {timeout: 10000})
    // TODO: Implement action: "Open the test-admin website"
    cy.visit(admin_url)
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    // TODO: Implement action: "Go to the Возвраты and look at the status of the previously returned loan"
    cy.contains('Заявки').click()
    cy.contains('Возвраты').click()
    cy.wait(2000)
    // TODO: Implement action: "Open that loan"
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()
    cy.wait(2000)
    // TODO: Implement result: "Status should be В процессе"
    cy.contains('998480273-133')
    cy.contains('В процессе')
    //Loan cancelation from admin
    cy.contains('История возврата').click()
    cy.get('#text').type('Cypress работает отпадно)')
    cy.get('.select__clear-indicator').click()
    cy.contains('Выберите').click()
    cy.get('#react-select-6-option-0').click()
    cy.contains('Сохранить').click()
  });

  it('InCorrect loan return creation (incorrect loan number)', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('[aria-label="Return"]').click()
    // TODO: Implement result: "Should open Возвраты page with all created returns list"
    cy.contains("Возвраты")
    // TODO: Implement action: "Tap on plus button on the top right"
    cy.get('button[aria-label="Новая заявка"]').click()
    // TODO: Implement result: "Should open popup with inputs of return"
    cy.contains("Найти возврат")
    // TODO: Implement action: "Type incorrect loan number and correct passport details, tap on Продолжить"
    cy.get('input[placeholder="Номер заявки"]').type(998480274499)
    cy.get('input[placeholder="Серия паспорта"]').type("AA")
    cy.get('input[placeholder="Номер паспорта"]').type(9796400)
    cy.contains('Продолжить').click()
    cy.wait(2000)
    // TODO: Implement result: "Error message with Заявка Не Найдена should appear"
    cy.get('.MuiAlert-message').contains('Заявка не найдена')
  });

  it('InCorrect loan return creation (incorrect passport details)', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('[aria-label="Return"]').click()
    // TODO: Implement result: "Should open Возвраты page with all created returns list"
    cy.contains("Возвраты")
    // TODO: Implement action: "Tap on plus button on the top right"
    cy.get('button[aria-label="Новая заявка"]').click()
    // TODO: Implement result: "Should open popup with inputs of return"
    cy.contains("Найти возврат")
    // TODO: Implement action: "Type correct loan number and incorrect passport details, tap on Продолжить"
    cy.get('input[placeholder="Номер заявки"]').type(998480273499)
    cy.get('input[placeholder="Серия паспорта"]').type("AC")
    cy.get('input[placeholder="Номер паспорта"]').type(9796400)
    cy.contains('Продолжить').click()
    cy.wait(2000)
    // TODO: Implement result: "Error message with Заявка Не Найдена should appear"
    cy.get('.MuiAlert-message').contains('Заявка не найдена')
  });

  it('Delete of loan return', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('[aria-label="Return"]').click()
    // TODO: Implement result: "Should open Возвраты page with all created returns list"
    cy.contains("Возвраты")
    // TODO: Implement action: "Tap on plus button on the top right"
    cy.get('button[aria-label="Новая заявка"]').click()
    // TODO: Implement result: "Should open popup with inputs of return"
    cy.contains("Найти возврат")
    // TODO: Implement action: "Type correct loan number and correct passport details, tap on Продолжить"
    cy.get('input[placeholder="Номер заявки"]').type(998480273499)
    cy.get('input[placeholder="Серия паспорта"]').type("AA")
    cy.get('input[placeholder="Номер паспорта"]').type(9796400)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open details of the chosen loan, with products client had chosen (without payments)"
    cy.wait(2000)
    cy.contains('998480273-499')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Another input with reason choosing should appeaer"
    cy.contains('Выберите причину').click()
    // TODO: Implement action: "Choose any reason and Продолжить"
    cy.get('input[placeholder="Выберите причину"]').type('то')
    cy.contains('Товар бракованный').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open OTP entering popup"
    cy.contains('Код подтверждения')
    // TODO: Implement action: "Enter the correct OTP from phone sms"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement result: "Should open Возвраты page with previously created Return and status should be Новый"
    cy.intercept('GET', 'https://test-api-agent.tbcfin.uz/v1/loan-return?limit=10&page=1').as('get-returns')
    cy.wait('@get-returns', {timeout: 10000})
    // TODO: Implement action: "Delete this loan by delete button"
    cy.get('button[style="height: 35px; width: 30px;"]').click()
    // TODO: Implement result: "Should open popup with choosing the reason of deletion"
    // TODO: Implement action: "Choose any reason and continue"
    cy.get('.MuiAutocomplete-popupIndicator').click()
    cy.contains('передумал').click()
    cy.contains('Продолжить').click()
    cy.visit(admin_url)
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    // TODO: Implement action: "Go to the Возвраты and look at the status of the previously returned loan"
    cy.contains('Заявки').click()
    cy.contains('Возвраты').click()
    cy.wait(2000)
    // TODO: Implement action: "Open that loan"
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()
    cy.wait(2000)
    // TODO: Implement result: "Status should be Отказано"
    cy.contains('998480273-499')
    cy.contains('Отказано')
    // TODO: Implement action: "Open that loan"
    // TODO: Implement action: "All info should be correct
    // In История возврата should be two statuses, the last one should be Отказано
    // In Файлы all photos should be correct"
    // throw 'Not implemented';
  });

  it('InCorrect loan return creation (Incorrect OTP)', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('[aria-label="Return"]').click()
    // TODO: Implement result: "Should open Возвраты page with all created returns list"
    cy.contains("Возвраты")
    // TODO: Implement action: "Tap on plus button on the top right"
    cy.get('button[aria-label="Новая заявка"]').click()
    // TODO: Implement result: "Should open popup with inputs of return"
    cy.contains("Найти возврат")
    // TODO: Implement action: "Type correct loan number and correct passport details, tap on Продолжить"
    cy.get('input[placeholder="Номер заявки"]').type(998480273499)
    cy.get('input[placeholder="Серия паспорта"]').type("AA")
    cy.get('input[placeholder="Номер паспорта"]').type(9796400)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open details of the chosen loan, with products client had chosen (without payments)"
    cy.wait(2000)
    cy.contains('998480273-499')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Another input with reason choosing should appeaer"
    cy.contains('Выберите причину').click()
    // TODO: Implement action: "Choose any reason and Продолжить"
    cy.get('input[placeholder="Выберите причину"]').type('то')
    cy.contains('Товар бракованный').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open OTP entering popup"
    cy.contains('Код подтверждения')
    // TODO: Implement action: "Enter the incorrect OTP"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('2')
    cy.get(':nth-child(3) > input').type('2')
    cy.get(':nth-child(4) > input').type('5')
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement result: "Error message with Введен неверный код подтверждения! should appear"
    cy.get('.MuiAlert-message').contains('Введен неверный код подтверждения!')
  });

  it('Correct loan return creation (with Отправить заново)', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('[aria-label="Return"]').click()
    // TODO: Implement result: "Should open Возвраты page with all created returns list"
    cy.contains("Возвраты")
    // TODO: Implement action: "Tap on plus button on the top right"
    cy.get('button[aria-label="Новая заявка"]').click()
    // TODO: Implement result: "Should open popup with inputs of return"
    cy.contains("Найти возврат")
    // TODO: Implement action: "Type correct loan number and correct passport details, tap on Продолжить"
    cy.get('input[placeholder="Номер заявки"]').type(998480273499)
    cy.get('input[placeholder="Серия паспорта"]').type("AA")
    cy.get('input[placeholder="Номер паспорта"]').type(9796400)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open details of the chosen loan, with products client had chosen (without payments)"
    cy.wait(2000)
    cy.contains('998480273-499')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Another input with reason choosing should appeaer"
    cy.contains('Выберите причину').click()
    // TODO: Implement action: "Choose any reason and Продолжить"
    cy.get('input[placeholder="Выберите причину"]').type('то')
    cy.contains('Товар бракованный').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open OTP entering popup"
    cy.contains('Код подтверждения')
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново button will be available"
    cy.wait(120000)
    // TODO: Implement action: "Tap on Отправить заново"
    cy.contains('Отправить заново').click()
    // TODO: Implement action: "Enter the correct OTP from phone sms"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement result: "Should open Возвраты page with previously created Return and status should be Новый"
    cy.intercept('GET', 'https://test-api-agent.tbcfin.uz/v1/loan-return?limit=10&page=1').as('get-returns')
    cy.wait('@get-returns', {timeout: 10000})
    // TODO: Implement action: "Open the test-admin website"
    cy.visit(admin_url)
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    // TODO: Implement action: "Go to the Возвраты and look at the status of the previously returned loan"
    cy.contains('Заявки').click()
    cy.contains('Возвраты').click()
    cy.wait(2000)
    // TODO: Implement action: "Open that loan"
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()
    cy.wait(2000)
    // TODO: Implement result: "Status should be В процессе"
    cy.contains('998480273-499')
    cy.contains('В процессе')
    //Loan cancelation from admin
    cy.contains('История возврата').click()
    cy.get('#text').type('Cypress работает отпадно)')
    cy.get('.select__clear-indicator').click()
    cy.contains('Выберите').click()
    cy.get('#react-select-6-option-0').click()
    cy.contains('Сохранить').click()
  });

  it('InCorrect loan return creation (expired OTP)', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Go to Возвраты page"
    cy.get('[aria-label="Return"]').click()
    // TODO: Implement result: "Should open Возвраты page with all created returns list"
    cy.contains("Возвраты")
    // TODO: Implement action: "Tap on plus button on the top right"
    cy.get('button[aria-label="Новая заявка"]').click()
    // TODO: Implement result: "Should open popup with inputs of return"
    cy.contains("Найти возврат")
    // TODO: Implement action: "Type correct loan number and correct passport details, tap on Продолжить"
    cy.get('input[placeholder="Номер заявки"]').type(998480273499)
    cy.get('input[placeholder="Серия паспорта"]').type("AA")
    cy.get('input[placeholder="Номер паспорта"]').type(9796400)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open details of the chosen loan, with products client had chosen (without payments)"
    cy.wait(2000)
    cy.contains('998480273-499')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Another input with reason choosing should appeaer"
    cy.contains('Выберите причину').click()
    // TODO: Implement action: "Choose any reason and Продолжить"
    cy.get('input[placeholder="Выберите причину"]').type('то')
    cy.contains('Товар бракованный').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open OTP entering popup"
    cy.contains('Код подтверждения')
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново button will be available"
    cy.wait(120000)
    // TODO: Implement action: "Enter the correct OTP from phone sms"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement result: "Error message with Code Is Expired. should appear"
    cy.get('.MuiAlert-message').contains('Code is expired.')
  });
});
