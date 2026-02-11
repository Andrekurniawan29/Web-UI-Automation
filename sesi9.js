const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe ('Google Search Test', function () {
    let driver;
//test case 1
    it('Masuk ke web SauceDemo dan cek page title', async function () {
        driver = await new Builder().forBrowser('chrome').build();
    
        await driver.get('https://www.saucedemo.com/');

        //input action
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
       
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click();
    });

    it('sorting Z to A', async function() {
        
        let sortDropDown = await driver.findElement(By.className('product_sort_container'))
        let sort = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]'))

        await sortDropDown.click()
        await sort.click()
    });
// test case 2
    it('sorting Price (low to high)', async function() {

        let sortDropDown = await driver.findElement(By.className('product_sort_container'))
        let sort = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[3]'))

        await sortDropDown.click()
        await sort.click()
 
        // command menunggu 
        await driver.sleep(2000);
 
        //command untuk keluar browser
        await driver.quit();
    });

});