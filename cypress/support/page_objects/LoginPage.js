class LoginPage
{   
    getTxtUser()
    {
       return cy.get('input[name="username"]')
    }
    getTxtPass()
    {
       return cy.get('input[name="password"]')
    }
    getBtnLogin()
    {
       return cy.get('input[value="Log In"]')
    }
    getLknRegister()
    {
       return cy.get('a:contains(Register)')
    }   

}
export default LoginPage;