create database myblog;
use myblog;

CREATE TABLE IF NOT EXISTS `blogs`(
    `id` INT UNSIGNED AUTO_INCREMENT,
    `title` VARCHAR(40) NOT NULL,
    `intro` VARCHAR(100) NOT NULL,
    `content` VARCHAR(6000) NOT NULL,
    `category` VARCHAR(10) NOT NULL,
    `category_desc` VARCHAR(20) NOT NULL,
    `tags` VARCHAR(40) NOT NULL,
    `create_time` DATE,
    `update_time` DATE,
    PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `category`(
    `id` INT UNSIGNED AUTO_INCREMENT,
    `content` VARCHAR(20) NOT NULL
    PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


