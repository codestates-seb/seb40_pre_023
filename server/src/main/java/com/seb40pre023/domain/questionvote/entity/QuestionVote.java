package com.seb40pre023.domain.questionvote.entity;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class QuestionVote extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    // MemberId : "투표상태" 를 HashMap 에 저장
    @ElementCollection
    private Map<Long, VoteStatus> voteStatus = new HashMap<>();

    @OneToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    private int voteCount;

    // 투표 상태를 enum 타입으로 나타냄.
    public enum VoteStatus {
        VOTE_GOOD(1, "추천"),
        VOTE_BAD(-1, "비추천");

        @Getter
        private int voteNumber;
        @Getter
        private String status;

        VoteStatus(int voteNumber, String status){
            this.voteNumber = voteNumber;
            this.status = status;
        }
    }

    public void setQuestion(Question question) {
        this.question = question;
        if(question.getQuestionVote() != this) {
            question.setQuestionVote(this);
        }
    }
}
