window.addEventListener("load", function () {
   const dataFromLocalStorage = JSON.parse(localStorage.getItem("islogin"));
   console.log(dataFromLocalStorage);
   if (dataFromLocalStorage === null) {
    localStorage.setItem("isLogin", JSON.stringify(false));
   }
   if (dataFromLocalStorage === null || dataFromLocalStorage === false) {
    window.location.replace("http://127.0.0.1:5500/login.html");
   }
}

);

const pdfbtn=document.getElementById("pdfbtn")
const languageSelect=document.getElementById("language");
const logout=document.getElementById("logout");

logout.addEventListener("click", function(){
    localStorage.setItem("isLogin", JSON.stringify(false));
    window.location.reload();
})


const dictionary = [
    {
        id: "cvtraining",
        en: "Training",
        tr: "Egitim",

    },

    {
        id: "workexperience",
        en: "Work Experience",
        tr: "Calisma Tecrubesi",
    },
];

pdfbtn.addEventListener("click", function(){
    alert("Button Pressed");
    const myCV = document.getElementById("myCV");
    html2pdf(myCV);
});

languageSelect.addEventListener("change", function (event) {
   // console.log(event.target.value);
    translate(event.target.value);
});



function translate(selectedLanguage) {
    
        for (let i = 0; i<dictionary.length; i++) {
            const element = document.getElementById(dictionary[i].id);
            if (selectedLanguage === "en") {
                element.innerText = dictionary[i].en;
            }
            if (selectedLanguage === "tr") {
                element.innerText = dictionary[i].tr;
            }

        }
    }
