package com.seb40pre023.domain.question.service;

import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    public void createQuestion(Question question) {

    }
}
