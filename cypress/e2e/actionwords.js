const url = 'https://test-new-agent.tbcfin.uz/'

const get = require('./smoke_testing/Loan creating/elyor.cy')
const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'

exports.Actionwords = {
  openTheTestadminWebsite: function () {    cy.visit(admin_url)
    // TODO: Implement action: "Open the test-admin website"
    cy.viewport('macbook-16')
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    cy.contains('Заявки').click()
    cy.contains('Все рассрочки').click()
    cy.wait(2000)
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date and choose previously created loan"
    cy.get('thead > tr').find('th').eq(2).find('div').last().click()
    cy.wait(3000)
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()
    cy.wait(2000)
    // TODO: Implement action: "Go to История изменений"
    cy.contains('История изменений').click()
    // TODO: Implement result: "The last status should be Утверждена"
    // cy.contains('Утверждена')
    // TODO: Implement action: "Go to Общие сведения and look at Список товаров"
    // TODO: Implement result: "All chosen products should be in the list"
  },
  openAdminPanelsms: function () {
    cy.visit(admin_url)
    // TODO: Implement action: "Open the test-admin website"
    cy.viewport('macbook-16')
    cy.get('#login').type('admin@mail.ru')
    cy.get('#password').type('12345678')
    cy.get('.button').click()
    cy.contains('Features').click()
    cy.get('div[class=" search-area flex items-center h-8  mr-4"]').click()
    cy.get('input[placeholder="Поиск...."]').type('77')
    cy.wait(3000)
    cy.get('tbody > tr > td').eq(7).find('input[type="checkbox"]').click()
  },
  loginKey: function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // cy.viewport('iphone-x')
    cy.visit(url)
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    cy.get('input[name="phone_number"]').type('000000000')
    cy.get('input[name="password"]').type('default')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    cy.get('input[name="branch_name"]').type('офи')
    cy.contains('Офис').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement result: "Should open the main page of new-agent"
    // throw 'Not implemented';
    cy.viewport('iphone-x')
  },
  firstStepLoanKey: function () {
    this.loginKey();
    cy.viewport('iphone-x')
    // TODO: Implement action: "Create новая заявка"
    cy.contains('Новая заявка').click()
    cy.viewport('macbook-16')
    // TODO: Implement result: "Should open Основные сведения typing page"
    cy.contains('Основные сведения ')
  },
  secondStepLoanKey: function () {
    this.loginKey();
    // TODO: Implement action: "Create новая заявка"
    cy.contains('Новая заявка').click()
    cy.viewport('iphone-x')
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
  },
  finishedSecondStepLoanKey: function () {
    this.secondStepLoanKey();
    cy.viewport('iphone-x')
    // TODO: Implement action: "Fill all the fields correctly and continue"
    cy.get('input[name="card_number"]').type(get.Humo)
    cy.get('input[name="card_expary"]').type(get.Humo_expire)
    cy.get('#combo-box-demo').type('неже')
    cy.contains('Неженат').click()
    cy.get('input[name="experience"]').type('5')
    cy.get('input[placeholder="Зарплата"]').type('15000000')
    cy.get('input[placeholder="Предварительная категория товара"]').type('сма')
    cy.contains('Смартфоны').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open third step"
    cy.intercept('POST', 'https://test-api-agent.tbcfin.uz/v1/create-agent-history').as('create-agent-history')
    cy.wait('@create-agent-history', {timeout: 200000})
  },
  finishedThirdStepLoanKey: function () {
    this.finishedSecondStepLoanKey();
    // this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly"
    cy.wait(3000)
    cy.get('input[placeholder="Название товара"]').type('ip')
    cy.contains('iphone pro').click()
    cy.get('input[placeholder="Цена"]').type(1500000)
    cy.get('input[name="phone_number_1"]').type('010101010')
    cy.get('input[name="first_name_1"]').type('test')
    cy.get('input[name="phone_number_2"]').type('020202020')
    cy.get('input[name="first_name_2"]').type('test2')
    cy.get('input[placeholder="Кем приходится"]').eq(0).type('кол')
    cy.contains('Коллега').click()
    cy.get('input[placeholder="Кем приходится"]').eq(1).type('кол')
    cy.contains('Коллега').click()
    cy.get('input[placeholder="Область фактического проживания"]').type('тош')
    cy.contains('ТОШКЕНТ ШАХРИ').click()
    cy.get('input[placeholder="Улица, дом, квартира"]').type('Yunusabad')
    cy.get('input[placeholder="Выберите день оплаты"]').type('1')
    cy.get('#combo-box-demo-option-0').click()
    cy.get('input[placeholder="Район фактического проживания"]').type('сир')
    cy.contains('СИРГАЛИ ТУМАНИ').click()
    cy.get('input[name="children_amount"]').type('0')
    cy.get('input[placeholder="Уровень образования"]').type('вы')
    cy.contains('Высшее').click()
    cy.get('input[placeholder="Источник дохода"]').type('за')
    cy.contains('Зарплата').click()
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Scoring loading circle and after some time should open fifth step"
    cy.intercept('POST', 'https://test-api-agent.tbcfin.uz/v1/create-agent-history').as('get-card-otp')
    cy.wait('@get-card-otp', {timeout: 200000})
    // TODO: Implement action: "Look at Рекомендация агента по клиенту and Грин карта inputs"
    // TODO: Implement result: "They defaultly should be green with Рекомендую and Нет, respectively"
    // TODO: Implement action: "Correctly fill all the fields and continue"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open OTP typing page"
    // TODO: Implement action: "Typre correct OTP from phone sms"
    // TODO: Implement result: "Should open the fifth step"
    // TODO: Implement action: "Go back to the loan"
  },
  finishedFourthStepLoanKey: function () {
    this.finishedThirdStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    cy.get('._success_1f25r_11').contains('Успешно!')
    // TODO: Implement action: "Choose any option and continue"
    cy.get('input[name="radio-buttons"]').eq(0).click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open the fourth step"
    // TODO: Implement action: "Open the Admin website > Все рассрочки > Choose previous loan > История изменений"
    // TODO: Implement action: "Go back to the loan in new-agent"
  },
  finishedFifthStepLoanKey: function () {
    this.finishedFourthStepLoanKey();
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
  },
  checkFromAdmin: function () {
    // TODO: Implement action: "Open the test-admin website"
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date and choose previously created loan"
    // TODO: Implement action: "Go to История изменений"
    // TODO: Implement result: "The last status should be Оформлено"
    // TODO: Implement action: "Go to Файлы"
    // TODO: Implement result: "All attached files and contracts should be there"
    throw 'Not implemented';
  },
  oTPOfFourthStep: function () {
    this.finishedThirdStepLoanKey();
    // TODO: Implement action: "Look at Рекомендация агента по клиенту and Грин карта inputs"
    // TODO: Implement result: "They defaultly should be green with Рекомендую and Нет, respectively"
    // TODO: Implement action: "Correctly fill all the fields and continue"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open OTP typing page"
    throw 'Not implemented';
  }
};