/* Init */
rowCount = 1;

/* Confirm Title */
function getFraname() {
    var franame = document.getElementById("franame").value
    var inputStep=document.getElementById("inputStep");
    document.getElementById("initStep").style.display = "none"
    inputStep.style.display = "block"
    var mwMark = document.getElementById("mwMark")
    mwMark.insertAdjacentHTML("beforeend",franame)
}

/* Add Rows */
function getFra() {
    rowCount = rowCount + 1

    /* Fetch User Input */
    let fraco = document.getElementById("fracontent").value
    let fraid = document.getElementById("fraid").value
    let fratype = $("input[name='fratype']:checked").val()
    let fracol = $("input[name='fracol']:checked").val()


    document.getElementById("templateWikitext").insertAdjacentHTML("beforeend","<br>")
    document.getElementById("templateWikitext").insertAdjacentHTML("beforeend","<br>|label"+rowCount+"      = "+fraco+"")
    document.getElementById("templateWikitext").insertAdjacentHTML("beforeend","<br>|data"+rowCount+"       = {{{"+fraco+"|}}}")
    document.getElementById("templateWikitext").insertAdjacentHTML("beforeend","<br>|rowclass"+rowCount+"   = data-"+fraid+" infobox-"+fratype+" infobox-"+fracol+"")
    var mwMark = document.getElementById("mwMark")
    mwMark.insertAdjacentHTML("beforeend","<br>| "+fraco+" = ")

    /* Clean-up */
    document.getElementById("fracontent").value = ""
    document.getElementById("fraid").value = ""
}
function stopMakeFra() {
    document.getElementById("templateWikitext").insertAdjacentHTML("beforeend","<br>|}")
    document.getElementById("mwMark").insertAdjacentHTML("beforeend","<br>}}")
    document.getElementById("mwMark").style.opacity = "100"
    document.getElementById("usageTitle").style.opacity = "100"
    document.getElementById("inputSection").style.display = "none";
    document.getElementById("initStep").style.display = "none";
    document.getElementById('templateCopy').style.display = 'inline-block';
    document.getElementById('mwMarkCopy').style.display = 'inline-block';
}