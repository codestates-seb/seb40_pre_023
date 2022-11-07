package com.seb40pre023.domain.member.dto;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.dto.QuestionDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

public class MemberDto {

    @Getter
    @AllArgsConstructor // 테스트
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "비밀번호 입력은 필수입니다.")
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", message = "비밀번호 입력은 필수입니다.")
        private String password;

        @NotBlank
        private String nickname;
    }

    @Getter
    @Setter
    @AllArgsConstructor // 테스트
    public static class Patch {

        private Long memberId;
        private String nickname;
        private String img;
        private String about;
        private Member.Roles roles;
    }

    @AllArgsConstructor
    @Getter
    public static class Login {
        @NotBlank
        private String email;

        private String password;
        private Member.Roles roles = Member.Roles.MEMBER_ACTIVE;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private Long memberId;
        private String email;
        private String nickname;
        private String about;
        private String img;
    }

    @AllArgsConstructor
    @Getter
    public static class MyPageResponse {
        private Long memberId;
        private String email;
        private String nickname;
        private String about;
        private String img;
        @Setter
        private List<QuestionDto.SimpleResponse> questionList;
        @Setter
        private Integer answerCount;
    }

}
