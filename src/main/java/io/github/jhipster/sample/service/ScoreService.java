package io.github.jhipster.sample.service;

import io.github.jhipster.sample.domain.Score;
import io.github.jhipster.sample.domain.User;
import io.github.jhipster.sample.repository.ScoreRepository;
import io.github.jhipster.sample.service.dto.QuestionScorePostDTO;
import io.github.jhipster.sample.service.dto.ScoreDTO;
import io.github.jhipster.sample.service.mapper.ScoreMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;
    @Autowired
    private ScoreMapper scoreMapper;

    public ScoreDTO retrieveLastScore(User user) {
        return scoreMapper.mapScoreDTOFromScore(user.getScores().stream().max(Comparator.comparing(Score::getCreatedDate))
            .orElseThrow(NoSuchElementException::new));
    }

    public List<ScoreDTO> retrieveAllScores(User user) {
        List<ScoreDTO> scoreDTOS = new ArrayList<>();
        user.getScores().forEach(score -> {
            scoreDTOS.add(scoreMapper.mapScoreDTOFromScore(score));
        });

        return scoreDTOS;
    }

    public void saveQuestionScore(User user, QuestionScorePostDTO questionScorePostDTO) {
        scoreRepository.save(scoreMapper.mapScoreFromUserAndDto(user, questionScorePostDTO));
    }
}
