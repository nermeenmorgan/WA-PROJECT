export const initPayment = async (amount) => {
    const trans_id = Math.floor(Math.random() * 100000000).toString();

    if(amount < 1000){
        return false
    }

    try{
        let data = {
            "apikey": '100403187465e7310044f330.05569895',
            "site_id": '5869433',
            "transaction_id":  trans_id, //
            "amount": amount,
            "currency": "GNF",
            "description": "paiement frais de transport",
            "notify_url": "https://wa.com/notify",
            "return_url": "https://wa.com",
            "channels": "MOBILE_MONEY",
            "lang": "fr"
        };

            let request = await fetch('https://api-checkout.cinetpay.com/v2/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const response = await request.json();
            //TODO create transactions collection and save  more data (eg: trans_id, payment_token: response.data.payment_token)
            console.log('response.data ===>>>', response);
            return response.data.payment_url
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}