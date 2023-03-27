export default async (req, res) => {
    const {email} = req.body;

    console.log({email});

    if (!email) {
        return res.status(400).json({error: 'Email is required'});
    }

    try {
        const AUDIENCE_ID = "0c8e2b3345";
        const API_KEY = "79cc1282e174adb6eeb2ac13bc98b5bb-us12";
        const DATACENTER = "us12";
        const data = {
            email_address: email,
            status: "subscribed"
        };

        const response = await fetch (`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
            body: JSON.stringify(data),
            headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json"
            },
            method: "POST"
        });

        if (response.status >= 400) {
            return res.status(400).json({error: `There was an error subscribing to the newsletter. Try again later.`});
        }

        return res.status(201).json({error: ""});
    } catch (error) {
        return res.status(500).json({error: error.message || error.toString()});
    }
}