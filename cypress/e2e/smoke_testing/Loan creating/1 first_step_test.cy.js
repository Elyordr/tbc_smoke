const get = require('./elyor.cy')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'


describe('First step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });
 
  it('Incorrect loan creation(short passport info in the first step)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with incorrect data
    // Ex.: Number - 99120020
    // Birth date - 10.02.200
    // Passport series - A
    // Passport number - 658654
    // And continue"
    cy.get('input[name="phone_number"]').type(99120020)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(1002200)
    cy.get('input[name="passport_series"]').type('A')
    cy.get('input[name="passport_number"]').type(658654)
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    cy.wait(2000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Red alert should appear on all incorrectly written fields with Вы не до конца заполнили поле"
    cy.contains('Неправильный формат')
  });

  it('Incorrect loan creation(No photo)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data without uploading the photo"
    cy.get('input[name="phone_number"]').type(get.phone)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(get.birth)
    cy.get('input[name="passport_series"]').type(get.passportSeria)
    cy.get('input[name="passport_number"]').type(get.passportNumber)
    cy.wait(2000)
    // TODO: Implement action: "Press Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Фото не найдено should appear"
    cy.contains('Файл не найден')
  });

  it('Incorrect loan creation(incorrect passport info in the first step)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data, except any one field, where should write incorrect(eg. incorrect passport number)"
    cy.get('input[name="phone_number"]').type(get.phone)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(get.birth)
    cy.get('input[name="passport_series"]').type(get.passportSeria)
    cy.get('input[name="passport_number"]').type(1111111)
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    cy.wait(4000)
    // TODO: Implement action: "Press Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type correct otp from phone sms and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Паспортные Данные Введены Неправильно should appear and should redirect to the first page without attached photo, but with other info saved"
    cy.get('.MuiAlert-message').contains('Паспортные данные введены неправильно')
  });

  it('Incorrect loan creation(incorrect photo)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    cy.get('input[name="phone_number"]').type(get.phone)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(get.birth)
    cy.get('input[name="passport_series"]').type(get.passportSeria)
    cy.get('input[name="passport_number"]').type(get.passportNumber)
    // TODO: Implement action: "Attach photo of another person"
    cy.get('label[class="add-block block"]').selectFile('bekzod.jpg')
    cy.wait(3000)
    // TODO: Implement action: "Press Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type correct otp from phone sms and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Не Удалось Распознать should appear and should redirect to the first page without attached photo, but with other info saved"
    cy.get('.MuiAlert-message').contains('Не удалось распознать')
  });

  it('Incorrect loan creation(go back from first otp)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    cy.get('input[name="phone_number"]').type(get.phone)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(get.birth)
    cy.get('input[name="passport_series"]').type(get.passportSeria)
    cy.get('input[name="passport_number"]').type(get.passportNumber)
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Go back by back button"
    cy.get('svg[data-testid="KeyboardArrowLeftIcon"]').last().click()
    // TODO: Implement result: "Should redirect to the first page where only number is saved, other fields should be empty"
    cy.get('input[placeholder="dd-mm-yyyy"]').should('be.empty')
    cy.get('input[name="phone_number"]').should('be.empty')
    cy.get('input[name="passport_series"]').should('be.empty')
    cy.get('input[name="passport_number"]').should('be.empty')
  });

  it('Incorrect loan creation(incorrect otp)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    cy.get('input[name="phone_number"]').type(get.phone)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(get.birth)
    cy.get('input[name="passport_series"]').type(get.passportSeria)
    cy.get('input[name="passport_number"]').type(get.passportNumber)
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type incorrect otp and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('2')
    cy.get(':nth-child(3) > input').type('2')
    cy.get(':nth-child(4) > input').type('5')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Неправильный код should appear"
    cy.get('.MuiAlert-message').contains('Введен неверный код подтверждения!')
  });

  it('Incorrect loan creation(expired otp)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    cy.get('input[name="phone_number"]').type(get.phone)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(get.birth)
    cy.get('input[name="passport_series"]').type(get.passportSeria)
    cy.get('input[name="passport_number"]').type(get.passportNumber)
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    cy.wait(120000)
    // TODO: Implement action: "Type correct otp and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Код истёк should appear"
    cy.get('.MuiAlert-message').contains('Code is expired.')
  });

  it('Correct loan creation with only Отправить заново in first otp', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    cy.get('input[name="phone_number"]').type(get.phone)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(get.birth)
    cy.get('input[name="passport_series"]').type(get.passportSeria)
    cy.get('input[name="passport_number"]').type(get.passportNumber)
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    cy.wait(121000)
    // TODO: Implement action: "Type correct otp and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Код истёк should appear"
    cy.get('.MuiAlert-message').contains('Code is expired.')
    // TODO: Implement action: "Tap on Отправить заново"
    cy.contains('Отправить заново').click()
    // TODO: Implement action: "Type second correct otp and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should redirect to second step"
  });
  it('Correct loan creation', function () {
    cy.viewport('iphone-x')
    this.actionwords.loginKey();
    // TODO: Implement action: "Create новая заявка"
    cy.contains('Новая заявка').click()
    cy.viewport('macbook-16')
    // TODO: Implement result: "Should open Основные сведения typing page"
    cy.contains('Основные сведения ')
    // TODO: Implement action: "Correctly fill all fields and attach correct photo, then continue"
    cy.get('input[name="phone_number"]').type(get.phone)
    cy.get('input[placeholder="dd-mm-yyyy"]').type(get.birth)
    cy.get('input[name="passport_series"]').type(get.passportSeria)
    cy.get('input[name="passport_number"]').type(get.passportNumber)
    cy.get('label[class="add-block block"]').selectFile(get.filePath)
    cy.wait(3000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"

    // TODO: Implement action: "Enter correct otp and continue"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.contains('Продолжить').click()
    cy.intercept('GET', 'https://test-api-agent.tbcfin.uz/v1/get-family-statuses').as('get-family-status')
    cy.wait('@get-family-status', {timeout: 10000})
    // TODO: Implement result: "Should open Сведения о клиенте page"
    cy.contains('Сведения о клиенте')
  });
});
