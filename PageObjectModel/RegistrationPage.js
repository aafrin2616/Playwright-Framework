export class RegistrationPage{
    constructor(page){
        this.page=page
        this.Registerlink = page.getByText("Register")
        this.Gender = page.locator('#gender-female')
        this.FirstName = page.locator('#FirstName')
        this.LastName = page.locator('#LastName')
        this.Email = page.locator('#Email')         
        this.password = page.locator('#Password')
        this.ConfirmPassword = page.locator('#ConfirmPassword')
        this.Registerbtn = page.locator('#register-button')
        this.Continue = page.locator('//input[@value="Continue"]')
        this.News = page.locator('//input[@name="NewsletterEmail"]')
        this.subscribe = page.locator('//input[@value="Subscribe"]')
    }
    async register(firstname,lastname,email,password){
        await this.Registerlink.click()
        await this.Gender.click()
        await this.FirstName.fill(firstname)
        await this.LastName.fill(lastname)
        await this.Email.fill(email)
        await this.password.fill(password)
        await this.ConfirmPassword.fill(password)
        await this.Registerbtn.click()
        await this.Continue.click()
        await this.News.fill(email)
        await this.subscribe.click()
    }
}