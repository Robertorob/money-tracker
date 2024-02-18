ALTER TABLE spendings
    DROP CONSTRAINT fk_spendings_tags,
    DROP COLUMN tag_id;

create sequence spendings_tags_seq;

create table spendings_tags
(
  id bigint not null default nextval('spendings_tags_seq'),
  spending_id bigint not null,
  tag_id bigint not null,
  primary key (id),
  CONSTRAINT fk_spendings_tags_spending FOREIGN KEY (spending_id) REFERENCES spendings (id),
  CONSTRAINT fk_spendings_tags_tag FOREIGN KEY (tag_id) REFERENCES tags (id),
  UNIQUE (spending_id, tag_id)
);
