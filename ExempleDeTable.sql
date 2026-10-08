
/*dans la table user*/
INSERT INTO users (us_id, us_username, us_password, us_email) VALUES
(1, 'alice', '$2b$10$yikmQ2i9JecKdy7Dc29ms.GC6GdgIzFLd3MLLdN9Q2l9K8pPeU6Au', 'alice@example.test'),
(2, 'bruno', '$2b$10$yikmQ2i9JecKdy7Dc29ms.GC6GdgIzFLd3MLLdN9Q2l9K8pPeU6Au', 'bruno@example.test'),
(3, 'chloe', '$2b$10$yikmQ2i9JecKdy7Dc29ms.GC6GdgIzFLd3MLLdN9Q2l9K8pPeU6Au', 'chloe@example.test'),
(4, 'david', '$2b$10$yikmQ2i9JecKdy7Dc29ms.GC6GdgIzFLd3MLLdN9Q2l9K8pPeU6Au', 'david@example.test');


/*dans la table events*/
INSERT INTO events (ev_id, ev_title, ev_description, ev_date, ev_location, ev_owner) VALUES
(1, 'Atelier Node.js', 'Introduction à Express et JWT', '2026-10-08', 'Salle B12', 1),
(2, 'Organize the reading club', 'Choose a date and reserve the meeting room.', '2026-10-20', 'Salle B13', 2);

