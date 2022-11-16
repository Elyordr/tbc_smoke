const get = require('./dadaxon.cy')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'

describe('Second step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('InCorrect second step(Short card number)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type card number > 15 numbers"
    cy.get('input[name="card_number"]').type(111111)
    cy.get('input[name="card_expary"]').type(get.Humo_expire)
    cy.get('#combo-box-demo').type('неже')
    cy.contains('Неженат').click()
    cy.get('input[name="experience"]').type('5')
    cy.get('input[placeholder="Зарплата"]').type('15000000')
    cy.get('input[placeholder="Предварительная категория товара"]').type('сма')
    cy.contains('Смартфоны').click()
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Red alert should be on card number input with Некорректный формат"
    cy.contains('Неправильный формат')
  });

  it('InCorrect second step(Short card expire date)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type on card expire date 11/2"
    cy.get('input[name="card_number"]').type(get.Humo)
    cy.get('input[name="card_expary"]').type(112)
    cy.get('#combo-box-demo').type('неже')
    cy.contains('Неженат').click()
    cy.get('input[name="experience"]').type('5')
    cy.get('input[placeholder="Зарплата"]').type('15000000')
    cy.get('input[placeholder="Предварительная категория товара"]').type('сма')
    cy.contains('Смартфоны').click()
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Red alert should be on card number input with Некорректный формат"
    cy.contains('Неправильный формат')
  });

  it('InCorrect second step(Expired card date)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type on card expire date 11/21"
    cy.get('input[name="card_number"]').type(get.Humo)
    cy.get('input[name="card_expary"]').type(1121)
    cy.get('#combo-box-demo').type('неже')
    cy.contains('Неженат').click()
    cy.get('input[name="experience"]').type('5')
    cy.get('input[placeholder="Зарплата"]').type('15000000')
    cy.get('input[placeholder="Предварительная категория товара"]').type('сма')
    cy.contains('Смартфоны').click()
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should be error message with Пожалуйста, Введите Номер Карты, Срок Действия Которой Не Истекает В Течение 11 Месяцев."  
    cy.contains('Срок действия карты истек. Пожалуйста, введите действующую карту')
  });

  it('InCorrect second step(Nonexistent card number)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type random numbers in card number input"
    cy.get('input[name="card_number"]').type(1111111111111111)
    cy.get('input[name="card_expary"]').type(get.Humo_expire)
    cy.get('#combo-box-demo').type('неже')
    cy.contains('Неженат').click()
    cy.get('input[name="experience"]').type('5')
    cy.get('input[placeholder="Зарплата"]').type('15000000')
    cy.get('input[placeholder="Предварительная категория товара"]').type('сма')
    cy.contains('Смартфоны').click()
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Card not found! should appear"
    cy.contains("Произошли ошибки при обрашении к серверу MyUzcard. Имя метода: cards.MyUzcard_GetP2PInfo. Номер карты: 1111111111111111. Код состояния: 400")
  });

  it('InCorrect second step(Zero salary)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type 0 on Зарплата field"
    cy.get('input[name="card_number"]').type(get.Humo)
    cy.get('input[name="card_expary"]').type(get.Humo_expire)
    cy.get('#combo-box-demo').type('неже')
    cy.contains('Неженат').click()
    cy.get('input[name="experience"]').type('5')
    cy.get('input[placeholder="Зарплата"]').type('0')
    cy.get('input[placeholder="Предварительная категория товара"]').type('сма')
    cy.contains('Смартфоны').click()
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Red alert should be on card expire date input with Зарплата должна быть больше 0"
    cy.contains('Зарплата должна быть больше 0')
  });

  it('Delete the new loan from the second step', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Tap on delete button on the top right"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    // TODO: Implement result: "Popup with Отменить заявку should appear"
    cy.get('.MuiAutocomplete-popupIndicator').last().click()
    // TODO: Implement action: "Choose any reason and continue"
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').last().click()
    // TODO: Implement action: "Go to Loans page and look at status of previous loan"
    cy.get('div[class="_item_2xst8_56"]').eq(0)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Status should be Отменен"
    .contains('Отменена')
    // TODO: Implement action: "Open that loan and go to second step"
    cy.get('div[class="_item_2xst8_56"]').eq(0).click()
    // TODO: Implement result: "Data in the second step should not be editable"
    cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()
    cy.get('input[name="card_number"]').should('be.disabled')
  });

  it('InCorrect second step(Card number of another person)', function () {
    this.actionwords.secondStepLoanKey();
    cy.get('input[name="card_number"]').type(9860100124696483)
    cy.get('input[name="card_expary"]').type('0726')
    cy.get('#combo-box-demo').type('неже')
    cy.contains('Неженат').click()
    cy.get('input[name="experience"]').type('5')
    cy.get('input[placeholder="Зарплата"]').type('15000000')
    cy.get('input[placeholder="Предварительная категория товара"]').type('сма')
    cy.contains('Смартфоны').click()
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Error message with Смс информирование подключено к другому телефону should appear"
    cy.contains('Произошли ошибки при обрашении к серверу MyUzcard. Имя метода: cards.MyUzcard_GetP2PInfo. Номер карты: 9860100124696484. Код состояния: 400')
  });

  it('Exit from the second step and reopen loan', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Go to Заявки page and reopen the previous loan"
    cy.get('.MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.active > .MuiButtonBase-root').click()
    cy.contains('Продолжить').click()
    cy.get('div[class="_item_2xst8_56"]').eq(0).click()
    // TODO: Implement result: "Should open first step with all written data and data should not be editable"
    cy.get('input[name="phone_number"]').should('be.disabled')
    // TODO: Implement action: "Tap on Продолжить"
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open empty second step and data should be editable"
    cy.get('input[name="card_number"]').type(get.Humo)
  });

  it('Correct second step with Humo', function () {
    this.actionwords.finishedSecondStepLoanKey();
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
  });
});
