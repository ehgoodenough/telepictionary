DROP DATABASE telepictionary;
CREATE DATABASE telepictionary;
USE telepictionary;

CREATE TABLE telebits
(
	idnum INT NOT NULL UNIQUE AUTO_INCREMENT, refnum INT NOT NULL,
	source VARCHAR(72), type ENUM('text', 'image') NOT NULL
);

ALTER TABLE telebits ADD PRIMARY KEY (idnum);
ALTER TABLE telebits ADD FOREIGN KEY(refnum) REFERENCES telebits(idnum);

INSERT INTO telebits(refnum, source, type) VALUES(1, "The graves are on fire!", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "20130326004440.png", 'image');
INSERT INTO telebits(refnum, source, type) VALUES(1, "20130326004456.png", 'image');
INSERT INTO telebits(refnum, source, type) VALUES(2, "DFBFF", 'text');