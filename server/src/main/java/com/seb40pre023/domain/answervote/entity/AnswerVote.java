package com.seb40pre023.domain.answervote.entity;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class AnswerVote extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @Column(nullable = false)
    private int voteValue;

//    @Column(length = 20, nullable = false)
    @Enumerated(value = EnumType.STRING)
    private AnswerVoteState answerVoteStatus = AnswerVoteState.ANSWER_VOTE_UP;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

//    public void setAnswer(Answer answer) {
//        this.answer = answer;
//    }

    public enum AnswerVoteState {
        ANSWER_VOTE_UP(1, "UP 투표 함"),
        ANSWER_VOTE_DOWN(2, "DOWN 투표 함"),
        ANSWER_VOTE_CANCEL(3, "투표 취소 함");

        @Getter
        private int stepNumber;
        @Getter
        private String status;

        AnswerVoteState(int stepNumber, String status) {
            this.stepNumber = stepNumber;
            this.status = status;
        }
    }

}
