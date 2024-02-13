ALTER TABLE spendings
    DROP CONSTRAINT fk_spendings_categories;

ALTER TABLE spendings 
RENAME category_id TO tag_id;

ALTER TABLE categories RENAME TO tags;

ALTER TABLE spendings
    ADD CONSTRAINT fk_spendings_tags FOREIGN KEY (tag_id) REFERENCES tags (id);
