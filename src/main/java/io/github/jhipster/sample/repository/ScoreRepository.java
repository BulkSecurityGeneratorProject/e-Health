package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.Score;
import io.github.jhipster.sample.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Long> {

    List<Score> findAllByUserId(User userId);
    
}
