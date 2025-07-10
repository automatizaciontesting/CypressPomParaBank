class RegisterPage{

    getTxtFirstName(){
        return cy.get('input[id="customer.firstName"]')
    }
    getTxtLastName(){
        return cy.get('input[id="customer.lastName"]')
    }
    getTxtAddress(){
        return cy.get('input[id="customer.address.street"]')
    }
    getTxtCity(){
        return cy.get('input[id="customer.address.city"]')
    }
    getTxtState(){
        return cy.get('input[id="customer.address.state"]')
    } 
    getTxtZipCode(){
        return cy.get('input[id="customer.address.zipCode"]')
    } 
     getTxtNumberPhone(){
        return cy.get('input[id="customer.phoneNumber"]')
    }  
    getTxtSsn(){
        return cy.get('input[id="customer.ssn"]')
    }   
    getTxtUserName(){
        return cy.get('input[id="customer.username"]')
    }
    getTxtPassword(){
        return cy.get('input[id="customer.password"]')
    }
    getTxtConfirmPassword(){
        return cy.get('input[id="repeatedPassword"]')
    }
    getBtnRegister(){
        return cy.get('input[value="Register"]')
    }

}
export default RegisterPage