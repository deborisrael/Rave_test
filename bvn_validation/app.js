let message = " "
function validate_bvn() { 
    //console.log('gdvjd')
    // Get value from input 
    let bvn_number = document.getElementById('bvn').value;

    // https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/:bvnnumber?seckey=FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X
    // Save the seckey into a variable
    let seckey = 'FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X'; 
    
    // concatenating the variables with the URL 
    let url = `https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/${bvn_number}?seckey=${seckey}`;

    // fetch the content of the url
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
    }})
    .then(function(response){
        return response.json()
    }).then(function (jsonres){
        message += '\n Name: ' + jsonres.data.first_name + ' ' + jsonres.data.last_name + '\n BVN: ' + jsonres.data.bvn + '\n D.O.B: ' + jsonres.data.date_of_birth + '\n Phone Number: ' + jsonres.data.phone_number + '\n Reg Date: ' + jsonres.data.registration_date;
        //console.log(jsonres)
        if(jsonres.status === 'success'){
            alert(message);
        }else{
            alert('Could not Fetch Data');
        }
    })
    .catch(function(error){
        console.log(error)
    })
}