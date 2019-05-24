package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.domain.User;
import io.github.jhipster.sample.repository.UserRepository;
import io.github.jhipster.sample.security.SecurityUtils;
import io.github.jhipster.sample.service.ScoreService;
import io.github.jhipster.sample.service.dto.QuestionScorePostDTO;
import io.github.jhipster.sample.service.dto.ScoreDTO;
import io.github.jhipster.sample.service.dto.UserDTO;
import io.github.jhipster.sample.web.rest.errors.InternalServerErrorException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/score")
public class ScoreController {

    private final Logger log = LoggerFactory.getLogger(UserResource.class);

    @Autowired
    private ScoreService scoreService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getLastScore")
    public ResponseEntity<ScoreDTO> getLastScore() {
        final String userLogin = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new InternalServerErrorException("Current user login not found"));

        Optional<User> user = userRepository.findOneByLogin(userLogin);
        if (!user.isPresent()) {
            throw new InternalServerErrorException("User could not be found");
        }

        log.debug("Retrieve random quote!");
        return new ResponseEntity<>(scoreService.retrieveLastScore(user.get()),
            HttpStatus.OK);
    }

    @GetMapping("/getAllScore")
    public ResponseEntity<List<ScoreDTO>> getAllScore() {
        final String userLogin = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new InternalServerErrorException("Current user login not found"));

        Optional<User> user = userRepository.findOneByLogin(userLogin);
        if (!user.isPresent()) {
            throw new InternalServerErrorException("User could not be found");
        }

        log.debug("Retrieve random quote!");
        return new ResponseEntity<>(scoreService.retrieveAllScores(user.get()),
            HttpStatus.OK);
    }

    @PostMapping("/postScore")
    public void postScore(@RequestBody QuestionScorePostDTO questionScorePostDTO) {

        Optional<User> user = userRepository.findOneByLogin("admin");
        if (!user.isPresent()) {
            throw new InternalServerErrorException("User could not be found");
        }

        scoreService.saveQuestionScore(user.get(), questionScorePostDTO);
    }

}
