const generalRadio = document.querySelector('#general')
const requestRadio = document.querySelector('#request')

let radioInputDivs = document.querySelectorAll('.radio-block > div')

function generalRadioChecked(){
    generalRadio.parentElement.classList.add('radio-div-input-checked')
    requestRadio.parentElement.classList.remove('radio-div-input-checked')

    generalRadio.checked = true
}

function requestRadioChecked(){
    generalRadio.parentElement.classList.remove('radio-div-input-checked')
    requestRadio.parentElement.classList.add('radio-div-input-checked')

    requestRadio.checked = true
}

generalRadio.addEventListener('click', () => {
    generalRadioChecked()
})

requestRadio.addEventListener('click', (e) => {

    requestRadioChecked()
    
})

radioInputDivs.forEach( div => {
    div.addEventListener('click', () => {
        if(div.querySelector('#general') !== null){
            generalRadioChecked()
        }
        else{
            requestRadioChecked()
        }
    })
})

function formValidator(item){
    
    const fnField = document.querySelector(".first-name input")
    const lnField = document.querySelector(".last-name input")
    const emailField = document.querySelector(".email input")
    const queryField = document.querySelectorAll(".radio-block input")
    const msgField = document.querySelector(".message input")
    const consentField = document.querySelector(".consent-block input")

    if(fnField.value === ''){
        
        let fnSpan = document.querySelector(".first-name span")

        fnSpan.classList.remove('invisible')
        fnField.classList.add("invalid")

    }

    if(lnField.value === ''){

        let lnSpan = document.querySelector(".last-name span")

        lnSpan.classList.remove('invisible')
        lnField.classList.add("invalid")

    }

    if(emailField.value === '' || !/^[a-z0-9]{1,}@[a-z]{1,}$/.test(emailField.value)){

        let emailSpan = document.querySelector(".email span")

        emailSpan.classList.remove('invisible')
        emailField.classList.add("invalid")

    }

}