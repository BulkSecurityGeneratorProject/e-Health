package io.github.jhipster.sample.service.dto;

public class QuoteDTO {

    private String text;
    private String author;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "QuoteDTO{" +
            "text='" + text + '\'' +
            ", author='" + author + '\'' +
            '}';
    }
}
