const generalRadio = document.querySelector('#general')
const requestRadio = document.querySelector('#request')

let radioInputDivs = document.querySelectorAll('.radio-block > div')

function generalRadioChecked(){
    generalRadio.parentElement.classList.add('radio-div-input-checked')
    requestRadio.parentElement.classList.remove('radio-div-input-checked')

    generalRadio.checked = true

    removeWarning(generalRadio.parentElement.parentElement)
}

function requestRadioChecked(){
    generalRadio.parentElement.classList.remove('radio-div-input-checked')
    requestRadio.parentElement.classList.add('radio-div-input-checked')

    requestRadio.checked = true

    removeWarning(requestRadio.parentElement.parentElement)
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

function formValidator(){

    let isValid = true
    
    const fnField = document.querySelector(".first-name input")
    const lnField = document.querySelector(".last-name input")
    const emailField = document.querySelector(".email input")
    const queryField = document.querySelectorAll(".radio-block input")
    const msgField = document.querySelector(".message textarea")
    const consentField = document.querySelector(".consent-block input")

    if(fnField.value === ''){
        
        let fnSpan = document.querySelector(".first-name span")

        fnSpan.classList.remove('invisible')
        fnField.classList.add("invalid")

        isValid = false

    }

    if(lnField.value === ''){

        let lnSpan = document.querySelector(".last-name span")

        lnSpan.classList.remove('invisible')
        lnField.classList.add("invalid")

        isValid = false

    }

    if(emailField.value === '' || !/^[a-z0-9]{1,}@[a-z]{1,}$/.test(emailField.value)){

        let emailSpan = document.querySelector(".email span")

        emailSpan.classList.remove('invisible')
        emailField.classList.add("invalid")

        isValid = false

    }

    isQuerySet = false

    queryField.forEach(query => {
        if(query.checked === true){
            isQuerySet = true
        }
    })

    if(!isQuerySet){

        let querySpan = document.querySelector(".query-type span")

        querySpan.classList.remove('invisible')

        isValid = false

    }

    if(msgField.value === ''){

        let msgSpan = document.querySelector(".message span")

        msgSpan.classList.remove('invisible')
        msgField.classList.add("invalid")

        isValid = false

    }

    if(consentField.checked === false){

        let consentSpan = document.querySelector(".consent-block span")

        consentSpan.classList.remove('invisible')   

        isValid = false

    }

    if(isValid){

        let successBlock = `
        <div class="success-block invisible">
            <div class="success-heading-block">
                <img src="./src/icon-success-check.svg" alt="icon-success-check"><h2>Message Sent!</h2>
            </div>
            <div class="success-text-block">
                <p>Thanks for completing the form. We'll be in touch soon!</p>
            </div>
        </div>`

        let mainBlock = document.querySelector("main")
        mainBlock.innerHTML = successBlock + mainBlock.innerHTML

        setTimeout(() =>{
            document.querySelector('.radio-div-input-checked').classList.remove('radio-div-input-checked')
        }, 10)
        
        setTimeout(() => {
            document.querySelector(".success-block").classList.remove("invisible")
        }, 10)

    }

}

function removeWarning(item){

    if(document.querySelector("main .success-block") !== null){
        document.querySelector("main .success-block").classList.add("invisible")
        setTimeout(() =>{
            document.querySelector("main").firstElementChild.remove()}
            , 300)
        
    }

    if(item.name === 'consent'){
        item.parentElement.parentElement.querySelector("span").classList.add('invisible')
        item.classList.remove("invalid")
    }
    else{
        item.parentElement.querySelector("span").classList.add('invisible')
        item.classList.remove("invalid")
    }
    
}