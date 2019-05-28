package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.Challenge;
import io.github.jhipster.sample.service.dto.ChallengeDTO;
import org.springframework.stereotype.Service;

@Service
public class ChallengeMapper {

    public ChallengeDTO retriveChallangeDTOFromChallange(Challenge challenge){
        if(challenge != null){
            ChallengeDTO challengeDTO = new ChallengeDTO();
            challengeDTO.setChallenge(challenge.getChallengeText());
            challengeDTO.setAdvice(challenge.getChallengeAdvice());

            return challengeDTO;
        }
        return null;
    }
}
