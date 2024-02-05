package com.cafe.backend.service;

import com.cafe.backend.endpoint.dtos.EmailDto;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class MailServiceImpl implements MailService {
    private final JavaMailSenderImpl mailSender;

    //TODO: handle exceptions

    //environment variables
    @Value("${spring.mail.username}")
    private String mailUsername;

    @Value("${spring.mail.password}")
    private String mailPassword;


    public MailServiceImpl() {
        this.mailSender = new JavaMailSenderImpl();
        this.mailSender.setHost("smtp.gmail.com");
        this.mailSender.setPort(587);
    }

    //we need this because the environment variables get injected after the constructor
    @PostConstruct
    private void init() {
        // Setzen der Benutzernamen und Passwörter nach der Injektion
        this.mailSender.setUsername(mailUsername);
        this.mailSender.setPassword(mailPassword);

        Properties props = this.mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");

        this.mailSender.setJavaMailProperties(props);
    }


    public void sendEmail(EmailDto emailDto) {
        SimpleMailMessage message = new SimpleMailMessage();
        //TODO: Change this to tonys cafe email (office@cafe-tonys.at)
        message.setTo("theokretz2001@gmail.com");
        message.setSubject("Neue Nachricht von " + emailDto.getName() + " (" + emailDto.getEmail() + ")");
        String text = emailDto.getMessage() + "\n\n" + "Antwort bitte an: " + emailDto.getName() + " - " + emailDto.getEmail();
        message.setText(text);
        mailSender.send(message);
    }
}
