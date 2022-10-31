package com.seb40pre023.domain.answervote.dto;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class AnswerVoteDto {
    /*
    투표 UP을 눌렀을 경우 UP 상태가 표시된다
    UP을 누른 상태에서 다시 UP을 누를경우 투표 취소
    UP을 누른 상태에서 DOWN을 누르면 DOWN으로 투표한다
    API :
     UP -> vote/2 POST
     DOWN -> vote/3 POST
     취소나 초기값 등으로는 1을 사용할 예정
     */
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        private Long memberId;
        private Long answerId;
        private int voteState;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class response {
        private Long voteId;
        private Long memberId;
        private Long answerId;
        private int voteState;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
