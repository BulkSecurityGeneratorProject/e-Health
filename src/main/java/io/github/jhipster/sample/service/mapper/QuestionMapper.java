package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.Question;
import io.github.jhipster.sample.service.dto.QuestionDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionMapper {

    public QuestionDTO retrieveQuestionDTOFromQuestionList(List<Question> questions){
        QuestionDTO questionDTO = new QuestionDTO();
        List<String> q = new ArrayList<>();
        questions.forEach(question -> q.add(question.getQuestionText()));

        questionDTO.setQuestions(q);
        return questionDTO;
    }
}
