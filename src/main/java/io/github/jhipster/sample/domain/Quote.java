package io.github.jhipster.sample.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "quote")
public class Quote implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "quote_text", nullable = false)
    private String quoteText;

    @NotNull
    @Column(name = "quote_author", nullable = false)
    private String quoteAuthor;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuoteText() {
        return quoteText;
    }

    public void setQuoteText(String quoteText) {
        this.quoteText = quoteText;
    }

    public String getQuoteAuthor() {
        return quoteAuthor;
    }

    public void setQuoteAuthor(String quoteAuthor) {
        this.quoteAuthor = quoteAuthor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Quote quote = (Quote) o;
        return Objects.equals(id, quote.id) &&
            Objects.equals(quoteText, quote.quoteText) &&
            Objects.equals(quoteAuthor, quote.quoteAuthor);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, quoteText, quoteAuthor);
    }

    @Override
    public String toString() {
        return "Quote{" +
            "id=" + id +
            ", quoteText='" + quoteText + '\'' +
            ", quoteAuthor='" + quoteAuthor + '\'' +
            '}';
    }
}
