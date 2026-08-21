export class LoginPage{
    constructor(page){
        this.page=page
        this.Loginlink = page.getByText('Log in')
        this.Email = page.locator('#Email')
        this.Password = page.locator('#Password')
        this.LoginBtn = page.locator('//input[@value="Log in"]')
    }
    async login(email,password){
        await this.Loginlink.click()
        await this.Email.fill(email)
        await this.Password.fill(password)
        await this.LoginBtn.click()
    }
}