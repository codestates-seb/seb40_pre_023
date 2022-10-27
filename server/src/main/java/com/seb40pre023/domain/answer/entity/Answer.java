package com.seb40pre023.domain.answer.entity;

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
    private long answerId;

    @Column(nullable = false)
    private String content;

//    @Enumerated(EnumType.STRING)
//    private AnswerStatus answerStatus = AnswerStatus.ANSWER_COMPLETE;

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;


//    public void addMember(Member member) {
//        this.member = member;
//    }

    public enum AnswerStatus {
        ANSWER_COMPLETE("답변 완료"),
        ANSWER_CANCLE("답변 취소");

        @Getter
        private String stepDescription;

        AnswerStatus(String stepDescription) {
            this.stepDescription = stepDescription;
        }
    }
}