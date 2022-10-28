package com.seb40pre023.domain.answer.entity;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Entity
public class Answer extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private String content;

//    @Enumerated(EnumType.STRING)
//    private AnswerStatus answerStatus = AnswerStatus.ANSWER_COMPLETE;

    // 회원과 답변 1:N관계 매핑
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    // 질문과 답변 1:N관계 매핑
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;


    // 답변과 답변투표 매핑
    //    @OneToMany(mappedBy = "answer")
//    private List<Vote> votes = new ArrayList<>();

//    public void addQuestion(Question question) {
//        this.question = question;
//    }

    // 답변과 답변투표 매핑
    //    @OneToMany(mappedBy = "answer")
//    private List<Vote> votes = new ArrayList<>();

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