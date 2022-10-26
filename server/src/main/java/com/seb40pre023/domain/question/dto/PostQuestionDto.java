package com.seb40pre023.domain.question.dto;

import com.seb40pre023.domain.tag.entity.Tag;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PostQuestionDto {
    private String title;
    private String content;
    private List<Tag> tags;
}
