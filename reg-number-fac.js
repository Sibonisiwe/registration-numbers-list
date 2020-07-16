function Registrations() {
    let regList = []

    function addRegistrations(regNumbers) {
        regList.push(regNumbers);
        return regNumbers;
    }

    function filter(reg, town) {
        const filteredRegList = [];
        for (var i = 0; i<reg.length; i++) {
            const currentRegList = reg[i];

            if (currentRegList.startsWith("CA").town) {
                filteredRegList.push(currentRegList);
                return currentRegList;
            }

            else if (currentRegList.startsWith("CK").town) {
                filteredRegList.push(currentRegList)

            }

            else if (currentRegList.startsWith("CY").town) {
                filteredRegList.push(currentRegList)

            }
        }
    }


    return {
        addRegistrations,
        filter,

    }

}