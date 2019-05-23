package io.github.jhipster.sample.service;

import io.github.jhipster.sample.domain.Score;
import io.github.jhipster.sample.domain.User;
import io.github.jhipster.sample.repository.ScoreRepository;
import io.github.jhipster.sample.service.dto.ScoreDTO;
import io.github.jhipster.sample.service.mapper.ScoreMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.NoSuchElementException;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;
    @Autowired
    private ScoreMapper scoreMapper;

    public ScoreDTO retrieveLastScore(User user){
        return scoreMapper.mapScoreDTOFromScore(user.getScores().stream().max(Comparator.comparing(Score::getCreatedDate))
            .orElseThrow(NoSuchElementException::new));
    }
}
