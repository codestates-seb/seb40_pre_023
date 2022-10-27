package com.seb40pre023.domain.member.dto;

import com.seb40pre023.domain.member.entity.Member;

public class MemberResponseDto {

    private Long memberId;
    private String email;
    private String nickname;
    private String about;
    private String img;
    private Member.Roles roles;

}
