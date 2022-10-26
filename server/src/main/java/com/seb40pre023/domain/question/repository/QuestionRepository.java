package com.seb40pre023.domain.question.repository;

import com.seb40pre023.domain.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
