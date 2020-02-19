const billetter = [];

function kjøpBillett() {

    const filmer = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const billett = {
        film: filmer,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    }

    billetter.push(billett);
    
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

    skrivUtBillett();

    if (antall === ""){
        document.getElementById("antallValidering").innerHTML = "Må skrive noe inn i antall";
        antallValidering.style.color = "red";
        document.getElementById("visBilletter").innerHTML = "ERROR; Manglende input felt må fylles ut!";
    } else {
        document.getElementById("antallValidering").innerHTML = "";
    }

    if (fornavn === ""){
        document.getElementById("fornavnValidering").innerHTML = "Må skrive noe inn i fornavnet";
        fornavnValidering.style.color = "red";
        document.getElementById("visBilletter").innerHTML = "ERROR; Manglende input felt må fylles ut!";
    } else {
        document.getElementById("fornavnValidering").innerHTML = "";
    }

    if (etternavn === ""){
        document.getElementById("etternavnValidering").innerHTML = "Må skrives noe inn i etternavnet";
        etternavnValidering.style.color = "red";
        document.getElementById("visBilletter").innerHTML = "ERROR; Manglende input felt må fylles ut!";
    } else {
        document.getElementById("etternavnValidering").innerHTML = "";
    }

    if (telefonnr === ""){
        document.getElementById("telefonnrValidering").innerHTML = "Må skrive noe inn i telefonnr";
        telefonnrValidering.style.color = "red";
        document.getElementById("visBilletter").innerHTML = "ERROR; Manglende input felt må fylles ut!";
    } else {
        document.getElementById("telefonnrValidering").innerHTML = "";
    }

    if (epost === ""){
        document.getElementById("epostValidering").innerHTML = "Må skrive noe inn i epost";
        epostValidering.style.color = "red";
        document.getElementById("visBilletter").innerHTML = "ERROR; Manglende input felt må fylles ut!";
    } else {
        document.getElementById("epostValidering").innerHTML = "";
    }
}

function skrivUtBillett() {
    let ut = "<table style='width: 50%;'><tr><th>Film</th>" +
        "<th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";

    for (let b of billetter){
        ut += "<tr>";
        ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn
            + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr + "</td><td>" +
            b.epost + "</td>"
        ut += "</tr>"

        document.getElementById("visBilletter").innerHTML = ut;
    }
}

function slettBillett() {
    document.getElementById("visBilletter").innerHTML = billetter.splice(0, billetter.length);
}


