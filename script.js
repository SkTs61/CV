const pdfbtn=document.getElementById("pdfbtn")

pdfbtn.addEventListener("click", function(){
    alert("Button Pressed");
    const myCV = document.getElementById("myCV");
    html2pdf(myCV);
});