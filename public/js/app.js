
const weatherForm = document.querySelector('form');
const input = document.querySelector('input');
const p1 = document.querySelector('#message-1')
const p2 = document.querySelector('#message-2')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = input.value;
    p1.textContent = "...Loading"
    p2.textContent = "";
    fetch('/weather?address='+location).then((res)=>{
    res.json().then(res => {
        if(res.error)
        console.log(res.error)
        else{
            console.log(res)
         p1.textContent = res.location
         p2.textContent = "the temperature is  "+res.forecast.temperature+" and it feels like "+res.forecast.feelsLike
        }
    })
})

})
