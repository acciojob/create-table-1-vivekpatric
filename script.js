function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable")
	let tr = document.createElement("tr")
	let td1 = document.createElement("td")
	let td2 = document.createElement("td")
	td1.innerText = "";
	td2.innerText = "";
  td1.innerText = "New Cell1"
	td2.innerText = "New Cell2"
	tr.appendChild(td1)
	tr.appendChild(td2)
	table.prepend(tr)
}