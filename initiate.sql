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

INSERT INTO telebits VALUES(1, 1, "Monsterman", 'text');
INSERT INTO telebits VALUES(2, 1, "3242432.png", 'image');
INSERT INTO telebits VALUES(3, 2, "Ow! I'm hurt!", 'text');
INSERT INTO telebits VALUES(4, 3, "3242433.png", 'image');
INSERT INTO telebits VALUES(5, 4, "Where is my mom?", 'text');
INSERT INTO telebits VALUES(6, 4, "Who are you?", 'text');