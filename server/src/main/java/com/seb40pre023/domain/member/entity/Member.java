package com.seb40pre023.domain.member.entity;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.questionvote.entity.QuestionVote;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "MEMBER")
public class Member extends BaseTime {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long memberId;

    // 멤버와 답변 1:N관계 매핑
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

    // 멤버와 질문 1:N관계 매핑
    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    // 멤버와 답변투표 1:N관계 매핑
    @OneToMany(mappedBy = "member")
    private List<AnswerVote> answerVotes = new ArrayList<>();

    // 멤버와 질문투표 1:N관계 매핑
    @OneToMany(mappedBy = "member")
    private List<QuestionVote> questionVotes = new ArrayList<>();

    @Column(nullable = false, updatable = false)
    private String email;
    @Column(nullable = false)
    private String nickname;

    @Column(nullable = true)
    private String about;

    @Column(nullable = false)
    private String password;

    @Column(nullable = true)
    private String img;

    @Column(nullable = false)
    private Roles roles = Roles.MEMBER_ACTIVE;

    public enum Roles {
        MEMBER_ACTIVE("존재하는 회원"),
        MEMBER_NOT_EXISTS("존재하지 않는 회원");

        @Getter
        private String roles;

        Roles(String roles) {
            this.roles = roles;
        }
    }

//    public Member(Long memberId, String email, String nickname, String about, String img) {
//        this.memberId = memberId;
//        this.email = email;
//        this.nickname = nickname;
//        this.about = about;
//        this.img = img;
//    }
}
