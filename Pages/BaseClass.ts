import {Page} from '@playwright/test'

export class BaseClass{
    protected page:Page;
    
    constructor(page:Page)
    {
        this.page = page
    }

    async gotoURL(url:string)
    {
        await this.page.goto(url)
    }
}