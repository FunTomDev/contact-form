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
    console.log(item)
    console.log("Valid I guess...")
    return false
}