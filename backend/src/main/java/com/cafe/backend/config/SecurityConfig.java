package com.cafe.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@EnableWebSecurity
@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // CORS-Konfiguration
            .cors(cors -> cors.configurationSource(request -> {
                CorsConfiguration config = new CorsConfiguration();
                config.applyPermitDefaultValues();
                config.setAllowedOrigins(List.of("http://localhost:4200")); // Erlaubt CORS-Anfragen nur von dieser Origin
                config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Erlaubte Methoden
                return config;
            }))

            // CSRF-Konfiguration
            // Für das Deaktivieren von CSRF (nicht empfohlen für browserbasierte Anwendungen)
            .csrf(csrf -> csrf.disable())
            // Um CSRF mit CookieCsrfTokenRepository zu konfigurieren, kommentieren Sie die obige Zeile aus und kommentieren Sie die folgende Zeile ein
            // .csrf(csrf -> csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))

            // Autorisierungskonfiguration
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/v1/kontakt/email").permitAll() // Erlaubt ungesicherten Zugriff auf diesen Endpunkt
                .anyRequest().authenticated() // Alle anderen Anfragen erfordern eine Authentifizierung
            );

        return http.build();
    }
}


