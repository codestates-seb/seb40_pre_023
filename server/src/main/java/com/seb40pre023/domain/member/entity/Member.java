package com.seb40pre023.domain.member.entity;

import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "MEMBER")
public class Member extends BaseTime {
    @Id
    private Long memberId;
    private String email;
    private String nickname;
    private String about;
//    private String password;
    private String img;
//    private Roles roles = Roles.MEMBER_ADMIN;

    public enum Roles {
        MEMBER_ADMIN("로그인한 회원"),
        MEMBER_NOT_FOUND("로그인하지 않은 회원");

        @Getter
        private String roles;
        Roles(String roles) {
            this.roles = roles;
        }
    }

    public Member(String email, String nickname) {
        this.email = email;
//        this.password = password;
        this.nickname = nickname;
    }
}
