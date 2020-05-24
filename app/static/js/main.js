var czyKrzyzyk=true;
var czyStart = false;
var zbiorWynikow = [
    ["","",""],
    ["","",""],
    ["","",""]
];

function ustawCzyKrzyzyk(){
    czyKrzyzyk=!czyKrzyzyk;
}

function czyPoleZajete(id){
    var czyX = String(document.getElementById(id).textContent)==="X";
    var czyO = String(document.getElementById(id).textContent)==="O";
    return czyX||czyO;
}

function ustawZnak(id){
    if (czyKrzyzyk&&czyStart&&!czyPoleZajete(id)){
        document.getElementById(id).innerHTML = "X";
        ustawCzyKrzyzyk();
    }
    else if(!czyKrzyzyk&&czyStart&&!czyPoleZajete(id)){ 
        document.getElementById(id).innerHTML = "O";
        ustawCzyKrzyzyk();
    }
    sprawdzWynik();
}

function reset(){
    for (i = 1; i < 4; i++){
        for (j = 1; j < 4; j++){
            var idPola = "w"+String(i)+"k"+String(j);
            document.getElementById(idPola).innerHTML = "&nbsp;";
        }
    }
    czyKrzyzyk = true;
    zbiorWynikow = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    alert("Gra zrestartowana! Zaczyna X!")
}

function start(){
    if(!czyStart){
        czyKrzyzyk=true;
        czyStart=true;
        alert("Gra rozpoczęta! Zaczyna X!");
    }
}

function sprawdzWynik(){
    zbierzDane();
    if(wygranaX()){
        alert("Wygrały krzyżyki!");
    }
    else if(wygranaO()){
        alert("Wygrały kółka!");
    }
    else if(remis()){
        alert("Remis!");
    }
    console.log(zbiorWynikow);
}

function zbierzDane(){
    for (i = 1; i < 4; i++){
        for (j = 1; j < 4; j++){
            var idPola = "w"+String(i)+"k"+String(j);
            if(document.getElementById(idPola).textContent==="X"){
                zbiorWynikow[i,j]="X";
            }
            else if(document.getElementById(idPola).textContent==="O"){
                zbiorWynikow[i,j]="O";
            }
        }
    }
}

function wygranaX(){
    return false;
}

function wygranaO(){
    return false;
}

function remis(){
    return false;
}

function wyswietlPD(){
    document.getElementById("zadanieContent").style.display="block";
	document.getElementById("kontakt").style.display="none";
}

function wyswietlKontakt(){
    document.getElementById("zadanieContent").style.display="none";
	document.getElementById("kontakt").style.display="block";
}

function wyswietlMain(){
    document.getElementById("zadanieContent").style.display="none";
	document.getElementById("kontakt").style.display="none";
}

