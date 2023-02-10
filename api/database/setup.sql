DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    diary_name VARCHAR(30) UNIQUE NOT NULL,
    diary_content VARCHAR(500) NOT NULL,
    diary_timestamp timestamp default current_timestamp
);

INSERT INTO
    diary (
        diary_name,
        diary_content
    )
VALUES
    (
        'day 1',
        'I have created a diary'
    ),
    (
        'day 2',
        'I have created a diary part 2'
    )
