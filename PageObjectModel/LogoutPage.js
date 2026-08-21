
export class LogoutPage{
    constructor(page){
        this.page=page
        this.LogoutBtn = page.getByText('Log out')
    }
    async logOut(){
        this.LogoutBtn.click()
    }
}