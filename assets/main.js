document.addEventListener("DOMContentLoaded", () => {
  console.log("document chargé!");
  const myForm = document.querySelector("#myForm");
  myForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      name: document.querySelector("#input1").value,
      email: document.querySelector("#input2").value,
      message: document.querySelector("#input3").value,
    };
    console.log(data);
    const response = await axios.post(
      "https://backendformulaire.herokuapp.com/",
      data
    );
    // https://myformulairebackend.herokuapp.com/
    console.log(response);
    if (response.status !== 200) {
      alert("Le formulaire n'a pas été envoyé.");
    } else {
      console.log("Tout va bien.");
    }
  });
});

// PREMIERE QUESTION
let audio = document.getElementById("audio");
let audio1 = document.getElementById("audio1");
let unhidenext = document.getElementById("next1button");
let start = document.getElementById("startbutton");
let question = "Hey there, what's your name ?";
let myarr = question.split("");
let timelooper;
let input = document.getElementById("input1");
let hidden = true;
function loop1() {
  if (myarr.length > 0) {
    document.getElementById("question1").innerHTML += myarr.shift();
    audio.play();
    timelooper = setTimeout("loop1()", 40);
  } else {
    setTimeout(() => {
      input.style.visibility = "inherit";
    }, 500);

    let num = setInterval(() => {
      console.log(input.value);
      if (hidden === true) {
        input.style.opacity = 0;
        hidden = false;
      } else {
        input.style.opacity = 1;
        hidden = true;
      }

      if (input.value) {
        clearInterval(num);
        input1.style.opacity = 1;
        unhidenext.style.display = "flex";
      }
    }, 500);
  }
}
start.addEventListener("click", loop1);

// DEUXIEME QUESTION

let unhidenext2 = document.getElementById("next2button");
let unhide = document.getElementById("next1button");
let question2 =
  "To be honnest, I don't really care about your full name,  but i'd like to get your email please. ";
//
let myarr2 = question2.split("");
let timelooper2;
let input2 = document.getElementById("input2");
let hidden2 = true;

function loop2() {
  if (myarr2.length > 0) {
    document.getElementById("question2").innerHTML += myarr2.shift();
    audio.play();
    timelooper2 = setTimeout("loop2()", 40);
  } else {
    setTimeout(() => {
      input2.style.visibility = "inherit";
    }, 500);
  }
}
let num2 = setInterval(() => {
  if (hidden2 === true) {
    input2.style.opacity = 0;
    hidden2 = false;
  } else {
    input2.style.opacity = 1;
    hidden2 = true;
  }
  if (input2.value) {
    clearInterval(num2);
    input2.style.opacity = 1;
    unhidenext2.style.display = "flex";
  }
}, 500);

unhide.addEventListener("click", loop2);

// TROISIEME QUESTION

let thanks = document.getElementById("thanks");
let unhidesubmit = document.getElementById("submit");
let unhide3 = document.getElementById("next2button");
let question3 =
  "Well, that's it. You can say something if you really want to...";
let myarr3 = question3.split("");
let timelooper3;
let input3 = document.getElementById("input3");
let hidden3 = true;
function loop3() {
  if (myarr3.length > 0) {
    document.getElementById("question3").innerHTML += myarr3.shift();
    audio.play();
    timelooper3 = setTimeout("loop3()", 40);
  } else {
    setTimeout(() => {
      input3.style.visibility = "inherit";
      unhidesubmit.style.visibility = "visible";
      // thanks.style.display = "flex";
    }, 500);
  }
}
unhide3.addEventListener("click", loop3);
