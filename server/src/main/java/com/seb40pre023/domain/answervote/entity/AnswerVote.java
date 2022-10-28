package com.seb40pre023.domain.answervote.entity;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
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
    private AnswerVoteState answerVoteStatus = AnswerVoteState.ANSWER_VOTE_DO;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public enum AnswerVoteState {
        ANSWER_VOTE_DO(1, "투표 한 상태"),
        ANSWER_VOTE_UP(2, "UP 투표 함"),
        ANSWER_VOTE_DOWN(3, "DOWN 투표 함"),
        ANSWER_VOTE_NOTHING(4, "투표 안 한 상태");

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