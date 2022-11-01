package com.seb40pre023.domain.question.entity;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.questionvote.entity.QuestionVote;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Question extends BaseTime {
    @Id
    @GeneratedValue
    private Long questionId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    private String title;
    private String content;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> answerList = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<QuestionTag> tagList;

    @OneToOne(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private QuestionVote questionVote;

    @Enumerated(value = EnumType.STRING)
    private QuestionStatus questionStatus = QuestionStatus.UNANSWERED;

    public enum QuestionStatus {
        UNANSWERED("답변이 없는 질문"),
        UNACCEPTED("채택된 답변이 없는 질문"),
        ACCEPTED("해결된 질문");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }

    public void setQuestionVote(QuestionVote questionVote) {
        this.questionVote = questionVote;
        if (questionVote.getQuestion() != this) {
            questionVote.setQuestion(this);
        }
    }
}

