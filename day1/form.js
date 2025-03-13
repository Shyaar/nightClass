
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let email = document.getElementById("mail");
let password = document.getElementById("pass");
let conPassword = document.getElementById("conPass");
let btn = document.getElementById("btn");
let emptyFields = document.getElementById("emptyErr");

function clearErr(id) {
  document.querySelector(id).textContent = "";
}

btn.addEventListener("click", () => {
  if (
    firstName.value == "" &&
    lastName.value == "" &&
    email.value == "" &&
    password.value == "" &&
    conPassword.value == ""
  ) {
    emptyFields.textContent = "Please complete the form";
    setTimeout(() => {
      emptyFields.style.display = "none";
    }, 3000);
  }

  if (firstName.value == "") {
    document.querySelector("#fnErr").textContent =
      "Please Enter your First name";
  }

  if (lastName.value == "") {
    document.querySelector("#lnErr").textContent =
      "Please Enter your Last name";
  }

  if (email.value == "") {
    document.querySelector("#eErr").textContent = "Please Enter your email";
  }

  if (!email.value.includes("@")) {
    document.getElementById("mailCheck").textContent =
      "Please enter a valid email";
      setTimeout(() => {
        document.getElementById("mailcheck").textContent = "";
      }, 3000);
  }

  if (password.value == "") {
    document.querySelector("#passErr").textContent = "Please Enter a password";
  }

  if (conPassword.value == "") {
    document.querySelector("#cPassErr").textContent = "Please confirm your password";
  }

  if (password.value.length < 8 || !password.value.includes(Number)) {
    document.getElementById("passCheck").textContent =
      "Password must be 8 character long and must include at least 1 number";
      setTimeout(() => {
        document.getElementById("passCheck").textContent = "";
      }, 3000);
  }

  if (conPassword.value !== password.value) {
    document.getElementById("ConPassCheck").textContent =
      "Password does not match";
      setTimeout(() => {
        document.getElementById("ConPassCheck").textContent =
      "";
      }, 3000);
  }
});

// firstName.addEventListener("blur",()=>{
//     if(firstName.value == ""){
//             document.querySelector("fnError").textContent = "Please enter your First name!"
//             }else{document.querySelector("fnError").textContent = ""}
//         })

// let password = "Lentllppk"

// if(password.length <8){
//     console.log("short")
// }else if(!(password.includes(Number))){
//     console.log("no number")
// }
