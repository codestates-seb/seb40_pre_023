package com.seb40pre023.domain.questionvote.entity;

import java.util.Collection;

public class QuestionVoteCalculator {
    // QuestionVote 를 입력받아 Map<> 에 저장된 투표를 합산하는 메서드
    public static int calQuestionVote(QuestionVote questionVote) {
        if (questionVote.getVoteStatus() == null) return 0;

        Collection<QuestionVote.VoteStatus> votes =  questionVote.getVoteStatus().values();

        return votes.stream()
                .map(voteStatus -> voteStatus.getVoteNumber())
                .mapToInt(voteNumber -> voteNumber)
                .sum();
    }
}
