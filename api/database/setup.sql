DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    diary_name VARCHAR(30) UNIQUE NOT NULL,
    diary_content VARCHAR(500),
    diary_timestamp VARCHAR(500)
);

INSERT INTO
    diary (
        diary_name,
        diary_content,
        diary_timestamp
    )
VALUES
    (
        'day 1',
        'I have created a diary',
        '10-02-2023 10:26 PM'
    ),
    (
        'day 2',
        'I have created a diary part 2',
        '10-02-2023 10:27 PM'
    )
