describe("Registration numbers", function(){
    it("should be able to enter a registration number on the text field", function (){
        let regNumbers = Registrations();
        regNumbers.newEntries("CA 12344");
        assert.equal("CA 12344", regNumbers.getEntries());
    });
});