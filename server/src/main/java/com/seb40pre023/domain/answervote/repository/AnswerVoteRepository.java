package com.seb40pre023.domain.answervote.repository;

import com.seb40pre023.domain.answervote.entity.AnswerVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {
    Optional<AnswerVote> findByMemberIdAndAnswerAnswerId(Long memberId, Long answerId);
}
