const BASE_URL = 'https://api-checkout.cinetpay.com/v2';
const SITE_ID = '5869433';
const API_KEY = '100403187465e7310044f330.05569895'

const CLIENT_URL = 'https://client.cinetpay.com/v1'
const API_PWD = 'Welcome33!'

export const initPayment = async (amount) => {
    const trans_id = Math.floor(Math.random() * 100000000).toString();

    // amount must be greater than 1000
    if(amount < 1000){
        return false
    }

    try{
        let data = {
            "apikey": API_KEY,
            "site_id": SITE_ID,
            "transaction_id":  trans_id, //
            "amount": amount,
            "currency": "GNF",
            "description": "paiement frais de transport",
            "notify_url": "https://wa.com/notify", // TODO: ajouter le lien d'un page que cinetpay appelera automatique en callback lorsque le status de la transaction aura changé
            "return_url": "https://wa.com", // TODO: ajouter une url de page que cinetpay redirigera le client une foie le paiement éffectué (eg: une page de success par exemple) 
            "channels": "MOBILE_MONEY",
            "lang": "fr"
        };

            let request = await fetch(`${BASE_URL}/payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const response = await request.json();
            //TODO: enregistrement dans la collection transaction les données (eg: trans_id, payment_token: response.data.payment_token)
            console.log('response.data ===>>>', response);
            return response.data.payment_url
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}

// call this once the notify_url page has been mounted by making a database query to retrieve the transactions in PENDIND
export const check_status = async (trans_id) => {
    try {
        let data = {
            "transaction_id": trans_id,
            "site_id": SITE_ID,
            "apikey": API_KEY
        }

        let request = await fetch(`${BASE_URL}/payment/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await request.json();

        if(response.message === 'SUCCES'){
            // TODO: à partir de trans_id, récupérer le user_id puis le payment_number du driver
            console.log('status response', response)
            const payment_client_amount = response.data.amount

            const payment_number = '621113941' // diver payment number

            amount_to_send = payment_client_amount * 0.9

            let data = {
                'prefix': '224',
                'phone': payment_number,
                'amount': amount_to_send
            }

            await send_money(data)

            // TODO: Transfert money to driver
        }
        // TODO: mettre à jour le status de la transaction dans notre base de donnée. cinetpay_status = response.data.status
            
    }catch(error){
        console.log('an error has occured!')
    }
}

// transfert money to driver
export const get_token = async () => {
    try{

        let data = {
            'apikey': API_KEY,
            'password': API_PWD
        }

        var formBody = [];
        for (var item in data) {
        var encodedKey = encodeURIComponent(item);
        var encodedValue = encodeURIComponent(data[item]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        let request = await fetch(`${CLIENT_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        });

        const response = await request.json();

        if(response.message === 'OPERATION_SUCCES'){
            return response.data.token // the token
        }else{
            console.log('iddentifiant de connexion incorrect');
        }
    }catch (error) {
        console.log('And error has occured!')
    }
}

// getting ballance
export const balance = async () => {
    try{
        token = await get_token()

        let request = await fetch( `${CLIENT_URL}/transfer/check/balance`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        
        const response = await request.json();

        console.log('response ===>>>', response)

        if(response.message === 'OPERATION_SUCCES'){
            // solde du compte
            const solde = response.data.available
            console.log('opération réussir solde ===>>>', solde)
            return solde
        }else{
            console.log('Votre token est invalide')
        }

    }catch(error){
        console.log('And error has occured!')
    }
}

// create contact to cinetpay
export const add_contact = async (data) => {
    try{
        token = await get_token()
        
        let request = await fetch(`${CLIENT_URL}/transfer/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        const response = await request.json();

        console.log('response creating contact ===>>>', response)

        if(response.message === 'OPERATION_SUCCES'){
            console.log('contact create with success')
            return true
        }else{
            console.log('an error has occured!')
            return false
        }
    }catch (error){
        console.log('an error has occured!', error)
    }
}

// In order to transfer money to a phone number, it must first appear in your contact list
const send_money = async (data) => {
    // transfer/money/send/contact
    try{
        data.notify_url = 'https://waprojet.com/notify' // TODO: url dont cinetpay appèlera lorsque le status de la requette aurra changé.

        let request = await fetch( `${CLIENT_URL}/transfer/money/send/contact`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'token': 'application/json',
                'Authorization': token,
            },
        });
        
        const response = await request.json();

        console.log('response ====>>>', response)

    }catch(error){
        console.log('an error has occured!', error)
    }
}