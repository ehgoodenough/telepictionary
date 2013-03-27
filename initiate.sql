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

INSERT INTO telebits(refnum, source, type) VALUES(1, "DFBFF", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "Too much Pizza", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "I am a bit confused", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "The graves are on fire!", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "Upside Down Zombie", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "Stich in Time Saves Nine", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "Who has seen the wind?", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "Rocket to Mars", 'text');