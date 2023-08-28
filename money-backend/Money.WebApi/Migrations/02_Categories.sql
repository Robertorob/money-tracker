create sequence categories_seq;

create table categories
(
  id bigint not null default nextval('categories_seq'),
  name text,
  primary key (id)
);

delete from spendings;

ALTER TABLE spendings
    ADD CONSTRAINT fk_spendings_categories FOREIGN KEY (category_id) REFERENCES categories (id);