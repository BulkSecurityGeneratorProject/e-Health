package io.github.jhipster.sample.service.dto;

public class ChallengeDTO {

    private String challenge;
    private String advice;

    public String getChallenge() {
        return challenge;
    }

    public void setChallenge(String challenge) {
        this.challenge = challenge;
    }

    public String getAdvice() {
        return advice;
    }

    public void setAdvice(String advice) {
        this.advice = advice;
    }

    @Override
    public String toString() {
        return "ChallengeDTO{" +
            "challenge='" + challenge + '\'' +
            ", advice='" + advice + '\'' +
            '}';
    }
}
