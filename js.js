document.getElementById("addButton").onclick = function(){addStudent()}
document.getElementById("tabel").style.fontSize = "40px"

var studentNumber = 0

function addStudent(){
	studentNumber ++
	var notaReq = 60, status;
	var data = [
	document.getElementById("nomeInput").value,
	document.getElementById("serieInput").value,
	document.getElementById("notaInput").value
	]
	document.getElementById("notaInput").value >= notaReq ? status = "Aprovado" : status = "Reprovado"
	
	var newLine = '<tr id="line' + studentNumber + '">' + "<td>" + data[0] + "</td><td>" + data[1] + "</td><td>" + data[2] + "</td><td>" + status + "</td><td>" + '<input type="button" id="removeButton' + studentNumber + '" class="removeButton" value="X" onClick="document.getElementById(' + "'" + 'tabel' + "'" + ').deleteRow(' + studentNumber + '), studentNumber--, display()">' + "</td></tr>"
	
	document.getElementById("tabel").innerHTML += newLine
	document.getElementById("nomeInput").value = ""
	document.getElementById("serieInput").value = ""
	document.getElementById("notaInput").value = ""

	document.getElementById("removeButton" + (studentNumber - 1)).style.visibility="hidden"
	
	
	var tabelWidth = data[0].length + data[1].length + data[2].length
	
	if (tabelWidth > 15){
		document.getElementById("tabel").style.fontSize = "35px"
	}
	if (tabelWidth > 20){
		document.getElementById("tabel").style.fontSize = "25px"
	}
	if (tabelWidth > 40){
		document.getElementById("tabel").style.fontSize = "15px"
	}
	if (tabelWidth > 100){
		document.getElementById("tabel").style.fontSize = "10px"
	}
}