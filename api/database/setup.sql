DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    diary_name VARCHAR(30) UNIQUE NOT NULL,
    diary_content VARCHAR(500) NOT NULL,
    diary_timestamp timestamp default current_timestamp,
    diary_category VARCHAR(30) NOT NULL
);

INSERT INTO
    diary (
        diary_name,
        diary_content,
        diary_category
    )
VALUES
    (
        'day 1',
        'I have created a diary',
        'fun'
    ),
    (
        'day 2',
        'I have created a diary part 2',
        'work'
    ),
    (
        'day 3',
        'I have created a diary part 2',
        'work'
    ),
    (
        'day 4',
        'I have created a diary part 2',
        'fun'
    ),
    (
        'day 5',
        'I have created a diary part 2',
        'work'
    ),
    (
        'day 6',
        'I have created a diary part 2',
        'fun'
    )
