package com.seb40pre023.domain.answervote.service;

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

    public AnswerVote createAnswerVote(AnswerVote answerVote) {
        // 기존 해당 답변에 투표를 한 상태인지
        if (verifyExistsId(answerVote.getVoteId())) {
            // 기존 답변에 투표를 한 이력이 있다면 UP인지 DOWN인지 값을 가져옴
            int value = answerVote.getVoteValue();

            // 기존 답변 투표 값과 새로 들어온 값이 같다면 중복이므로 아무처리도 하지 않음
//            if (value == )

            // 중복이 아니라면 투표 값 변경
            updateVote(answerVote.getVoteId());
        }
//        else updateVote

        return answerVoteRepository.save(answerVote);
    }

//    public AnswerVote updateAnswerVote(AnswerVote answerVote) {
//        AnswerVote findAnswerVote = findVerifiedAnswerVote(answerVote.getVoteId());
////        Optional.ofNullable(answerVote.getVoteState())
////                .ifPresent();
//    }

    private boolean verifyExistsId(long voteId) {
        Optional<AnswerVote> answerVote = answerVoteRepository.findById(voteId);
        if (answerVote.isPresent())
            return true;
        return false;
    }

    private void updateVote(long voteId) {
        AnswerVote answerVote = findAnswerVote(voteId);


//        Member member = memberService.findMember(order.getMember().getMemberId());
//        int earnedStampCount = StampCalculator.calculateEarnedStampCount(order);
//
//        Stamp stamp = member.getStamp();
//        stamp.setStampCount(
//                StampCalculator.calculateStampCount(stamp.getStampCount(),
//                        earnedStampCount));
//        member.setStamp(stamp);
//        memberService.updateMember(member);
    }

    @Transactional(readOnly = true)
    public AnswerVote findAnswerVote(long voteId) {
        return findVerifiedAnswerVote(voteId);
    }

    private AnswerVote findVerifiedAnswerVote(long voteId) {
        Optional<AnswerVote> optionalAnswerVote = answerVoteRepository.findById(voteId);
        AnswerVote findAnswerVote =
                optionalAnswerVote.orElseThrow(() ->
                        new RuntimeException("존재하지 않는 투표번호"));
        return findAnswerVote;
    }

}
