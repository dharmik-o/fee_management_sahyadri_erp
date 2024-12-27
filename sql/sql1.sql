create table student(
	name varchar(20),
    usn varchar(10) primary key
);

create table placement_skill(
    usn varchar(10) primary key ,
    placement_fee_status varchar(4) CHECK(placement_fee_status = "paid" OR placement_fee_status = "due"),
    skilllab_fee_status varchar(4) CHECK(skilllab_fee_status = "paid" OR skilllab_fee_status = "due"),
    FOREIGN  key (usn )references student(usn)
);

create table admission_mode(
	id int primary key ,
    admission_mode varchar(10)
);

create table tution(
	usn varchar(10) primary key ,
    admission_mode_id int,
    amount int,
    fee_paid int default 0,
    FOREIGN  key (admission_mode_id)references admission_mode(id),
    FOREIGN  key (usn)references student(usn)
);

create table exam(
	usn varchar(10) primary key,
    fee_payment_status varchar(10) CHECK(fee_payment_status = "paid" OR fee_payment_status = "due"),
    FOREIGN  key (usn)references student(usn)
);

create table admin_users(
	admin_id varchar(10) primary key,
    admin_name varchar(20)
);