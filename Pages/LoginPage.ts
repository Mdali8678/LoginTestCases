import {Page , Locator, expect} from '@playwright/test'
import {BaseClass} from '../Pages/BaseClass'
export class LoginPage extends BaseClass{
    username:Locator
    password:Locator
    submit:Locator
    errorMsg : Locator

    constructor(page:Page)
    {
        super(page)
        this.username= page.locator("#username")
        this.password = page.locator("#password")
        this.submit = page.locator("#submit")
        this.errorMsg = page.locator("#error")
    }

    async userLogin(userName:string, password:string)
    {
        await this.username.fill(userName)
        await this.password.fill(password)
        await this.submit.click()
    }

}
