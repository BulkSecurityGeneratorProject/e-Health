package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.domain.User;
import io.github.jhipster.sample.repository.UserRepository;
import io.github.jhipster.sample.security.SecurityUtils;
import io.github.jhipster.sample.service.ScoreService;
import io.github.jhipster.sample.service.dto.ScoreDTO;
import io.github.jhipster.sample.web.rest.errors.InternalServerErrorException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<ScoreDTO> getRandomQuote() {
        final String userLogin = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new InternalServerErrorException("Current user login not found"));

        Optional<User> user = userRepository.findOneByLogin(userLogin);
        if (!user.isPresent()) {
            throw new InternalServerErrorException("User could not be found");
        }

        log.debug("Retrieve random quote!");
        return new ResponseEntity<>(scoreService.retrieveLastScore(user.get()),
            HttpStatus.OK);
    }

}
