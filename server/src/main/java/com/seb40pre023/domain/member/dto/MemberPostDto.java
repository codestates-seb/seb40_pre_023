package com.seb40pre023.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPostDto {

    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "비밀번호 입력은 필수입니다.")
    private String password;

    @NotBlank
    private String nickname;


}
