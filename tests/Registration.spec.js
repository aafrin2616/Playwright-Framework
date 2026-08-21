import {expect, test} from "@playwright/test"
import Registration from "../testData/Registration.json"
import Login from "../testData/Login.json"
import { selectDropDown } from "../Utilies/uitilies"
import {RegistrationPage} from "../PageObjectModel/RegistrationPage"
import { LoginPage } from "../PageObjectModel/LoginPage"
import { AddressPage } from "../PageObjectModel/AddressPage"
import { register } from "node:module"


test("Registration script",async({page})=>{
   
    // //reading with json ans implementing pom file
     await page.goto(Registration.url)              
    // let RegistratonP = new RegistrationPage(page)
    // await RegistratonP.register(Registration.firstName,Registration.lastName,Registration.email,Registration.password)

    let LoginP = new LoginPage(page)
    await LoginP.login(Login.email, Login.password)

    let AddressP = new AddressPage(page)
    await AddressP.AddressField(Registration.firstName,Registration.lastName,Registration.email,
        Registration.city,Registration.add1,Registration.add2,Registration.pincode,Registration.mobile)
})   


