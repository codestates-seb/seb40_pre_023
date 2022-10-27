package com.seb40pre023.domain.question.dto;

import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.entity.QuestionTag;
import com.seb40pre023.domain.tag.entity.Tag;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PostQuestionDto {
    private String title;
    private String content;
    private List<QuestionTag> tagList;


    public Question toQuestion() {
        Question question = new Question();
        question.setTitle(title);
        question.setContent(content);
        question.setTagList(tagList);

        return question;
    }
}
