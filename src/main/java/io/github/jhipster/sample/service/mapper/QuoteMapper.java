package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.Quote;
import io.github.jhipster.sample.service.dto.QuoteDTO;
import org.springframework.stereotype.Service;

@Service
public class QuoteMapper {

    public QuoteDTO retrieveQuoteDTOFromQuote(Quote quote){
        if(quote != null ){
            QuoteDTO quoteDTO = new QuoteDTO();
            quoteDTO.setText(quote.getQuoteText());
            quoteDTO.setAuthor(quote.getQuoteAuthor());

            return quoteDTO;
        }

        return null;
    }

}
