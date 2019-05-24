package io.github.jhipster.sample.service;

import io.github.jhipster.sample.domain.Challenge;
import io.github.jhipster.sample.repository.ChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuoteService {

    @Autowired
    private ChallengeRepository challengeRepository;

}
