DROP DATABASE IF EXISTS dndcharsheet;
CREATE DATABASE dndcharsheet;
USE dndcharsheet;

CREATE TABLE characters(
  user_id INT NOT NULL,
  character_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  creation_date DATETIME DEFAULT NOW(),
  character_name VARCHAR(64) NOT NULL UNIQUE,
  lvl INT(2) UNSIGNED DEFAULT 1, 
  xp INT UNSIGNED DEFAULT 0,
  age INT UNSIGNED,
  gender VARCHAR(64),
  race VARCHAR(64),
  class VARCHAR(64) NOT NULL,
  size VARCHAR(24),
  height VARCHAR(24),
  weight INT(8),
  skin VARCHAR(24),
  eye_colour VARCHAR(24), 
  handedness VARCHAR(24),
  physical_desc TEXT
);

CREATE TABLE language_list (
  language_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  language_name VARCHAR(64),
  language_type VARCHAR(24),
  language_description TEXT,
  script VARCHAR(24)
);

CREATE TABLE languages (
  id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  character_id INT NOT NULL,
  language_id INT NOT NULL,
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
  proficiency_type VARCHAR(24) NOT NULL
);

CREATE TABLE proficiency_list (
  proficiency_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  unique_id VARCHAR(64) UNIQUE,
  proficiency_name VARCHAR(64) NOT NULL UNIQUE,
  proficiency_type_id INT NOT NULL,
  skill VARCHAR(16),
  FOREIGN KEY (proficiency_type_id) REFERENCES proficiency_types(proficiency_type_id)
);

CREATE TABLE proficiencies (
  id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  character_id INT NOT NULL,
  proficiency_id INT NOT NULL,
  FOREIGN KEY (character_id) REFERENCES characters(character_id),
  FOREIGN KEY (proficiency_id) REFERENCES proficiency_list(proficiency_id)
);

CREATE TABLE stats (
  id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  character_id INT NOT NULL, -- FK
  walking_speed INT(3),
  climbing_speed INT(3),
  swimming_speed INT(3),
  strength INT(2) UNSIGNED NOT NULL DEFAULT 8,
  dexterity INT(2) UNSIGNED NOT NULL DEFAULT 8,
  constitution INT(2) UNSIGNED NOT NULL DEFAULT 8,
  intelligence INT(2) UNSIGNED NOT NULL DEFAULT 8,
  wisdom INT(2) UNSIGNED NOT NULL DEFAULT 8,
  charisma INT(2) UNSIGNED NOT NULL DEFAULT 8,
  armor_id INT, -- FK
  max_hp INT(3) NOT NULL DEFAULT 0, 
  temp_hp INT(3) NOT NULL DEFAULT 0, 
  curr_hp INT(3) NOT NULL DEFAULT 0, 
  exhaustion_id INT, -- FK
  concentration_id INT, -- FK
  d6 INT(2) UNSIGNED,
  d8 INT(2) UNSIGNED,
  d10 INT(2) UNSIGNED,
  d12 INT(2) UNSIGNED,
  FOREIGN KEY (character_id) REFERENCES characters(character_id)
);

CREATE TABLE item_types(
  item_type_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  item_type VARCHAR(24) NOT NULL
);


CREATE TABLE items(
  id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT, 
  character_id INT NOT NULL, -- FK
  quantity INT NOT NULL DEFAULT 1,
  item_type_id INT NOT NULL, -- FK
  weapon_id INT, -- FK
  armor_id INT, -- FK
  item_id INT, -- FK
  weight INT NOT NULL DEFAULT 0,
  FOREIGN KEY (character_id) REFERENCES characters(character_id),
  FOREIGN KEY (item_type_id) REFERENCES item_types(item_type_id)
);