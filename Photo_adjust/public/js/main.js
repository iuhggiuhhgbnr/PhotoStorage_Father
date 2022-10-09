var url6 = "http://localhost:5000/users"


var rapidCall = setTimeout(getNumber,1000)
async function getNumber(){
    //console.log(fetch(url4).then(troll => {console.log(troll)}));
    fetch(url6,{ method: 'GET', 
    headers: {
        Accept: 'application/json',
      },
})
    .then(troll => {
        console.log(troll)
        return troll.json();
        //return JSON.stringify(troll);
    })
    .then(incident => {
        //console.log(incident);
        console.log(incident);      
        var testArray = incident;
        testArray.sort(function (a, b) {
			return a.id - b.id
		})
        console.log(testArray);
        const incidentTableData = incident.map(user => {         
            return `<div class="dataContainer" id="dataContainer">

                    <p>หมายเลขรูปภาพ : ${user.id}</p>
                    <p>ชื่อรูปภาพ : ${user.namecom}</p>
                    <p>คำอธิบาย 1 : ${user.descom}</p>
                    <p>คำอธิบาย 2 : ${user.descom}</p>
                    <p>คำอธิบาย 3 : ${user.descom}</p>
                    <p>คำอธิบาย 4 : ${user.descom}</p>
                    <p>คำอธิบาย 5 : ${user.descom}</p>
                    <p>Time Add : ${user.timeadd}</p>
                    <img src = "uploadImage\\${user.imagedata}" alt="Fail" />
                    </div>
                    `;                   
        }).join("");
        document.querySelector('#app').insertAdjacentHTML("afterbegin", incidentTableData);
        console.log(incidentTableData);       
        //console.log(incident)       
    })
}


//"data:image/png;base64,"



