package io.github.jhipster.sample.service;

import io.github.jhipster.sample.repository.QuestionRepository;
import io.github.jhipster.sample.service.dto.QuestionDTO;
import io.github.jhipster.sample.service.mapper.QuestionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private QuestionMapper questionMapper;

    public QuestionDTO retrieveAllQuestions(){
        return questionMapper.retrieveQuestionDTOFromQuestionList(
            questionRepository.findAll());
    }
}
