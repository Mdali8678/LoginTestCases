import {Page,Locator} from '@playwright/test'
import {BaseClass} from '../Pages/BaseClass'

export class LoggedInPage extends BaseClass {
    headline:Locator
    text:Locator
    logoutButton:Locator

    constructor(page:Page)
    {
        super(page)
        this.headline = page.locator(".post-title")
        this.text = page.locator(".has-text-align-center")
        this.logoutButton = page.getByRole("link",{name:"Log out"})
    }

    async userLogout()
    {
        await this.logoutButton.click()
    }

    
}