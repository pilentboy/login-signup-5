
let formSelectBTN=document.querySelector("#formSelectBTN");
let formSelectBox=document.querySelector("#formSelectBox");
let formBox=document.querySelector("#formBox");
let formSelectP=document.querySelector("#formSelectBox p")
let formSelectH1=document.querySelector("#formSelectBox h1")
let formBoxTitle=document.querySelector("#formBox #title");
let formSpan=document.querySelector("#form span");
let formBTN=document.querySelector("#form #formBTN");
let form=document.querySelector("#formBox #form");
let formFirstInput=document.querySelector("#form input");
let phoneSelectBTN=document.querySelector("#form #phoneSelectBTN"); // display on mobile phones
let forgotPassowrd=document.querySelector("#form a");

// username inputs
let input=document.createElement("input")
input.type="text"
input.placeholder="Username"
input.setAttribute("id","userName")

let state=true;

function baseForm(){
    formBoxTitle.textContent="Sign In"
    formSpan.textContent="or use your account"
    forgotPassowrd.style.display="block"
    formBTN.textContent="SIGN IN"
    phoneSelectBTN.textContent="SIGN UP"
    //form select box
    formSelectH1.textContent="Hello, Friend!"
    formSelectP.textContent="Enter your personal details and start journy with us"
    formSelectBTN.textContent="SIGN UP"
    //remove username input
    form.removeChild(input)
}

function changeBaseForm(){
    formBoxTitle.textContent="Sign Up"
    formSpan.textContent="or use your email for registration"
    forgotPassowrd.style.display="none"
    formBTN.textContent="SIGN UP"
    phoneSelectBTN.textContent="SIGN IN"
    //form select box
    formSelectH1.textContent="Welcome Back!"
    formSelectP.textContent="to keep connected with us please login with your personal info"
    formSelectBTN.textContent="SIGN IN"
 
    //add username input
    form.insertBefore(input,formFirstInput)
}

function animate(state){
    if(state){
        formSelectBox.classList.add("TXm100")
        formBox.classList.add("TXp100")
    }else{
        formSelectBox.classList.remove("TXm100")
        formBox.classList.remove("TXp100")
    }
}

formSelectBTN.addEventListener("click",()=>{
    animate(state)
    if(state){
        changeBaseForm()
        state=false
    }else{
        baseForm()
        state=true
    }
})

window.addEventListener("resize",()=>{
    if (window.innerWidth <= "600"){
        baseForm()
        state=false
        animate()
        state=true
    } 
    if(window.innerWidth > "600"){
        if (!state){
            animate(state)
        }
    }
})


phoneSelectBTN.addEventListener("click",()=>{
    if(state){
        changeBaseForm()
        state=false
    }else{
        baseForm()
        state=true
    }
})