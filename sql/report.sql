create table report
(
    seatNumber varchar(10)  not null
        primary key,
    useCase    varchar(10)  not null,
    sensor     varchar(10)  not null,
    env1       varchar(255) null,
    val1       varchar(255) null,
    env2       varchar(255) null,
    val2       varchar(255) null,
    env3       varchar(255) null,
    val3       varchar(255) null,
    env4       varchar(255) null,
    val4       varchar(255) null
);


TRUNCATE TABLE report;