// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // jika diklik akan menjalankan fungsi computerChoice
    a.addEventListener("click",(element) => {
        computerChoice(element);
    })
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock","Paper","Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML =
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    //jika pilihan komputer sama dengan user (draw)
    if(pilihanUser == pilihanComputer){
        alert("DRAW")
    }

    //jika user menang
    if (pilihanUser == "Rock" && pilihanComputer == "scissors"){
        alert("YOU WIN");
    }else if(pilihanUser == "pappers" && pilihanComputer == "rock"){
        alert("YOU WIN");
    }else if(pilihanUser == "scissors" && pilihanComputer == "papper"){
        alert("YOU WIN");
    }

    //jika komputer menang
    if (pilihanUser == "rock" && pilihanComputer == "user"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "papper" && pilihanComputer == "scissors"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "scissors" && pilihanComputer == "rock"){
        alert("COMPUTER WIN");
    }
}
