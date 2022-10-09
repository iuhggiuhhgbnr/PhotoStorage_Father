var url6 = "http://localhost:5000/users"

async function postDataTest(){
    var d = new Date();
    var t = d.toLocaleTimeString();


    var idForm = document.getElementById('id').value;
    var nameForm = document.getElementById('nameform').value;

    var desForm  = document.getElementById('desform').value;
    var desForm2 = document.getElementById('desform2').value;
    var desForm3 = document.getElementById('desform3').value;
    var desForm4 = document.getElementById('desform4').value;
    var desForm5 = document.getElementById('desform5').value;

    var imageDataInput = document.getElementById('imagedatainput').value;
    var timeData = t;

    var getImageNameComplete = document.getElementById('imagename').value;

    const user = {
        id: idForm,
        namecom: nameForm,
        descom: desForm,
        descom2: desForm2,
        descom3: desForm3,
        descom4: desForm4,
        descom5: desForm5,
        timeadd: timeData,
        imagedata: getImageNameComplete
    };

    const request = new Request(url6, {
        method: 'POST',
        enctype: 'multipart/form-data',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    fetch(request)
    .then(res => res.json())
    //.then(res => console.log(res));
    alert(getImageNameComplete);
}

async function getImageDataFromPlaceHolder(){
    var imageDataInput = document.getElementById('imagedatainput').value;
    var dataconvertTest = imageDataInput.lastIndexOf("\\");
  if (dataconvertTest >= 0) {
    imageDataInput = imageDataInput.substring(dataconvertTest + 1);
  }
    var getImageNameData = document.getElementById("imagename").value = imageDataInput;
    //var getImageNameComplete = document.getElementById('imagename').value;
}

function buttonClick(){
    var submitThing = document.getElementById('submit');
    var submitImage = document.getElementById('submitImageName');
    submitThing.onclick = postDataTest;
    submitImage.onclick = getImageDataFromPlaceHolder;
}

window.onload = buttonClick;