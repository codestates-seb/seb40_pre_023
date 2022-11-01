package com.seb40pre023.global.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

<<<<<<< HEAD
        source.registerCorsConfiguration("/**", config);
=======
        source.registerCorsConfiguration("/members/**", config);
>>>>>>> 6d830ed243240ca3442f99fdfd1fb9227d0636dc
        return new CorsFilter(source);
    }
}