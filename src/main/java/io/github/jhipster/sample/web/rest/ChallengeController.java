package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.service.ChallengeService;
import io.github.jhipster.sample.service.dto.ChallengeDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/challenge")
public class ChallengeController {

    private final Logger log = LoggerFactory.getLogger(ChallengeController.class);

    @Autowired
    private ChallengeService challengeService;

    @GetMapping(value = "/{target}")
    public ResponseEntity<ChallengeDTO> getRandomQuote(@PathVariable("target") String target) {

        log.debug("Retrieve a challange for target " + target);
        return new ResponseEntity<>(challengeService.retrieveRandomChallengeOfTarget(target),
            HttpStatus.OK);
    }
}
