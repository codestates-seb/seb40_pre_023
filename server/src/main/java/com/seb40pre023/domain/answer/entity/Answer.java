package com.seb40pre023.domain.answer.entity;

import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Answer extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column
    private String nickname;

    @Column(nullable = false)
    private String content;

//    @Enumerated(EnumType.STRING)
//    private AnswerStatus answerStatus = AnswerStatus.ANSWER_COMPLETE;

    // 회원과 답변 1:N관계 매핑
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    // 질문과 답변 1:N관계 매핑
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;


    @OneToMany(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<AnswerVote> answerVoteList = new ArrayList<>();

    public enum AnswerStatus {
        ANSWER_COMPLETE("답변 완료"),
        ANSWER_DELETING("답변 삭제중"),
        ANSWER_DELETE("답변 삭제");

        @Getter
        private String stepDescription;

        AnswerStatus(String stepDescription) {
            this.stepDescription = stepDescription;
        }
    }
}