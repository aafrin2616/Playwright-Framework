import Login from "../testData/Login.json"
import { expect } from "@playwright/test"


export class EmailToFriendPage{
    constructor(page){
        this.page = page
        this.EmailToFriendBtn = page.locator('div[class="email-a-friend"]')
        this.FriendEmail = page.locator('#FriendEmail')
        this.PersonalMessage = page.locator('#PersonalMessage')
        this.SendEmailBtn = page.locator('input[name="send-email"]')
    }

    async sendEmail(){
        await this.EmailToFriendBtn.click()
        await expect(this.page.getByText("Email a friend")).toBeVisible()
        await this.FriendEmail.fill(Login.email)
        await this.PersonalMessage.fill("Hi inu i send you book ")
        await this.SendEmailBtn.click()
        await expect(this.page.locator('div[class="result"]')).toBeVisible()
        await this.page.waitForTimeout(2000)
            
    }
}