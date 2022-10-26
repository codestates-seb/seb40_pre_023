package com.seb40pre023.domain.question.entity;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.tag.entity.Tag;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
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
    @JoinColumn(name = "member_id")
    private Member member;

    private String title;
    private String content;
    private String status;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> answerList;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<QuestionTag> tags;
}
