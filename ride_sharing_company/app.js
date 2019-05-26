const API_publicKey = "FLWPUBK_TEST-0afd491477b8c50d8841b76df47ce575-X";
    
function payWithRave() {
    // console.log('X is ', x);
    // if(x) x.close()
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: document.getElementById('mail').value,
        amount: document.getElementById('amt').value,
        payment_options: "card",
        txref: "rave-123456",
        currency: "NGN",
        subaccounts: [
          {
            id: "RS_8C063FE8CDE84977B11F84463AAC8087",
            transaction_charge_type: "flat_subaccount",
        transaction_charge: "400"
                //transaction_split_ratio:"2",
                //transaction_charge: "100"
          }
        ],
        meta: [{
            metaname: "flightID",
            metavalue: "AP1234"
        }],
        onclose: function() {},
        callback: function(response) {
            //x.close()
            var txref = response.tx.txRef; // collect flwRef returned and pass to a server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
                //alert('success');
                //x.close();
                document.getElementById('mail').value = ''
                document.getElementById('amt').value = ''
            } else {
                // redirect to a failure page.
                alert('Faliure');
            }

           // x.close(); // use this to close the modal immediately after payment.
        }
    });
}