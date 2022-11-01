package com.seb40pre023.global.security.handler;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

<<<<<<< HEAD
/**
 * 유저 정보는 있으나 자원에 접근할 수 있는 권한이 없는 경우 SC_FORBIDDEN (403) 응답을 내려줍니다.
 */
@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {

    // 필요한 권한이 없이 접근하려 할때 403
=======
@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {

>>>>>>> 6d830ed243240ca3442f99fdfd1fb9227d0636dc
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        response.sendError(HttpServletResponse.SC_FORBIDDEN);
    }
}
