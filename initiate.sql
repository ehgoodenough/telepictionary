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

INSERT INTO telebits(refnum, source, type) VALUES(1, "Too much Pizza", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(2, "The graves are on fire!", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(2, "images/20130327232831.png", 'image');
INSERT INTO telebits(refnum, source, type) VALUES(4, "I am a bit confused", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(5, "Upside Down Zombie", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(5, "images/20130327233131.png", 'image');
INSERT INTO telebits(refnum, source, type) VALUES(7, "Stich in Time Saves Nine", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(8, "Who has seen the wind?", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(8, "images/20130327210648.png", 'image');
INSERT INTO telebits(refnum, source, type) VALUES(9, "What are those squiggles?", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(11, "DFBFF", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(12, "Rocketship to Mars", 'text');
INSERT INTO telebits(refnum, source, type) VALUES(12, "images/20130327233404.png", 'image');
INSERT INTO telebits(refnum, source, type) VALUES(13, "Oh no! Crashlanding!", 'text');

CREATE TABLE users
(
	usernum INT NOT NULL UNIQUE AUTO_INCREMENT,
	username VARCHAR(32), password VARCHAR(32)
);

ALTER TABLE users ADD PRIMARY KEY (usernum);

INSERT INTO users(username, password) VALUES("Andrew", "pa55w0rd");