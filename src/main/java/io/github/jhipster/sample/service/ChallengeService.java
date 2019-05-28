package io.github.jhipster.sample.service;

import io.github.jhipster.sample.domain.Challenge;
import io.github.jhipster.sample.repository.ChallengeRepository;
import io.github.jhipster.sample.service.dto.ChallengeDTO;
import io.github.jhipster.sample.service.mapper.ChallengeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class ChallengeService {

    @Autowired
    private ChallengeRepository challengeRepository;
    @Autowired
    private ChallengeMapper challengeMapper;

    public ChallengeDTO retrieveRandomChallengeOfTarget(String target){
        List<Challenge> challengeList = challengeRepository.findAll();
        List<Challenge> challengesForTarget = new ArrayList<>();
        challengeList.forEach(challenge -> {
            if(challenge.getChallengeTarget().equalsIgnoreCase(target))
                challengesForTarget.add(challenge);
        });

        int value = ThreadLocalRandom.current().nextInt(0, challengesForTarget.size() - 1);
        return challengeMapper.retriveChallangeDTOFromChallange(challengesForTarget.get(value));
    }

}
