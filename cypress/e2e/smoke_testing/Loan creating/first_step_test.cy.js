const get = require('./dadaxon.cy')

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
    cy.get('label[class="add-block block"]').selectFile('DSC_0037.JPG')
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
    cy.get('label[class="add-block block"]').selectFile('DSC_0037.JPG')
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
    cy.get('input[name="passport_number"]').type(9796400)
    // TODO: Implement action: "Attach photo of another person"
    cy.get('label[class="add-block block"]').selectFile('20221011_110843.jpg')
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
    cy.get('input[name="passport_number"]').type(9796400)
    cy.get('label[class="add-block block"]').selectFile('DSC_0037.JPG')
    // TODO: Implement action: "Press Продолжить"
    cy.wait(3000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Go back by back button"
    cy.get('svg[data-testid="KeyboardArrowLeftIcon"]').last().click()
    // TODO: Implement result: "Should redirect to the first page where only number is saved, other fields should be empty"
    cy.get('input[name="phone_number"]').should('have.value', '+998 (99) 848 - 02 - 73')
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
    cy.get('input[name="passport_number"]').type(9796400)
    cy.get('label[class="add-block block"]').selectFile('DSC_0037.JPG')
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
    cy.get('input[name="passport_number"]').type(9796400)
    cy.get('label[class="add-block block"]').selectFile('DSC_0037.JPG')
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
    cy.get('input[name="passport_number"]').type(9796400)
    cy.get('label[class="add-block block"]').selectFile('DSC_0037.JPG')
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
    cy.get('label[class="add-block block"]').selectFile('DSC_0037.JPG')
    cy.wait(2000)
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
    // TODO: Implement action: "Correctly fill all fields and continue"
    cy.wait(4500)
    cy.get('input[name="card_number"]').type(get.Humo)
    cy.get('input[name="card_expary"]').type(get.Humo_expire)
    cy.get('#combo-box-demo').type('неже')
    cy.contains('Неженат').click()
    cy.get('input[name="experience"]').type('5')
    cy.get('input[placeholder="Зарплата"]').type('15000000')
    cy.get('input[placeholder="Предварительная категория товара"]').type('сма')
    cy.contains('Смартфоны').click()
    cy.contains('Продолжить').click()
    // TODO: Implement action: "Loading circle should appear"
    cy.intercept('POST', 'https://test-api-agent.tbcfin.uz/v1/create-agent-history').as('create-agent-history')
    cy.wait('@create-agent-history', {timeout: 200000})
    // TODO: Implement result: "Confirm-pre-scoring api should work in Devtools > Network"
    // TODO: Implement action: "Wait for the response from confirm-pre-scoring and opening the third step"
    // TODO: Implement result: "After some time, should open Ответ скоринга page"
    cy.contains('Ответ скоринга')
    // TODO: Implement action: "Choose any Предложение and continue"
    cy.get('input[name="radio-buttons"]').eq(0).click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Дополнительные сведения page"
    cy.contains('Дополнительные сведения')
    // TODO: Implement action: "Choose any product, set any price"
    cy.wait(3000)
    cy.get('input[placeholder="Название товара"]').type('ip')
    cy.contains('iphone pro').click()
    cy.get('input[placeholder="Цена"]').type(1500000)
    // TODO: Implement action: "Choose another product by searching it and set any price"
    // TODO: Implement result: "All choosen products info should be correctly shown"
    // TODO: Implement action: "Fill other fields correctly and continue"
    cy.get('input[name="phone_number_1"]').type('010101010')
    cy.get('input[name="first_name_1"]').type('test')
    cy.get('input[name="phone_number_2"]').type('020202020')
    cy.get('input[name="first_name_2"]').type('test2')
    cy.get('input[placeholder="Кем приходится"]').eq(0).type('сы')
    cy.contains('Сын/дочь').click()
    cy.get('input[placeholder="Кем приходится"]').eq(1).type('кол')
    cy.contains('Коллега').click()
    cy.get('input[placeholder="Область фактического проживания"]').type('тош')
    cy.contains('ТОШКЕНТ ШАХРИ').click()
    cy.get('input[placeholder="Улица, дом, квартира"]').type('Yunusabad')
    cy.get('input[placeholder="Выберите день оплаты"]').type('1')
    cy.contains('10').click()
    cy.get('input[placeholder="Район фактического проживания"]').type('сир')
    cy.contains('СИРГАЛИ ТУМАНИ').click()
    cy.get('input[name="children_amount"]').type('0')
    cy.get('input[placeholder="Уровень образования"]').type('вы')
    cy.contains('Высшее').click()
    cy.get('input[placeholder="Источник дохода"]').type('за')
    cy.contains('Зарплата').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Loading circle should appear"
    // TODO: Implement action: "Wait for the response from post-scoring and opening the fifth step"
    cy.intercept('POST', 'https://test-api-agent.tbcfin.uz/v1/get-card-otp').as('get-card-otp')
    cy.wait('@get-card-otp', {timeout: 200000})
    // TODO: Implement result: "After some time, should open Договор page with document related to your purchase"

    // TODO: Implement action: "Press Продолжить"
    cy.wait(5000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open otp entering page"
    
    // TODO: Implement action: "Type correct otp from phone sms"
    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('1')
    cy.get(':nth-child(4) > input').type('5')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Фото клиента page with signed document"
    cy.contains('Фото клиента')
    // TODO: Implement action: "Download and look at that file"
    // TODO: Implement result: "The document should be signed"
    // TODO: Implement action: "Attach file and continue"
    cy.get('label[class="add-block block"]').selectFile('DSC_0037.JPG')
    cy.wait(4000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Loans page with the created loan and with Оформлено статус"
    // TODO: Implement action: "Open the test-admin website"
    cy.visit(admin_url)
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date"
    cy.contains('Заявки').click()
    cy.contains('Все рассрочки').click()
    cy.wait(2000)
    cy.get('thead > tr').find('th').eq(2).find('div').last().click()
    // TODO: Implement result: "Previously created loan should be in the list"
    // TODO: Implement action: "Open that loan"
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()
    cy.wait(2000)
    // TODO: Implement action: "Check all data in Общие сведения page"
    cy.contains(get.phone)
    // TODO: Implement result: "All data should be as you have written while creating the loan"
    cy.contains(get.passportNumber)
    // TODO: Implement action: "Go to История инцидента"
    cy.contains('История изменений').click()
    // TODO: Implement result: "The last status should be Оформлена, dates should be correct"
    cy.contains('Оформлено')
    // TODO: Implement action: "Go to Файлы"
    // TODO: Implement result: "All attached files should be there"
  });
});
