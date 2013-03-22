DROP DATABASE telepictionary;
CREATE DATABASE telepictionary;
USE telepictionary;

CREATE TABLE telebits
(
	idnum INT NOT NULL UNIQUE AUTO_INCREMENT, refnum INT NOT NULL,
	source VARCHAR(32), type ENUM('text', 'image') NOT NULL
);

ALTER TABLE telebits ADD PRIMARY KEY (idnum);
ALTER TABLE telebits ADD FOREIGN KEY(refnum) REFERENCES telebits(idnum);

INSERT INTO telebits(refnum, source, type) VALUES(1, "That gotta hurt!", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(1, "3242432.png", 'image');
INSERT INTO telebits(refnum, source, type) VALUES(2, "Ow, my spine!", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(3, "3242433.png", 'image');
INSERT INTO telebits(refnum, source, type) VALUES(4, "Where is my mom?", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(4, "Who are you..?", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(4, "Ask me anything!", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(5, "3242434", 'image');