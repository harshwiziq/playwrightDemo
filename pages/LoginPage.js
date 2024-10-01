// const {page} = require('@playwright/test');

class Loginpage{

    constructor(page){
        this.page = page;
        // this.email = page.getByPlaceholder('Email*')
        this.email = page.locator('#email')
    }
    elements = {
        enteremailid: () => this.page.locator('#email')
    }

    async navigateToLoginPage(){
        await this.page.goto('/login');
    }

    async enteremailid(){
        // await this.elements.enteremailid().waitFor({ state: 'visible' , timeout: 60000});
        // await this.page.waitForSelector('#email', { state: 'visible' , timeout: 60000});
        // await this.page.getByPlaceholder('Email*').click();
        // await this.page.getByPlaceholder('Email*').fill('hk23490@gmail.com');
        // await this.elements.enteremailid().fill('hk23490@gmail.com');
        // await this.elements.enteremailid.click();
        // await this.email.fill('dnafdfhfnfnskdnkjfbnf');
        // await this.elements.enteremailid().waitFor({timeout: 1 * 60 * 1000});
        // await this.page.waitForSelector('#email', { state: 'visible' });

        await this.elements.enteremailid().click();
        await this.elements.enteremailid().fill('aaaaaaaaaaaa') 

        // await this.elements.enteremailid.fill('dnafdfhfnfnskdnkjfbnf');

        await this.page.waitForTimeout(1000);

    }

}
module.exports = Loginpage;