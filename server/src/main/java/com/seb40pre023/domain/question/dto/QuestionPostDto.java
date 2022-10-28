package com.seb40pre023.domain.question.dto;

import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.entity.QuestionTag;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionPostDto {

    private String title;
    private String content;
    private List<QuestionTag> tagList;

}
