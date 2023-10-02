/*确认名字*/

function getfraname() {
  var franame=document.getElementById("franame").value
  var xianhide=document.getElementById("xianhide");
  document.getElementById("houhide").style.display = "none"
  xianhide.style.display = "block"
  var mwmark = document.getElementById("mwmark")
  mwmark.insertAdjacentHTML("beforeend",franame)
}
/*添加信息*/
function getfracontent() {
  var fraco=document.getElementById("fracontent").value
  document.getElementById("writee").insertAdjacentHTML("beforeend","<br />|-<br />{{#if: {{{")
  document.getElementById("writee").insertAdjacentHTML("beforeend",fraco)
  document.getElementById("writee").insertAdjacentHTML("beforeend","|}}} |<br />{{!}}  class=&quot;left&quot; {{!}} ")
  document.getElementById("writee").insertAdjacentHTML("beforeend",fraco)
  document.getElementById("writee").insertAdjacentHTML("beforeend","<br />{{!}}  class=&quot;right&quot; {{!}} {{{")
  document.getElementById("writee").insertAdjacentHTML("beforeend",fraco)
  document.getElementById("writee").insertAdjacentHTML("beforeend","|}}}}}")
  var mwmark = document.getElementById("mwmark")
  mwmark.insertAdjacentHTML("beforeend","<br>|")
  mwmark.insertAdjacentHTML("beforeend",fraco)
  mwmark.insertAdjacentHTML("beforeend","   =")
  document.getElementById("fracontent").value = ""
}
function stopmakefra() {
  document.getElementById("writee").insertAdjacentHTML("beforeend","<br />|}")
  document.getElementById("mwmark").insertAdjacentHTML("beforeend","<br />}}")
  document.getElementById("mwmark").style.opacity = "100"
  document.getElementById("cohide").style.opacity = "100"
  document.getElementById("buttoncr").style.display = "none";
  document.getElementById("houhide").style.display = "none"
}