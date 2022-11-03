package com.seb40pre023.domain.answervote.entity;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AnswerVote extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    private Long memberId;
    private Long answerId;

    @Column(nullable = false)
    private int voteState;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
}