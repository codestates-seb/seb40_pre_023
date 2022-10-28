package com.seb40pre023.domain.answervote.service;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.answervote.repository.AnswerVoteRepository;
import com.seb40pre023.global.error.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerVoteService {
    private final AnswerVoteRepository answerVoteRepository;

    public AnswerVote createAnswerVote(AnswerVote answerVote) {
        if (answerVote.getVoteValue() == 1) {
            answerVote.setAnswerVoteStatus(AnswerVote.AnswerVoteState.ANSWER_VOTE_UP);
        }
        else if (answerVote.getVoteValue() == -1) {
            answerVote.setAnswerVoteStatus(AnswerVote.AnswerVoteState.ANSWER_VOTE_DOWN);
        }

        return answerVoteRepository.save(answerVote);
    }

    public AnswerVote updateAnswerVote(Long memberId, Long answerId, int changeValue) {
        Optional<AnswerVote> optionalAnswerVote =
                answerVoteRepository.findByMemberMemberIdAndAnswerAnswerId(memberId, answerId);
        AnswerVote findAnswerVote = optionalAnswerVote.get();

        int basedValue = findAnswerVote.getVoteValue();
        if (basedValue == changeValue) {
            System.out.println("중복 투표로 적용 안함");
            return findAnswerVote;
        }
        else {
            basedValue += changeValue;
            if (basedValue == 1) {
                findAnswerVote.setAnswerVoteStatus(AnswerVote.AnswerVoteState.ANSWER_VOTE_UP);
                findAnswerVote.setVoteValue(basedValue);
            }
            else if (basedValue == 0) {
                findAnswerVote.setAnswerVoteStatus(AnswerVote.AnswerVoteState.ANSWER_VOTE_NOTHING);
                findAnswerVote.setVoteValue(basedValue);
            }
            else if (basedValue == -1) {
                findAnswerVote.setAnswerVoteStatus(AnswerVote.AnswerVoteState.ANSWER_VOTE_DOWN);
                findAnswerVote.setVoteValue(basedValue);
            }
        }
        return answerVoteRepository.save(findAnswerVote);
    }

    @Transactional(readOnly = true)
    public boolean findAnswerVote(Long memberId, Long answerId) {
        Optional<AnswerVote> optionalAnswerVote =
                answerVoteRepository.findByMemberMemberIdAndAnswerAnswerId(memberId, answerId);
        if (optionalAnswerVote.isPresent())
            return true;
        else return false;
    }
}
