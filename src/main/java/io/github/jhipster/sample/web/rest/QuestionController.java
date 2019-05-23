package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.service.QuestionService;
import io.github.jhipster.sample.service.dto.QuestionDTO;
import io.github.jhipster.sample.service.dto.QuoteDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/question")
public class QuestionController {

    private final Logger log = LoggerFactory.getLogger(QuestionController.class);

    @Autowired
    private QuestionService questionService;

    @GetMapping("/getAllQuestions")
    public ResponseEntity<QuestionDTO> retrieveAllQuestions() {
        log.debug("Retrieve all questions!");
        return new ResponseEntity<>(questionService.retrieveAllQuestions(),
            HttpStatus.OK);
    }

}
