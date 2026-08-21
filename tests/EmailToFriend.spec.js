import{expect, test} from "@playwright/test"
import { log } from "node:console"
import Login from "../testData/Login.json"
import Registration from "../testData/Registration.json"
import {LoginPage} from "../PageObjectModel/LoginPage"
import { LogoutPage } from "../PageObjectModel/LogoutPage"
import { OrderLaptopPage } from "../PageObjectModel/OrderLaptopPage"
import { EmailToFriendPage } from "../PageObjectModel/EmailToFriendPage"


test("Book Category",async({page})=>{
    page.goto(Registration.url)

    let loginP = new LoginPage(page)
    await loginP.login(Login.email,Login.password)
    
    let searchItemP = new OrderLaptopPage(page)
    await searchItemP.searchItem()

    let emailP = new EmailToFriendPage(page)
    await emailP.sendEmail()

    let logoutP = new LogoutPage(page)
    await logoutP.logOut()
    

})