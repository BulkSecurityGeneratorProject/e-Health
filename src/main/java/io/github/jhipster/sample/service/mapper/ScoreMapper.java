package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.Score;
import io.github.jhipster.sample.domain.User;
import io.github.jhipster.sample.service.dto.QuestionScorePostDTO;
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

    public Score mapScoreFromUserAndDto(User user, QuestionScorePostDTO questionScorePostDTO){
        Score score = new Score();
        score.setScore(Math.addExact(questionScorePostDTO.getScor_ezitare(),
            questionScorePostDTO.getScor_frica()));
        score.setUserId(user);

        return score;
    }
}
