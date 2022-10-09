var url = "http://localhost:5000/users"

const request2 = new Request(url +"/", {
    method: 'DELETE',
});

var rapidCall = setTimeout(getdataDB,1000)
async function getdataDB(){
    //console.log(fetch(url4).then(troll => {console.log(troll)}));
    fetch(url,{ method: 'GET', 
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
        const incidentTableData = incident.map(user => {      
            return `<div class="dataContainer" id="dataContainer">
                    <button onclick = "deleteDB(this.id)" id = ${user.id}><span class = "deleteButton">x</span></button>
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

function deleteDB(dataFromButton){   
    const request = new Request(url +"/"+ dataFromButton, {
        method: 'DELETE',
    });
    fetch(request)
    .then(res => res.json())
    window.location.reload(true)
}


