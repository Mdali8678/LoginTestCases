import {Page, test,expect} from '@playwright/test';
import {BaseClass, LoggedInPage, LoginPage} from '../Pages'

let page:Page
let baseclass:BaseClass
let loggedinpage:LoggedInPage
let loginpage:LoginPage

test.describe("Login Test case all Scenario",()=>{
    test.beforeEach("Launch URL",async ({browser})=>{
        const context = await browser.newContext()
        page = await context.newPage()

        baseclass = new BaseClass(page)
        loggedinpage = new LoggedInPage(page)
        loginpage = new LoginPage(page)

        await baseclass.gotoURL("https://practicetestautomation.com/practice-test-login/")
    })
    test("Test case 1: Positive LogIn test",async ()=>{
        await loginpage.userLogin('student','Password123')
        console.log(await loggedinpage.headline.textContent())
        await expect(loggedinpage.headline).toHaveText("Logged In Successfully")
        await expect(loggedinpage.text).toHaveText("Congratulations student. You successfully logged in!")
        await loggedinpage.userLogout()
    })

    test("Test case 2: Negative username test",async ()=>{
        await loginpage.userLogin('students','Password123')
        console.log(await loginpage.errorMsg.textContent())
        await expect(loginpage.errorMsg).toHaveText("Your username is invalid!")
    })
    
})