var webdriver = require('selenium-webdriver'),
    by    = webdriver.By
    until = webdriver.until

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build()

driver.get('https://www.worldometers.info/world-population/population-by-country/')

countries = driver.findElements(by.xpath("/html/body/div[3]/div[2]/div/div/div[2]/table/tbody/tr/td[2]"));

populations = driver.findElements(by.xpath("/html/body/div[3]/div[2]/div/div/div[2]/table/tbody/tr/td[3]"));

yearly_change = driver.findElements(by.xpath("/html/body/div[3]/div[2]/div/div/div[2]/table/tbody/tr/td[4]"));

world_share = driver.findElements(by.xpath("/html/body/div[3]/div[2]/div/div/div[2]/table/tbody/tr/td[12]"))

console.log(countries[0])

driver.quit()