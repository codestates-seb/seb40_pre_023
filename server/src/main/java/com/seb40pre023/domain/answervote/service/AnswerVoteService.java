package com.seb40pre023.domain.answervote.service;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answer.service.AnswerService;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.answervote.repository.AnswerVoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerVoteService {
    private final AnswerVoteRepository answerVoteRepository;
    private final AnswerService answerService;

    // 회원이 답변에 투표 함
    public AnswerVote createAnswerVote(AnswerVote answerVote) {
        Answer answer = answerService.findVerifiedAnswer(answerVote.getAnswerId());
        answerVote.setAnswer(answer);

        return answerVoteRepository.save(answerVote);
    }

    // 기존 UP투표를 DOWN으로, DOWN투표를 UP투표로 바꿈
    public AnswerVote updateAnswerVote(AnswerVote answerVote) {
        AnswerVote findAnswerVote = getAnswerVote(answerVote.getMemberId(), answerVote.getAnswerId());
        findAnswerVote.setVoteState(answerVote.getVoteState());

        return answerVoteRepository.save(findAnswerVote);
    }

    // 기존 UP투표를 취소 또는 DOWN투표를 취소
    public AnswerVote cancelAnswerVote(AnswerVote answerVote) {
        AnswerVote findAnswerVote = getAnswerVote(answerVote.getMemberId(), answerVote.getAnswerId());
        findAnswerVote.setVoteState(0);

        return answerVoteRepository.save(findAnswerVote);
    }

    @Transactional(readOnly = true)
    public AnswerVote getAnswerVote(Long memberId, Long answerId) {
        Optional<AnswerVote> optionalAnswerVote =
                answerVoteRepository.findByMemberIdAndAnswerAnswerId(memberId, answerId);
        AnswerVote findAnswerVote = optionalAnswerVote.get();
        return findAnswerVote;
    }

    @Transactional(readOnly = true)
    public int findAnswerVote(Long memberId, Long answerId) {
        Optional<AnswerVote> optionalAnswerVote =
                answerVoteRepository.findByMemberIdAndAnswerAnswerId(memberId, answerId);
        if (optionalAnswerVote.isPresent())
            return optionalAnswerVote.get().getVoteState();
        else return 0;
    }
}
