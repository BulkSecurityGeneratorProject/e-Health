package io.github.jhipster.sample.service;

import io.github.jhipster.sample.domain.Quote;
import io.github.jhipster.sample.repository.QuoteRepository;
import io.github.jhipster.sample.service.dto.QuoteDTO;
import io.github.jhipster.sample.service.mapper.QuoteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class QuoteService {

    @Autowired
    private QuoteRepository quoteRepository;
    @Autowired
    private QuoteMapper quoteMapper;

    public QuoteDTO retrieveRandomQuote(){
        List<Quote> quoteList = quoteRepository.findAll();
        int value = ThreadLocalRandom.current().nextInt(0, quoteList.size() );
        return quoteMapper.retrieveQuoteDTOFromQuote(quoteList.get(value));
    }

}
