function Registrations(regNum) {
    var entries = regNum || {}
 
    function newEntries(reg) { 
        entries = reg;
    }

function getEntries(){
return entries;
}


return {
newEntries,
getEntries,
}

}