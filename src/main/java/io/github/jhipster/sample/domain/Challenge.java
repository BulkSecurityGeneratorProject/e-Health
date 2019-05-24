package io.github.jhipster.sample.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "challenge")
public class Challenge implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "challenge_text", nullable = false)
    private String challengeText;

    @NotNull
    @Column(name = "challenge_target", nullable = false)
    private String challengeTarget;

    @NotNull
    @Column(name = "challenge_advice", nullable = false)
    private String challengeAdvice;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getChallengeText() {
        return challengeText;
    }

    public void setChallengeText(String challengeText) {
        this.challengeText = challengeText;
    }

    public String getChallengeTarget() {
        return challengeTarget;
    }

    public void setChallengeTarget(String challengeTarget) {
        this.challengeTarget = challengeTarget;
    }

    public String getChallengeAdvice() {
        return challengeAdvice;
    }

    public void setChallengeAdvice(String challengeAdvice) {
        this.challengeAdvice = challengeAdvice;
    }

    @Override
    public String toString() {
        return "Challenge{" +
            "id=" + id +
            ", challengeText='" + challengeText + '\'' +
            ", challengeTarget='" + challengeTarget + '\'' +
            ", challengeAdvice='" + challengeAdvice + '\'' +
            '}';
    }
}
