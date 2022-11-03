package com.seb40pre023.global.security.config;

/**
 * 클라이언트가 서버 측에 로그인 인증 요청(Username/Password를 서버 측에 전송)
 * 로그인 인증을 담당하는 Security Filter(JwtAuthenticationFilter)가 클라이언트의 로그인 인증 정보 수신
 * Security Filter가 수신한 로그인 인증 정보를 AuthenticationManager에게 전달해 인증 처리를 위임 -> 알아서 해줌
 * AuthenticationManager가 Custom UserDetailsService(MemberDetailsService)에게 사용자의 UserDetails 조회를 위임
 * Custom UserDetailsService(MemberDetailsService)가 사용자의 크리덴셜을 DB에서 조회한 후, AuthenticationManager에게 사용자의 UserDetails를 전달
 * -> 알아서 해줌
 * AuthenticationManager가 로그인 인증 정보와 UserDetails의 정보를 비교해 인증 처리
 * JWT 생성 후, 클라이언트의 응답으로 전달
 */

import com.seb40pre023.global.security.filter.JwtAuthenticationFilter;
import com.seb40pre023.global.security.handler.JwtAuthenticationEntryPoint;
import com.seb40pre023.global.security.auth.TokenProvider;
import com.seb40pre023.global.security.handler.JwtAccessDeniedHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {
    private final TokenProvider tokenProvider;
    private final CorsFilter corsFilter;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    private final AuthenticationConfiguration authenticationConfiguration;

    public WebSecurityConfig(TokenProvider tokenProvider, CorsFilter corsFilter, JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint, JwtAccessDeniedHandler jwtAccessDeniedHandler, AuthenticationConfiguration authenticationConfiguration) {
        this.tokenProvider = tokenProvider;
        this.corsFilter = corsFilter;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
        this.authenticationConfiguration = authenticationConfiguration;
    }
        @Bean
        public PasswordEncoder passwordEncoder () {
            return new BCryptPasswordEncoder();
        }

        @Bean
        public WebSecurityCustomizer webSecurityCustomizer () {
            return (web) -> web.ignoring().antMatchers("/h2-console/**"
                    , "/favicon.ico"
                    , "/error");
        }

        @Bean
        public SecurityFilterChain filterChain (HttpSecurity httpSecurity) throws Exception {
            httpSecurity
                    .csrf().disable()

                    .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)


                    .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager(), tokenProvider))
                    .exceptionHandling()
                    .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                    .accessDeniedHandler(jwtAccessDeniedHandler)

                    // enable h2-console
                    .and()
                    .headers()
                    .frameOptions()
                    .sameOrigin()

                    // 세션을 사용하지 않기 때문에 STATELESS로 설정
                    .and()
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                    .and()
                    .authorizeRequests()
                    .antMatchers("/members/**").permitAll()
                    .antMatchers("/login").permitAll()
//                .antMatchers("/api/authenticate").permitAll()
                    .antMatchers("/questions/**").permitAll()
                    .antMatchers("/answers/**").permitAll()
                    .antMatchers("/vote/**").permitAll()


                    .anyRequest().authenticated()

                    .and()
                    .apply(new JwtSecurityConfig(tokenProvider));

            return httpSecurity.build();
        }
    }
