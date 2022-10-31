package com.seb40pre023.domain.member.dto;

import com.seb40pre023.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberLoginDto {
    @NotBlank
    private String email;

    private String password;
    private Member.Roles roles = Member.Roles.MEMBER_ACTIVE;
}
