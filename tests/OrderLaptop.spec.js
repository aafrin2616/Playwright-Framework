import{expect, test} from "@playwright/test"
import Login from "../testData/Login.json"
import { OrderLaptopPage } from "../PageObjectModel/OrderLaptopPage"
import { LoginPage } from "../PageObjectModel/LoginPage"
import { LogoutPage } from "../PageObjectModel/LogoutPage"



test("Order product",async({page})=>{
    page.goto('https://demowebshop.tricentis.com/')


   let LoginP = new LoginPage(page)
   await LoginP.login(Login.email,Login.password)
    
    let orderLaptopPage = new OrderLaptopPage(page)
    await orderLaptopPage.searchItem()
    await orderLaptopPage.OrderItem()
    await orderLaptopPage.campareItem()

    let logOutP = new LogoutPage(page)
    await logOutP.logOut()
    
    
})