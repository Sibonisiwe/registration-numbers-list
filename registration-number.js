const addListBtn = document.querySelector(".addBtn");
const showListBtn = document.querySelector(".showBtn");
const enterReg = document.querySelector(".enterReg");
const radioBtn = document.querySelector(".radioBtn");
const list = document.querySelector(".reg");

const regInstance = Registrations();

// function addReg(display) {
//     var li = document.createElement("li");
//     li.innerHTML = display;
//     list.insertBefore(li,list.childNodes[0]);

// }

function addBtnClicked() {

    //list.innerHTML = regInstance.addRegistrations(enterReg.value);
    
    var loopOver = regInstance.addRegistrations(enterReg.value);
    alert(loopOver);
    var li = document.createElement("li");

    for (var i=0; i<loopOver.length; i++) {
        //addReg(loopOver[i]);
        li.innerHTML = loopOver[i]
        list.appendChild(li);
    }
        
}

function showListBtnClicked(list) {
    list.innerHTML = ""
    alert(list.innerHTML = "");

    var li = document.createElement("li");

    var checkedRadio = document.querySelector(".radioBtn:checked");
        var filterLoop = regInstance.filter(checkedRadio.value);

    for (var i=0; i<filterLoop.length;i++) {
        const items = filterLoop[i];

        li.innerHTML = items;
        list.appendChild(li);
        
    }

}


addListBtn.addEventListener("click", addBtnClicked);
showListBtn.addEventListener("click", showListBtnClicked);
