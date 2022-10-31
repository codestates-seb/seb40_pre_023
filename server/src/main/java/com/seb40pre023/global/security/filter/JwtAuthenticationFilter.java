package com.seb40pre023.global.security.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.seb40pre023.domain.member.dto.MemberLoginDto;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.global.security.auth.Jwtsecret;
import com.seb40pre023.global.security.auth.PrincipalDetails;
import com.seb40pre023.global.security.auth.TokenProvider;
import io.jsonwebtoken.Jwts;
import lombok.SneakyThrows;
import lombok.Value;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

/**
 * JWT 인증 2.
 * 클라이언트의 로그인 인증 정보를 직접적으로 수신하여 인증 처리의 엔트리포인트(Entrypoint) 역할을 하는 Custom Filter를 구현
 * UsernamePasswordAuthenticationFilter는 폼로그인 방식에서 사용하는 디폴트 Security Filter
 */

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
//    private final JwtTokenizer jwtTokenizer; 생략

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        ObjectMapper objectMapper = new ObjectMapper();
        MemberLoginDto loginDto = objectMapper.readValue(request.getInputStream(), MemberLoginDto.class);
        //클라이언트에서 전송한 email과 password를 LoginDto 클래스로 역직렬화

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());
        //Member email과 password 정보 포함된 UsernamePasswordAuthenticationToken 생성
        return authenticationManager.authenticate(authenticationToken);
        //위에 AuthenticationToken을 AuthenticationManager에게 전달하면서 인증 처리를 위임함
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) {
        PrincipalDetails principalDetails = (PrincipalDetails) authResult.getPrincipal();
        //getPrincipal 로 Member 엔티티 클래스의 객체를 얻음

        String jwtToken = JWT.create()
                .withSubject(principalDetails.getUsername())
                .withExpiresAt(new Date(Jwtsecret.EXPIRATION_MINUTES))
                .withClaim("id", principalDetails.getMember().getMemberId())
                .withClaim("email", principalDetails.getMember().getEmail())
                .sign(Algorithm.HMAC512(Jwtsecret.SECRET));

        response.addHeader(Jwtsecret.HEADER, "Bearer " + jwtToken);
    }


}