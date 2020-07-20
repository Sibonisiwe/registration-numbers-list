function Registrations() {
    let regList = []

    function addRegistrations(regNumbers) {
        if(regList.includes(regNumbers)){
            return alert("already exist");
        } else {
        regList.push(regNumbers);
        }
        return regList;
        
    }

    function filter(reg) {
        const filteredRegList = [];
        for (var i=0;i<regList.length; i++) {
            const currentRegList = regList[i];

            if (currentRegList.startsWith(reg))  {
                filteredRegList.push(currentRegList)
            }
        }
        return filteredRegList;
    }

            // else if (currentRegList.startsWith("CK") && town === "Malmesbury") {
            //     filteredRegList.push(currentRegList)

            // }

            // else if (currentRegList.startsWith("CY") && town === "Bellville") {
            //     filteredRegList.push(currentRegList)

            // }
        


    return {
        addRegistrations,
        filter,

    }

}