const pdfbtn=document.getElementById("pdfbtn")
const languageSelect=document.getElementById("language");


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
