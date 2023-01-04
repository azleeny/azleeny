document.querySelectorAll("a") .forEach((a)=>{
    //jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
       computerChoice(element);
    })

})
function computerChoice(element){
    //pilihan user
    let pilihanuser = element.target.innerText;

    //Menangkap elemen pilihan komputer

    let pilihanKomputer =document.querySelector("#result");

    //membuat pilihan komputer dengan array
    let choices = ["Rock","Paper","Scissors"];

    //pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;


   //Jika pilihan user sama dengan pilihan komputer = (Draw)
   if (pilihanuser == pilihanKomputer){
      setTimeout(()=>alert("DRAW"),300);


   }
   //Jika pilihan user yang menang = (User Win)
   if (pilihanuser =="Rock" && pilihanKomputer == "Scissors"){
    setTimeout(()=>alert("USER WIN"),300);
   }else if (pilihanuser =="Paper" && pilihanKomputer == "Rock"){
    setTimeout(()=>alert("USER WINN"),300);
   }else if (pilihanuser =="Scissors" && pilihanKomputer == "Paper"){
      setTimeout(()=>alert("USER WINNN"),300);
   }

    //Jika pilihan Komputer yang Winn= (User Lost)
    if (pilihanuser =="Scissors" && pilihanKomputer == "Rock"){
      setTimeout(()=>alert("USER LOST"),300);
     }else if (pilihanuser =="Rock" && pilihanKomputer == "Paper"){
      setTimeout(()=>alert("USER LOSTT"),300);
     }else if (pilihanuser =="Paper" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert("USER LOST"),300);
     }



}