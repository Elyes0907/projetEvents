CREATE DATABASE eventhub;

use eventhub;

create table users (
us_id int not null auto_increment primary key,
us_username varchar(255) not null unique,
us_password text not null,
us_email varchar(255) not null unique
);

create table events (
ev_id int not null auto_increment primary key,
ev_title varchar(255) not null unique,
ev_description text,
ev_date date,
ev_location varchar(255),
ev_owner int not null,
constraint ev_owner foreign key (ev_owner) references users(us_id)
);

create table comments (
co_id int not null unique auto_increment primary key,
co_comment text not null,
co_user int not null,
co_event int not null,
constraint co_user foreign key (co_user) references users(us_id),
constraint co_event foreign key (co_event) references events(ev_id)
);

create table participants (
pa_user int not null,
pa_event int not null,
primary key (pa_user, pa_event),
constraint fk_participants_users foreign key (pa_user) references users(us_id),
constraint fk_participants_events foreign key (pa_event) references events(ev_id)
);

CREATE USER 'user'@'%' IDENTIFIED BY 'Cool2026';

GRANT SELECT, UPDATE, DELETE, INSERT ON eventhub.* TO 'user'@'%';

FLUSH PRIVILEGES;