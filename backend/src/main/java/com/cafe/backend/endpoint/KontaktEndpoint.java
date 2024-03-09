package com.cafe.backend.endpoint;

import com.cafe.backend.endpoint.dtos.EmailDto;
import com.cafe.backend.service.MailServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.lang.invoke.MethodHandles;

@RestController
@RequestMapping(value = "/api/v1/kontakt")
public class KontaktEndpoint {
    private static final Logger LOGGER =
        LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());
    private MailServiceImpl mailService;

    @Autowired
    public KontaktEndpoint(MailServiceImpl mailService) {
        this.mailService = mailService;
    }

    @PostMapping("/email")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin(origins = "http://localhost:4200")
    public void sendEmail(@RequestBody EmailDto emailDto) {
        LOGGER.info("POST /api/v1/kontakt/email: send email");
        //send email to cafe
        mailService.sendEmail(emailDto);
        //send confirmation email to user
        mailService.sendEmail(emailDto.getEmail());
    }
}
