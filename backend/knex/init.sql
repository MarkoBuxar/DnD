CREATE DATABASE dndcharsheet;
USE dndcharsheet;

CREATE TABLE characters(
  character_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  creation_date DATETIME DEFAULT NOW(),
  character_name VARCHAR(64) NOT NULL UNIQUE,
  lvl INT(2) UNSIGNED DEFAULT 1, 
  xp INT UNSIGNED DEFAULT 0,
  age INT UNSIGNED,
  gender VARCHAR(64),
  class VARCHAR(64) NOT NULL,
  size VARCHAR(24),
  height VARCHAR(24),
  weight VARCHAR(24),
  skin VARCHAR(24),
  eye_colour VARCHAR(24), 
  handedness VARCHAR(24),
  physical_desc TEXT,
  d6 INT(2) UNSIGNED,
  d8 INT(2) UNSIGNED,
  d10 INT(2) UNSIGNED,
  d12 INT(2) UNSIGNED
);

CREATE TABLE language_list (
  language_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  language_name VARCHAR(64),
  language_type VARCHAR(24),
  script VARCHAR(24)
);

CREATE TABLE languages (
  id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  character_id INT NOT NULL,
  language_id INT,
  language_name VARCHAR(64),
  language_type VARCHAR(24),
  script VARCHAR(24),
  FOREIGN KEY (character_id) REFERENCES characters (character_id),
  FOREIGN KEY (language_id) REFERENCES language_list (language_id)
);


CREATE TABLE exhaustion_list (
  id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT, 
  effect VARCHAR(512) NOT NULL
);

CREATE TABLE gold_pouches (
  id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  character_id INT NOT NULL,
  CP INT NOT NULL DEFAULT 0,
  SP INT NOT NULL DEFAULT 0,
  EP INT NOT NULL DEFAULT 0,
  GP INT NOT NULL DEFAULT 0,
  PP INT NOT NULL DEFAULT 0,
  FOREIGN KEY (character_id) REFERENCES characters (character_id)
);

CREATE TABLE proficiency_types (
  proficiency_type_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  proficiency_type_name VARCHAR(24) NOT NULL
);

CREATE TABLE proficiency_list (
  proficiency_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  proficiency_name VARCHAR(64) NOT NULL UNIQUE,
  proficiency_type_id INT NOT NULL,
  skill VARCHAR(8),
  FOREIGN KEY (proficiency_type_id) REFERENCES proficiency_types(proficiency_type_id)
);

CREATE TABLE proficiencies (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  character_id INT NOT NULL,
  proficiency_id INT NOT NULL,
  FOREIGN KEY (character_id) REFERENCES characters(character_id),
  FOREIGN KEY (proficiency_id) REFERENCES proficiency_list(proficiency_id)
);