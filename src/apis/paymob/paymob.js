// const APIKEY = 
// 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RVM05qRTJMQ0p1WVcxbElqb2lNVGN3TnpJMU5UY3dOaTR4TkRrNU16SWlmUS5Md19yMG51d19nbmMzaUZDQ1BXVTZYX2l3clZna3FGUDVfRy1rbGlHanJmQlRLN1dNbGxZS1dHU09uRlVFcWV2ZFBUY1BkQkNBUmtBd0w2TG5GN1RUdw=='


export const firstStep = async () => {
    try {
        let data = {
            "api_key": process.env.APIKEY
        };

        let request = await fetch('https://accept.paymob.com/api/auth/tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let response = await request.json();
        let token = response.token;
        // console.log('Token Response:', response.token);
    //   if(token){

    //     async function second() {
            await secondStep(token);
        //   }
        //   second();      }  

        // Additional code based on the response can be added here

    } catch (error) {
        console.error('Error fetching token:', error);
    }
};

export const secondStep = async (token) => {
    try {
        let data = {
            "auth_token": token,
            "delivery_needed": "false",
            "amount_cents": "100",
            "currency": "EGP",
            "items": [],
        };

        let request = await fetch('https://accept.paymob.com/api/ecommerce/orders', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let response = await request.json();
        // console.log('Second Step Response:', response);
        let id =response.id;


        thirdStep(token, id)

    } catch (error) {
        console.error('Error in secondStep:', error);
    }
};

export const thirdStep= async (token,id)=>{
    let data= {
        "auth_token": token,
        "amount_cents": "100", 
        "expiration": 3600, 
        "order_id": id,
        "billing_data": {
          "apartment": "803", 
          "email": "claudette09@exa.com", 
          "floor": "42", 
          "first_name": "Clifford", 
          "street": "Ethan Land", 
          "building": "8028", 
          "phone_number": "+86(8)9135210487", 
          "shipping_method": "PKG", 
          "postal_code": "01898", 
          "city": "Jaskolskiburgh", 
          "country": "CR", 
          "last_name": "Nicolas", 
          "state": "Utah"
        }, 
        "currency": "EGP", 
        "integration_id": process.env.integration_id,
      }
    let request= await fetch('https://accept.paymob.com/api/acceptance/payment_keys',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let response = await request.json();

    // console.log('third Step Response:', response);
    // console.log('tokenn:', response.token);
let tokenn = response.token;
OrangePayment('01010101010',tokenn )
}

export const OrangePayment = async (walletMobileNumber, newToken) => {
    try {
        let data = {
            "source": {
                "identifier": walletMobileNumber,
                "subtype": "WALLET"
            },
            "payment_token": newToken
        };

        let request = await fetch('https://accept.paymob.com/api/acceptance/payments/pay', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let response = await request.json();
        console.log('Fourth Step Response:', response);
    } catch (error) {
        console.error('Error in fourthStep:', error);
    }
};
