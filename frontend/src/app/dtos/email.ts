// Purpose: DTO for email. This is used to send an email from the contact form.
export class Email {
  name: string;
  email: string;
  message: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.message = '';
    }
}