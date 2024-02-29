import { createRequire } from "module";
const require = createRequire(import.meta.url);

const sgMail = require('@sendgrid/mail');

export const handler = async (event) => {
    let key = process.env.sendGridKey
    sgMail.setApiKey(key);
    
    const emailData = JSON.parse(event.body);

    const message = {
        to: 'theokretz2001@gmail.com',
        from: 'tonys.cafe.mail.service@gmail.com',
        subject: `Neue Anfrage von ${emailData.name}`,
        text: `Anfrage: \n  ${emailData.message} \n\n Antwort bitte an: ${emailData.name} - ${emailData.email}`,
    };
    
    const message2 = {
        to: emailData.email,
        from: 'tonys.cafe.mail.service@gmail.com',
        subject: 'Bestätigung Ihrer Anfrage bei Tony\'s Cafe',
        text: 'Vielen Dank für Ihre Anfrage bei Tony\'s Cafe. Ihre Anfrage wird in Kürze bearbeitet.',
    };

    try {
        await sgMail.send(message);
        await sgMail.send(message2);
        return { statusCode: 200, 

        body: JSON.stringify('E-Mail wurde erfolgreich gesendet.') };
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
        return { statusCode: error.code,

            body: JSON.stringify('Ein Fehler ist aufgetreten.') };
    }
};

