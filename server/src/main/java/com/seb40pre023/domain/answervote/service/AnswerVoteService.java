package com.seb40pre023.domain.answervote.service;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answer.service.AnswerService;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.answervote.repository.AnswerVoteRepository;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerVoteService {
    private final AnswerVoteRepository answerVoteRepository;
    private final MemberService memberService;
    private final AnswerService answerService;

    // 회원이 답변에 투표 함
    public AnswerVote createAnswerVote(Long memberId, Long answerId, AnswerVote answerVote) {
        Member member = memberService.findVerifiedMember(memberId);
        Answer answer = answerService.findVerifiedAnswer(answerId);
        answerVote.setMember(member);
        answerVote.setAnswer(answer);

        return answerVoteRepository.save(answerVote);
    }

    // 기존 UP투표를 DOWN으로, DOWN투표를 UP투표로 바꿈
    public AnswerVote updateAnswerVote(Long memberId, Long answerId, AnswerVote answerVote) {
        AnswerVote findAnswerVote = getAnswerVote(memberId, answerId);
        findAnswerVote.setVoteState(answerVote.getVoteState());

        return answerVoteRepository.save(findAnswerVote);
    }

    // 기존 UP투표를 취소, DOWN투표를 취소
    public AnswerVote cancelAnswerVote(Long memberId, Long answerId, AnswerVote answerVote) {
        AnswerVote findAnswerVote = getAnswerVote(memberId, answerId);
        findAnswerVote.setVoteState(1);

        return answerVoteRepository.save(findAnswerVote);
    }

    @Transactional(readOnly = true)
    public AnswerVote getAnswerVote(Long memberId, Long answerId) {
        Optional<AnswerVote> optionalAnswerVote =
                answerVoteRepository.findByMemberMemberIdAndAnswerAnswerId(memberId, answerId);
        AnswerVote findAnswerVote = optionalAnswerVote.get();
        return findAnswerVote;
    }

    @Transactional(readOnly = true)
    public int findAnswerVote(Long memberId, Long answerId) {
        Optional<AnswerVote> optionalAnswerVote =
                answerVoteRepository.findByMemberMemberIdAndAnswerAnswerId(memberId, answerId);
        if (optionalAnswerVote.isPresent())
            return optionalAnswerVote.get().getVoteState();
        else return -1;
    }
}
