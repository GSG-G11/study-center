BEGIN;
drop table if exists courses, students ;
create table courses (
    course_id serial primary key,
    course_name varchar(100) not null,
    course_hour integer not null
);

create table students (
    student_id serial primary key,
    student_name varchar(50) not null,
    student_email varchar(255) not null,
    student_phone integer not null,
    course_id integer  references courses(course_id) 
);

insert into courses (course_name,course_hour) values 
('Graphic Desig', 50),
('Laravel', 60),
('front end', 80),
('ICDL', 20),
('React js', 70);

insert into students (student_name,student_email,student_phone,course_id) values 
('israa', 'israa@gmail.com',0590000000,5),
('alaa', 'alaa@gmail.com',0590000000,3),
('hamdi', 'hamdi@gmail.com',0590000000,2),
('baha', 'baha@gmail.com',0590000000,1),
('haya', 'haya@gmail.com',0590000000,1),
('israa', 'israa@gmail.com',0590000000,4),
('isaam', 'isaam@gmail.com',0590000000,3);

COMMIT;