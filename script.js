const num = document.getElementById("num")
const current_log = document.getElementById("log")
const money_wd = document.getElementById("money")
const action = document.getElementById("bank_opt")
let current_acc = document.getElementById("current_acc")
let current_cash = document.getElementById("current_cash")
let cnt = current_log.childElementCount
let alert_state = document.getElementById("alert_box")


function change(){
    const newP = document.createElement("p")
    newP.textContent = (String(Number(cnt) + 1) + ", Current account balance:" + String(current_acc.value) + ", Current cash balance:" + String(current_cash.value))
    current_log.appendChild(newP)
    cnt = cnt + 1
}

function proceed(){
    if (action == "Deposit"){
        if (Number(current_cash) >= Number(money_wd.value)){
            current_acc.value = Number(current_acc.value) + Number(money_wd.value)
            current_cash.value = Number(current_cash.value) - Number(money_wd.value)
            change()
            money_wd.value = 0
        }
        else{
            alert_state.style.visibility = "visible"
        }
    }
    else{
        if (Number(current_acc.value) >= Number(money_wd.value)){
            current_acc.value = Number(current_acc.value) - Number(money_wd.value)
            current_cash.value = Number(current_cash.value) + Number(money_wd.value)
            change()
            money_wd.value = 0
        }
        else{
            alert_state.style.visibility = "visible"
        }
    }
}

function close_alert(){
    alert_state.style.visibility = "hidden"
}