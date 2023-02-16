function generatePin(){
    const random = Math.round(Math.random()*10000)
    return random;
};

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
};

document.getElementById('get-pin-btn').addEventListener('click',function(){
    const pin = getPin();

    const inputField = document.getElementById('generate-input-field');
    inputField.value = pin;
    
});


document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumber = document.getElementById('typed-numbers');
    const previousTypedNumbers = typeNumber.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumber.value =''; 
        }
        else if(number === '<'){
            const digits = previousTypedNumbers.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumber.value = remainingDigits;
        }
    }
    else{
        
        const newTypeNumber = previousTypedNumbers + number;
        typeNumber.value = newTypeNumber;
    }
});


document.getElementById('verify-btn').addEventListener('click',function(){
    const displayPinField = document.getElementById('generate-input-field');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const matchPin = typedNumberField.value;

    if(currentPin === matchPin){
        const pinSuccessMessage = document.getElementById('pin-success');
        pinSuccessMessage.style.display = 'block';

        const pinNotMatch = document.getElementById('pin-didnt-match');
        pinNotMatch.style.display = 'none';
    }
    else{
        const pinNotMatch = document.getElementById('pin-didnt-match');
        pinNotMatch.style.display = 'block';

        const pinSuccessMessage = document.getElementById('pin-success');
        pinSuccessMessage.style.display = 'none';


    }
})