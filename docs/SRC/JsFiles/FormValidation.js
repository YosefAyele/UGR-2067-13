const email = document.getElementById("email")
const form =  document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit',(e)=>{
    let messages=[]

    if (!validateEmail(email.value)){
        messages.push("Please Enter a valid email address")

    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
})

function validateEmail(email) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
      return (false)
}