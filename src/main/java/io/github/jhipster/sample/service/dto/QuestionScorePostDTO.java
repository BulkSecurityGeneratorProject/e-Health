package io.github.jhipster.sample.service.dto;

public class QuestionScorePostDTO {

    private Long scor_ezitare;
    private Long scor_frica;

    public Long getScor_ezitare() {
        return scor_ezitare;
    }

    public void setScor_ezitare(Long scor_ezitare) {
        this.scor_ezitare = scor_ezitare;
    }

    public Long getScor_frica() {
        return scor_frica;
    }

    public void setScor_frica(Long scor_frica) {
        this.scor_frica = scor_frica;
    }

    @Override
    public String toString() {
        return "QuestionScorePostDTO{" +
            "scor_ezitare=" + scor_ezitare +
            ", scor_frica=" + scor_frica +
            '}';
    }
}
