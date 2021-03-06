package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.security.SecurityUtils;
import io.github.jhipster.sample.service.QuoteService;
import io.github.jhipster.sample.service.dto.QuoteDTO;
import io.github.jhipster.sample.web.rest.errors.InternalServerErrorException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quote")
public class QuoteController {

    private final Logger log = LoggerFactory.getLogger(QuoteController.class);

    @Autowired
    private QuoteService quoteService;

    @GetMapping("/getRandomQuote")
    public ResponseEntity<QuoteDTO> getRandomQuote() {
        final String userLogin = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new InternalServerErrorException("Current user login not found"));

        log.debug("Retrieve random quote!");
        return new ResponseEntity<>(quoteService.retrieveRandomQuote(),
            HttpStatus.OK);
    }
}
