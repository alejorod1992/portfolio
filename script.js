//--Nav bar fixed
/*window.addEventListener("scroll", function(){
    const nabvar = document.querySelector(".navbar");
    nabvar.classList.toggle("down",window.scrollY>0);
}) */
/*CSS EVENTS*/

//----Light mode

const theme = document.querySelector("#theme");
const body = document.querySelector("body");

//---Save mode

theme.addEventListener("click", (e) => {
  body.classList.toggle("light_theme");
  saveTheme(body.classList.contains("light_theme"));
});

loadTheme();

function loadTheme() {
  const light_theme = localStorage.getItem("light_theme");

  if (!light_theme) {
    saveTheme("false");
  } else if (light_theme == "true") {
    body.classList.add("light_theme");
  }
}

function saveTheme(value) {
  localStorage.setItem("light_theme", value);
}

//---Gif projects

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen3 = document.querySelector(".screen3");
const screen4 = document.querySelector(".screen4");

const changeGif = function () {};

//---Form
const info = {
  nombre: "",
  phoneForm: "",
  mailForm: "",
  messageForm: "",
};

const nameForm = document.querySelector("#name-form");
const phoneForm = document.querySelector("#phone-form");
const mailForm = document.querySelector("#mail-form");
const messageForm = document.querySelector("#message-form");

/*nameForm.addEventListener("input", completeText);
phoneForm.addEventListener("input", completeText);
mailForm.addEventListener("input", completeText);
messageForm.addEventListener("input", completeText);

function completeText(e) {
  info[e.target.id] = e.target.value;
  console.log(e.target);
  /*info[e.target.id] = e.target.value;*/
}
