class HomePage {

    getLnkLogOut(){
        return cy.get('#leftPanel > ul > :nth-child(8) > a')
    }
}
export default HomePage