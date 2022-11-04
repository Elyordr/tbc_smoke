describe('Login', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
  });

  it('Correct Login with agent creation', function () {
    // TODO: Implement action: "Open the test-admin website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Go to Агенты > Добавить"
    // TODO: Implement result: "Should open agent's info typing page"
    // TODO: Implement action: "Fill all required fields and save results"
    // TODO: Implement action: "Go to Агенты page and look at the list of agents"
    // TODO: Implement result: "Previously created agent should be in the list"
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type previously created login and password, then login to the account"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open the main page of new-agent"
    throw 'Not implemented';
  });

  it('Correct Login', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open the main page of new-agent"
    throw 'Not implemented';
  });

  it('Correct Login with  sms', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open sms typing page"
    // TODO: Implement action: "Type correct sms from ypur phone"
    // TODO: Implement result: "Should open the main page of new-agent"
    throw 'Not implemented';
  });

  it('Incorrect login (Incorrect phone number)', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Enter incorrect phone number and correct password, then continue"
    // TODO: Implement result: "Should be error message with Агент не найден"
    throw 'Not implemented';
  });

  it('Incorrect login (Incorrect password)', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Enter correct phone number and incorrect password, then continue"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should be error message with Номер или пароль введены неправильно"
    throw 'Not implemented';
  });

  it('Incorrect login (short phone number)', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Enter phone number with only six or less characters and correct password, then continue"
    // TODO: Implement result: "Red alert should appear on phone number typing field with Вы не до конца написали номер телефона"
    throw 'Not implemented';
  });

  it('Incorrect login (short password)', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Enter the correct phone number and password with less than 6 six characters, then continue"
    // TODO: Implement result: "Red alert should appear on password typing field with Минимум 6 символов"
    throw 'Not implemented';
  });

  it('InCorrect Login with incorrect sms', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open sms typing page"
    // TODO: Implement action: "Type incorrect sms from ypur phone"
    // TODO: Implement result: "Error message with Confirm Code Does Not Match! should appear"
    throw 'Not implemented';
  });

  it('InCorrect Login with incorrect sms several times', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open sms typing page"
    // TODO: Implement action: "Type incorrect sms from your phone more than 3 times"
    // TODO: Implement result: "Error message with Attempt should appear"
    throw 'Not implemented';
  });

  it('Correct Login with sms (Отправить заново)', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open sms typing page"
    // TODO: Implement result: "Wait for the 2 minutes, until Отправить заново will be available"
    // TODO: Implement action: "Press on Отправить заново"
    // TODO: Implement action: "Type second correct sms from ypur phone"
    // TODO: Implement result: "Should open the main page of new-agent"
    throw 'Not implemented';
  });

  it('InCorrect Login with expired sms', function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open sms typing page"
    // TODO: Implement result: "Wait for the 2 minutes, until Отправить заново will be available"
    // TODO: Implement action: "Type correct sms from your phone"
    // TODO: Implement result: "Error message with Код истек should appear"
    throw 'Not implemented';
  });

  it('Correct Login with sms and Public offer', function () {
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
    // TODO: Implement result: "Should open sms typing page"
    // TODO: Implement action: "Type correct sms from ypur phone"
    // TODO: Implement result: "Should open the main page of new-agent"
    throw 'Not implemented';
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
});
