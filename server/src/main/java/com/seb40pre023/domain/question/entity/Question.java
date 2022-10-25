package com.seb40pre023.domain.question.entity;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.tag.entity.Tag;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question extends BaseTime {
    private Long questionId;
    private String title;
    private String content;
    private String status;
    private List<Answer> answerList;
    private List<Tag> tags;
}
