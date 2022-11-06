package com.seb40pre023.domain.question.repository;

import com.seb40pre023.domain.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findById(Long questionId);
    Optional<List<Question>> findByMemberMemberId(Long memberId);
}
