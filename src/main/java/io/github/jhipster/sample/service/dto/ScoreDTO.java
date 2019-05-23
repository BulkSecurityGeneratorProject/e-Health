package io.github.jhipster.sample.service.dto;

public class ScoreDTO {

    private Long score;
    private String scoreDate;

    public Long getScore() {
        return score;
    }

    public void setScore(Long score) {
        this.score = score;
    }

    public String getScoreDate() {
        return scoreDate;
    }

    public void setScoreDate(String scoreDate) {
        this.scoreDate = scoreDate;
    }

    @Override
    public String toString() {
        return "ScoreDTO{" +
            "score=" + score +
            ", scoreDate='" + scoreDate + '\'' +
            '}';
    }
}
