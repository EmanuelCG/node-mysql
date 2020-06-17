CREATE DATABASE news_portal;
USE news_portal;

CREATE TABLE news(
    id_new INT NOT NULL PRIMARY KEY,
    title VARCHAR (100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

DESCRIBE news;

INSERT INTO news (title, news) VALUES ('Demostation', 'Noticia Combobox');

SELECT * FROM news;