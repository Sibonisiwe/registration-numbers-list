describe("Registration numbers", function(){
    it("should be able to add a unique registration number", function (){
        let regNumbers = Registrations();
        regNumbers.addRegistrations("CA 12344");
        regNumbers.addRegistrations("CY 12344");

        assert.equal(3, regNumbers.addRegistrations());
    });

    describe("the Radio Buttons function", function() {
        it("should be able to filter a Town", function() {
            let regNumbers = Registrations();

            regNumbers.filter("CA 12345", "Cape Town");
           const regCpt = regNumbers.filter("CA 12345", "Cape Town");
            
            assert.equal(true, regCpt);
        });

    });

});