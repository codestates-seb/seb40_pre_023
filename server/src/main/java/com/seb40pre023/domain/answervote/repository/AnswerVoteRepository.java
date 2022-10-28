package com.seb40pre023.domain.answervote.repository;

import com.seb40pre023.domain.answervote.entity.AnswerVote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;

@EnableJpaRepositories
public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {
    Optional<AnswerVote> findByMemberMemberIdAndAnswerAnswerId(Long memberId, Long answerId);
}
