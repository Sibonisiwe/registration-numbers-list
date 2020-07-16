const addButton = document.querySelector(".addBtn");
const enterReg = document.querySelector(".enterReg");
const radioBtnElem = document.querySelector(".radioBtn");

const regInstance = Registrations();

function addBtnClicked() {
    const regList = document.querySelector(".reg");

    var li = document.createElement("li");
    //li.innerHTML = enterReg.value;
    li.innerHTML = regInstance.addRegistrations(enterReg.value);
    regList.appendChild(li);

    var checkedRadio = document.querySelector(".radioBtn:checked");

    radioBtnElem.innerHTML = regInstance.filter(checkedRadio, enterReg);


   
}


addButton.addEventListener("click", addBtnClicked);