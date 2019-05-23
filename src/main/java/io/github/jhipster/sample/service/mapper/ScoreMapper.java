package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.Score;
import io.github.jhipster.sample.service.dto.ScoreDTO;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

@Service
public class ScoreMapper {

    public ScoreDTO mapScoreDTOFromScore(Score score){
        ScoreDTO scoreDTO = new ScoreDTO();
        scoreDTO.setScore(score.getScore());
        scoreDTO.setScoreDate(DateTimeFormatter.ISO_INSTANT.format(score.getCreatedDate().truncatedTo(ChronoUnit.SECONDS)));

        return scoreDTO;
    }
}
