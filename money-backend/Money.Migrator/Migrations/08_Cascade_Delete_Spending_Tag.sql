alter table spending_tag
drop constraint fk_spendings_tags_spending,
add constraint fk_spendings_tags_spending foreign key (spendings_id) references spendings (id) on delete cascade;
