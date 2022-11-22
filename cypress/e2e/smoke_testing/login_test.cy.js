import { faker } from '@faker-js/faker';
 
const name = faker.name.firstName()
const surname = faker.name.lastName()
const number = faker.phone.phoneNumber('12#######')

const url = 'https://test-new-agent.tbcfin.uz/'

const admin_url = 'https://test-admin.tbcfin.uz/#/home/application/returns'
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

const login_1 = '000000000'
const password_1 = 'default'

const login_2 = '777777777'
const password_2 = 'testalina'

describe('Login', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
  });

  // it('Correct Login', function () {
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Type correct login and password"
  //   cy.get('input[name="phone_number"]').type('000000000')
  //   cy.get('input[name="password"]').type('default')
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should open Филиал choosing page"
  //   cy.get('input[name="branch_name"]').type('офи')
  //   // TODO: Implement action: "Choose Офис and continue"
  //   cy.contains('Офис').click()
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Popup with Проверка филиала should appear"
  //   cy.get('.MuiPaper-root')
  //   // TODO: Implement action: "Press Продолжить"
  //   .contains('Продолжить').click()
  //   // TODO: Implement result: "Should open the main page of new-agent"
  //   cy.viewport('iphone-x')
  // });

  // it('Correct Login with  sms', function () {
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Type correct login and password"
  //   // TODO: Implement result: "Should open Филиал choosing page"
  //   // TODO: Implement action: "Choose Офис and continue"
  //   // TODO: Implement result: "Popup with Проверка филиала should appear"
  //   // TODO: Implement action: "Press Продолжить"
  //   // TODO: Implement result: "Should open sms typing page"
  //   // TODO: Implement action: "Type correct sms from ypur phone"
  //   // TODO: Implement result: "Should open the main page of new-agent"
  // });

  // it('Incorrect login (Incorrect phone number)', function () {
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Enter incorrect phone number and correct password, then continue"
  //   cy.get('input[name="phone_number"]').type('005000000')
  //   cy.get('input[name="password"]').type('default')
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should be error message with Агент не найден"
  //   cy.contains('Агент не найден')
  // });

  // it('Incorrect login (Incorrect password)', function () {
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Enter correct phone number and incorrect password, then continue"
  //   cy.get('input[name="phone_number"]').type('000000000')
  //   cy.get('input[name="password"]').type('defaulty')
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should open Филиал choosing page"
  //   cy.get('input[name="branch_name"]').type('офи')
  //   // TODO: Implement action: "Choose Офис and continue"
  //   cy.contains('Офис').click()
  //   cy.contains('Продолжить').click()
  //   cy.get('.MuiPaper-root')
  //   // TODO: Implement action: "Press Продолжить"
  //   .contains('Продолжить').click()
  //   // TODO: Implement result: "Should be error message with Номер или пароль введены неправильно"
  //   cy.contains('username or password is wrong')
  // });

  // it('Incorrect login (short phone number)', function () {
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Enter phone number with only six or less characters and correct password, then continue"
  //   cy.get('input[name="phone_number"]').type('0000000')
  //   cy.get('input[name="password"]').type('default')
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Red alert should appear on phone number typing field with Вы не до конца написали номер телефона"
  //   cy.contains('Вы не до конца написали номер телефона')
  // });

  // it('Incorrect login (short password)', function () {
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Enter the correct phone number and password with less than 6 six characters, then continue"
  //   cy.get('input[name="phone_number"]').type('000000000')
  //   cy.get('input[name="password"]').type('defaulty')
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should open Филиал choosing page"
  //   cy.get('input[name="branch_name"]').type('офи')
  //   // TODO: Implement action: "Choose Офис and continue"
  //   cy.contains('Офис').click()
  //   cy.contains('Продолжить').click()
  //   cy.get('.MuiPaper-root')
  //   // TODO: Implement action: "Press Продолжить"
  //   .contains('Продолжить').click()
  //   // TODO: Implement result: "Red alert should appear on password typing field with Минимум 6 символов"
  //   cy.contains('username or password is wrong')
  // });

  // it('InCorrect Login with incorrect sms', function () {
  //   this.actionwords.openAdminPanelsms();
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Type correct login and password"
  //   cy.get('input[name="phone_number"]').type(login_2)
  //   cy.get('input[name="password"]').type(password_2)
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should open Филиал choosing page"
  //   cy.get('input[name="branch_name"]').type('офи')
  //   // TODO: Implement action: "Choose Офис and continue"
  //   cy.contains('Офис').click()
  //   cy.get('button[type="submit"]').click()
  //   // TODO: Implement result: "Popup with Проверка филиала should appear"
  //   cy.get('.MuiPaper-root')
  //   // TODO: Implement action: "Press Продолжить"
  //   cy.get('button[type="submit"]').eq(1).click()
  //   // TODO: Implement result: "Should open sms typing page"
  //   // TODO: Implement action: "Type incorrect sms from ypur phone"
  //   cy.wait(1000)
  //   cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
  //   cy.get(':nth-child(2) > input').type('2')
  //   cy.get(':nth-child(3) > input').type('2')
  //   cy.get(':nth-child(4) > input').type('5')
  //   cy.contains('Продолжить').click()
  //   cy.contains('Error while creating otp log')
  //   // TODO: Implement result: "Error message with Confirm Code Does Not Match! should appear"
  //   cy.visit(admin_url)
  //   cy.contains('Features').click()
  //   cy.wait(3000)
  //   cy.get('thead > tr > th').eq(7).find('input[type="checkbox"]').click()
  //   cy.get('.w-8').eq(0).click()
  //   cy.get('input[placeholder="Поиск...."]').clear()
  // });

  // it('Correct Login with sms (Отправить заново)', function () {
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Type correct login and password"
  //   cy.get('input[name="phone_number"]').type(login_2)
  //   cy.get('input[name="password"]').type(password_2)
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should open Филиал choosing page"
  //   cy.get('input[name="branch_name"]').type('офи')
  //   // TODO: Implement action: "Choose Офис and continue"
  //   cy.contains('Офис').click()
  //   cy.get('button[type="submit"]').click()
  //   // TODO: Implement result: "Popup with Проверка филиала should appear"
  //   cy.get('.MuiPaper-root')
  //   // TODO: Implement action: "Press Продолжить"
  //   cy.get('button[type="submit"]').eq(1).click()
  //   // TODO: Implement result: "Should open sms typing page"
  //   // TODO: Implement result: "Wait for the 2 minutes, until Отправить заново will be available"
  //   cy.wait(121000)
  //   // TODO: Implement action: "Press on Отправить заново"
  //   cy.contains('Отправить заново').click()
  //   // TODO: Implement action: "Type second correct sms from your phone"
  //   cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
  //   cy.get(':nth-child(2) > input').type('1')
  //   cy.get(':nth-child(3) > input').type('1')
  //   cy.get(':nth-child(4) > input').type('5')
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should open the main page of new-agent"
  // });

  // it('InCorrect Login with expired sms', function () {
  //   // TODO: Implement action: "Open the test-new-agent website"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Type correct login and password"
  //   cy.get('input[name="phone_number"]').type(login_2)
  //   cy.get('input[name="password"]').type(password_2)
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should open Филиал choosing page"
  //   cy.get('input[name="branch_name"]').type('офи')
  //   // TODO: Implement action: "Choose Офис and continue"
  //   cy.contains('Офис').click()
  //   cy.get('button[type="submit"]').click()
  //   // TODO: Implement result: "Popup with Проверка филиала should appear"
  //   cy.get('.MuiPaper-root')
  //   // TODO: Implement action: "Press Продолжить"
  //   cy.get('button[type="submit"]').eq(1).click()
  //   // TODO: Implement result: "Should open sms typing page"
  //   // TODO: Implement result: "Wait for the 2 minutes, until Отправить заново will be available"
  //   cy.wait(121000)
  //   // TODO: Implement action: "Type correct sms from your phone"
  //   cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('3')
  //   cy.get(':nth-child(2) > input').type('1')
  //   cy.get(':nth-child(3) > input').type('1')
  //   cy.get(':nth-child(4) > input').type('5')
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Error message with Код истек should appear"
  //   cy.contains('Код истек')
  // });

  it('Correct Login with sms and Public offer', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    cy.visit(url)
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    cy.get('input[name="phone_number"]').type(login_2)
    cy.get('input[name="password"]').type(password_2)
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Филиал choosing page"
    cy.get('input[name="branch_name"]').type('офи')
    // TODO: Implement action: "Choose Офис and continue"
    cy.contains('Офис').click()
    cy.get('button[type="submit"]').click()
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    cy.get('.MuiPaper-root')
    // TODO: Implement action: "Press Продолжить"
    cy.get('button[type="submit"]').eq(1).click()
    // TODO: Implement result: "Should open Public offer acceptance page"
    
    // TODO: Implement action: "Scroll to the end of document and tick the Согласен, then Продолжить"
    // TODO: Implement result: "Should open bank card typing page"
    // TODO: Implement action: "Correctly add the bank account info and continue"
    // TODO: Implement result: "Should open sms typing page"
    // TODO: Implement action: "Type correct sms from ypur phone"
    // TODO: Implement result: "Should open the main page of new-agent"
  });

  it('Correct Login with Public offer', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open Public offer acceptance page"
    // TODO: Implement action: "Scroll to the end of document and tick the Согласен, then Продолжить"
    // TODO: Implement result: "Should open bank card typing page"
    // TODO: Implement action: "Correctly add the bank account info and continue"
    // TODO: Implement result: "Should open the main page of new-agent"
    throw 'Not implemented';
  });

  it('InCorrect Login with Public offer(incorrect card number)', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open Public offer acceptance page"
    // TODO: Implement action: "Scroll to the end of document and tick the Согласен, then Продолжить"
    // TODO: Implement result: "Should open bank card typing page"
    // TODO: Implement action: "InCorrectly add the bank account info and continue(make the number short)"
    // TODO: Implement result: "Red alert on card number typing field should appear"
    throw 'Not implemented';
  });

  it('InCorrect Login with Public offer(past expire date)', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open Public offer acceptance page"
    // TODO: Implement action: "Scroll to the end of document and tick the Согласен, then Продолжить"
    // TODO: Implement result: "Should open bank card typing page"
    // TODO: Implement action: "Type correct card number, but past expire date (eg. 05/22)"
    // TODO: Implement result: "Red alert on card expire date typing field with Истек срок карты should appear"
    throw 'Not implemented';
  });

  it('Correct Login with Public offer but without card', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open Public offer acceptance page"
    // TODO: Implement action: "Scroll to the end of document and tick the Согласен, then Продолжить"
    // TODO: Implement result: "Should open bank card typing page"
    // TODO: Implement action: "Close the website"
    // TODO: Implement action: "Open the website again and correctly login"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Should open bank card typing page"
    throw 'Not implemented';
  });

  it('Correct Login with only card', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open Public offer acceptance page"
    // TODO: Implement action: "Scroll to the end of document and tick the Согласен, then Продолжить"
    // TODO: Implement result: "Should open bank card typing page"
    // TODO: Implement action: "Close the website"
    // TODO: Implement action: "Open the website again and correctly login"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Should open bank card typing page"
    // TODO: Implement action: "Correctly add the card info and continue"
    // TODO: Implement result: "Should open the main page of new-agent"
    throw 'Not implemented';
  });

  it('InCorrect Login(without merchant)', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Red alert on Филиал choosing field should appear with Обязательное поле"
    throw 'Not implemented';
  });

  // it('Correct Login with agent creation', function () {
  //   // TODO: Implement action: "Open the test-admin website"
  //   cy.visit(admin_url)
  //   // TODO: Implement result: "Should open login page"
  //   cy.viewport('macbook-16')
  //   cy.get('#login').type('admin@mail.ru')
  //   cy.get('#password').type('12345678')
  //   cy.get('.button').click()
  //   // TODO: Implement action: "Go to Агенты > Добавить"
  //   cy.contains('Агенты').click()
  //   cy.contains('Добавить').click()
  //   // TODO: Implement result: "Should open agent's info typing page"
  //   // TODO: Implement action: "Fill all required fields and save results"
  //   cy.get('#first_name').type(name)
  //   cy.get('#last_name').type(surname)
  //   cy.get('input[placeholder="Введите номер телефона"]').type(number)
  //   cy.get('#password').type('qwerty')
  //   cy.get('div[class="select__indicator select__dropdown-indicator css-rlcij1-indicatorContainer"]').eq(0).click()
  //   cy.get('div[class="select__menu-list css-11unzgr"] > div').eq(4).click()
  //   cy.get('div[class="select__indicator select__dropdown-indicator css-rlcij1-indicatorContainer"]').eq(2).click()
  //   cy.get('div[class="select__menu-list css-11unzgr"] > div').eq(1).click()
  //   cy.get('div[class="select__indicator select__dropdown-indicator css-rlcij1-indicatorContainer"]').eq(3).click()
  //   cy.get('div[class="select__menu-list css-11unzgr"] > div').eq(0).click()
  //   cy.get('div[class="select__indicator select__dropdown-indicator css-rlcij1-indicatorContainer"]').eq(1).click()
  //   cy.get('div[class="select__menu-list css-11unzgr"] > div').eq(0).click()
  //   cy.get('div[class="select__indicator select__dropdown-indicator css-rlcij1-indicatorContainer"]').eq(4).click()
  //   cy.get('div[class="select__menu-list css-11unzgr"] > div').eq(0).click()
  //   cy.get('div[class="select__control css-71lyvv-control"]').eq(2).click()
  //   cy.get('div[class="select__menu-list css-11unzgr"] > div').eq(1).click()
  //   cy.contains('Сохранить').click()
  //   cy.wait(2000)
  //   //Enable new-agent and disable
  //   cy.contains('Features').click()
  //   cy.get('div[class=" search-area flex items-center h-8  mr-4"]').click()
  //   cy.get('input.p-2').type(number)
  //   cy.wait(3000)
  //   cy.get('tbody > tr > td').eq(7).find('input[type="checkbox"]').click()
  //   cy.pause()
  //   // TODO: Implement action: "Go to Агенты page and look at the list of agents"
  //   // TODO: Implement result: "Previously created agent should be in the list"
  //   // TODO: Implement result: "Should open login page"
  //   cy.visit(url)
  //   // TODO: Implement result: "Should open login page"
  //   // TODO: Implement action: "Type correct login and password"
  //   cy.get('input[name="phone_number"]').type(number)
  //   cy.get('input[name="password"]').type('qwerty')
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Should open Филиал choosing page"
  //   // TODO: Implement action: "Choose Офис and continue"
  //   cy.get('input[name="branch_name"]').type('офи')
  //   cy.contains('Офис').click()
  //   cy.contains('Продолжить').click()
  //   // TODO: Implement result: "Popup with Проверка филиала should appear"
  //   // TODO: Implement action: "Press Продолжить"
  //   cy.get('.MuiPaper-root').contains('Продолжить').click()
  //   // TODO: Implement result: "Popup with Проверка филиала should appear"
  //   // TODO: Implement action: "Press Продолжить"
  //   // TODO: Implement result: "Should open the main page of new-agent"
  // });
});
