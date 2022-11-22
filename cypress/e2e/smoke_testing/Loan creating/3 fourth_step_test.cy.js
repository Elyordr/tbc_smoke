const get = require('./dadaxon.cy')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'
const new_product = 'Pixel 7 pro'

describe('Fourth step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct fourth step (added bank card)', function () {
    this.actionwords.finishedSecondStepLoanKey();
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
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
    cy.wait(10000)
    this.actionwords.openTheTestadminWebsite();
    cy.contains('Утверждена')
  });

  it('InCorrect fourth step (Continue without filling any field)', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Tap on Продолжить"
    cy.wait(3000)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "All iputs should become red with Обязательное поле"
    cy.contains('Обязательное поле')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
  });

  it('Correct fourth step with two or more profucts', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Choose any product, type any price"
    cy.wait(2000)
    cy.get('input[placeholder="Название товара"]').type('ip')
    cy.contains('iphone pro').click()
    cy.get('input[placeholder="Цена"]').type(1500000)
    // TODO: Implement action: "Tap on Добавить товар"
    cy.contains('Добавить товар').click()
    // TODO: Implement result: "New product fields should appear"
    // TODO: Implement action: "Choose any product, type any price"
    cy.get('input[placeholder="Название товара"]').eq(1).type('glad')
    cy.contains('gladish malish').click()
    cy.get('input[placeholder="Цена"]').eq(1).type(1500000)
    // TODO: Implement action: "Correctly fill all the fields and continue"    
    cy.wait(3000)
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
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    this.actionwords.openTheTestadminWebsite();
  });

  it('Correct fourth step with new product', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Tap on Новый near Название товара"
    cy.get('input[type="checkbox"]').click()
    // TODO: Implement action: "Type any product in Название товара and choose any Подкатегория, also choose if it is Eco or not"
    cy.get('input[placeholder="Подкатегория товара"]').click()
    cy.contains('Radiotelefony').click()
    cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.get('input[placeholder="Название товара"]').type(new_product)
    // TODO: Implement action: "Correctly fill all the fields and continue"
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
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open fifth step"
    cy.intercept('POST', 'https://test-api-agent.tbcfin.uz/v1/create-agent-history').as('get-card-otp')
    cy.wait('@get-card-otp', {timeout: 200000})
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
    cy.wait(5000)
    //Check from admin
    cy.viewport('macbook-16')
    cy.visit(admin_url)
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
    cy.contains(new_product)
    // TODO: Implement action: "Go to История изменений"
    cy.contains('История изменений').click()
    // TODO: Implement result: "The last status should be Утверждена"
    cy.contains('Утверждена')
    // TODO: Implement action: "Go to Общие сведения and look at Список товаров"
    // TODO: Implement result: "All chosen products should be in the list"
  });

  it('InCorrect fourth step (Price of product less than 150k or more than 35kk sum)', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Choose any product and on price type 140.000 sum or 36.000.000 sum"
    cy.get('input[placeholder="Цена"]').type(140000)
    // TODO: Implement action: "Fill all other fields correctly"
    cy.wait(3000)
    cy.get('input[placeholder="Название товара"]').type('ip')
    cy.contains('iphone pro').click()
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
    // TODO: Implement result: "Red alert should appear on Price input with Цена должна быть от 150.000 до 35.000.000 сум"
    cy.contains('Сумма рассрочки должна быть между 150 000 и 35 000 000') 
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    cy.wait(10000)
    //Check from the admin
    this.actionwords.openTheTestadminWebsite();
    cy.contains('Отменена')
  });

  it('InCorrect fourth step (Negative price of product, negative child number)', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Choose any product and on price type negative price, e.g. -1.000 sum
    cy.get('input[placeholder="Цена"]').type('-100')
    cy.get('input[placeholder="Цена"]').should('have.value', '100')
    // In child's number type -1 child"
    cy.get('input[name="children_amount"]').type('-1')
    // TODO: Implement result: "'-' symbol shouldn't be typebale in both fields"
    cy.get('input[name="children_amount"]').should('have.value', '1')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
  });

  it('InCorrect fourth step (two Identical additional numbers)', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "In both Номер телефона inputs type identical numbers"
    cy.get('input[name="phone_number_1"]').type('010101010')
    cy.get('input[name="phone_number_2"]').type('010101010')
    // TODO: Implement action: "Fill all other fields correctly"
    cy.wait(3000)
    cy.get('input[placeholder="Название товара"]').type('ip')
    cy.contains('iphone pro').click()
    cy.get('input[placeholder="Цена"]').type(1500000)
    cy.get('input[name="first_name_1"]').type('test')
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
    // TODO: Implement result: "Error message with Дополнительные Контакты Не Должны Быть Одинаковыми should appear"
    cy.contains('Дополнительные контакты не должны быть одинаковыми')
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click() 
  });

  it('Back button in the fourth step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Tap on back button"
    cy.wait(3000)
    cy.get('svg[data-testid="KeyboardArrowLeftIcon"]').last().click()
    cy.wait(3000)
    // TODO: Implement result: "Should open the third step with disabled inputs"
    // TODO: Implement action: "Tap on fourth step's tab"
    cy.contains('Дополнительные сведения').click()
    // TODO: Implement result: "All inputs in the fourth step should be editable"
    cy.get('input[placeholder="Цена"]').type(150000)
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
  });

  it('Delete the loan in the fourth step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Delete the loan"
    cy.get('div[style="margin-left: 12px;"]').find('button').click()
    cy.get('.MuiPaper-root').find('.MuiAutocomplete-popupIndicator').click()
    cy.contains('Не устраивает сумма').click()
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement action: "Open the test-admin website"
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date and choose previously created loan"
     this.actionwords.openTheTestadminWebsite();
    // TODO: Implement action: "Go to История изменений"
    // TODO: Implement result: "The last status should be Отменена"
    cy.contains('Отменена')
  });
});
