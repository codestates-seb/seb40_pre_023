package com.seb40pre023.domain.answer.service;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answer.repository.AnswerRepository;
import com.seb40pre023.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

//        Optional.ofNullable(answer.getAnswerStatus())
//                .ifPresent(memberStatus -> findAnswer.setAnswerStatus(AnswerStatus));

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        return findAnswer;
    }

    public List<Answer> findAnswers() {
        List<Answer> answers = List.of(
                new Answer(1, "test answers 1..."),
                new Answer(2, "test answers 2...")
        );
        return answers;
    }

    public void deleteAnswer(Long answerId) {
        System.out.println("success delete answer" + answerId);
        answerRepository.deleteById(answerId);
    }

    private Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new RuntimeException("존재하지 않는 답변"));
        return findAnswer;
    }
}
