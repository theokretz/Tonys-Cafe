package com.cafe.backend.service;

import com.cafe.backend.endpoint.dtos.EmailDto;

public interface MailService {
    void sendEmail(EmailDto emailDto);
}
