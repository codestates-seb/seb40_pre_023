package com.seb40pre023.domain.answer.repository;

import com.seb40pre023.domain.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

}
