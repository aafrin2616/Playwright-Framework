import{expect, test} from "@playwright/test"
import { log } from "node:console"
import Login from "../testData/Login.json"
import Registration from "../testData/Registration.json"
import { LoginPage } from "../PageObjectModel/LoginPage"
import { LogoutPage } from "../PageObjectModel/LogoutPage"
import { BookReviewPage } from "../PageObjectModel/BookReviewPage"

test("Book Category",async({page})=>{
    page.goto(Registration.url)

    // let loginP = new LoginPage(page)
    // await loginP.login(Login.email,Login.password)


    let bookCategorieP = new BookCategoryPage(page)
    await bookCategorieP.BookReview()


     let logoutP = new LogoutPage(page)
    await logoutP.logOut() 

})