const lengthSlider = document.querySelector(".pass-length input"),
  options = document.querySelectorAll(".option input"),
  copyIcon = document.querySelector(".input-box span"),
  generateBtn = document.querySelector(".generate-btn");
  passwordInput = document.querySelector(".input-box input");
  passIndicator = document.querySelector(".pass-indicator");
const characters = {
  // object of letters, numbers & symbols
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~",
};
generatePassword = () => {
  let staticPassword = "";
  let randomPassword = "";
  excludeDuplicate=false;
  passLength = lengthSlider.value;
  options.forEach((option) => {
    if (option.checked) {
        if(option.id!=="exc-duplicate" && option.id!=="spaces"){

            staticPassword += characters[option.id];
        }else if(option.id!=="spaces"){
            staticPassword+=` ${staticPassword}  `;
        }else{
            excludeDuplicate=true;
        }
    }
  });
  for (let i = 0; i < passLength; i++) {
    let randomChr =
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
      if(excludeDuplicate){
        !randomPassword.includes(randomChr)||randomChr==" "?randomPassword+=randomChr: i--;
      }
      else{
        randomPassword+=randomChr;
      }
  }
  
 passwordInput.value=randomPassword
};
const updatePassIndicator=()=>{
passIndicator.id=lengthSlider.value<=8?"Weak" : lengthSlider.value<=16 ? "Medium" :"Strong";
}
const updateSlider = () => {
  document.querySelector(".pass-length span").innerText = lengthSlider.value;
  generatePassword();
  updatePassIndicator();

};
updateSlider();
const copyPassword=()=>{
navigator.clipboard.writeText(passwordInput.value);
copyIcon.innerText="check";
setTimeout(()=>{
    copyIcon.innerText="copy_all";
},1500)
}
lengthSlider.addEventListener("input", updateSlider);
copyIcon.addEventListener("click", copyPassword);
generateBtn.addEventListener("click", generatePassword);
