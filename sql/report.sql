create table report
(
    seatNumber varchar(10)  not null
        primary key,
    preference    varchar(10) null,
    sensor     varchar(10)  not null,
    env1       varchar(64) null,
    val1       varchar(64) null,
    vol1       varchar(64) null,
    env2       varchar(64) null,
    val2       varchar(64) null,
    vol2       varchar(64) null,
    env3       varchar(64) null,
    val3       varchar(64) null,
    vol3       varchar(64) null
);





TRUNCATE TABLE report;