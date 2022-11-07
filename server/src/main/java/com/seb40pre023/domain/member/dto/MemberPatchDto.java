package com.seb40pre023.domain.member.dto;

import com.seb40pre023.domain.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberPatchDto {

    private Long memberId;
    private String nickname;
    private String img;
    private String about;
    private Member.Roles roles;

//    public void setMemberId(Long memberId) {
//        this.setMemberId(memberId);
//    }
}
