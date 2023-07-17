create sequence spendings_seq;

create table spendings
(
  id bigint not null default nextval('spendings_seq'),
  cost double precision,
  comment text,
  category_id bigint,
  primary key (id)
)