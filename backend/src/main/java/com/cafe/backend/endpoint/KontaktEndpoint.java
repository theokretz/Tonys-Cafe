package com.cafe.backend.endpoint;

import com.cafe.backend.endpoint.dtos.EmailDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    @PostMapping("/email")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin(origins = "http://localhost:4200")
    public void sendEmail(@RequestBody EmailDto emailDto) {
        LOGGER.info("POST /api/v1/kontakt/email: send email");
        System.out.println(
            "Email sent to: " + emailDto.getEmail() + " with message: " + emailDto.getMessage() +
                " from: " + emailDto.getName());

    }
}
