create DATABASE Application_Livraison;

Use Application_livraison;

create Table utilisateur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    email VARCHAR(50),
    type ENUM('client', 'livreur'),
    create_at DATETIME
);

CREATE TABLE restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    ville VARCHAR(50),
    note_moy DECIMAL(3, 2)
);

CREATE TABLE plats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id BIGINT,
    nom VARCHAR(50),
    prix DECIMAL(10, 2),
    categorie VARCHAR(50),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (id)
);

CREATE TABLE commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id BIGINT,
    livreur_id BIGINT,
    restaurant_id BIGINT,
    total DECIMAL(10, 2),
    statut ENUM(
        'livré',
         'en cours',
          'annulé'
    ),
    created_at DATETIME,
    FOREIGN KEY (client_id) REFERENCES utilisateur (id),
    FOREIGN KEY (livreur_id) REFERENCES utilisateur (id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (id)
);

CREATE TABLE lignes_commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id BIGINT,
    plat_id BIGINT,
    quantite INT,
    prix_unit DECIMAL(10, 2),
    FOREIGN KEY (commande_id) REFERENCES commandes (id),
    FOREIGN KEY (plat_id) REFERENCES plats (id)
);

CREATE TABLE notations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id BIGINT,
    note INT,
    commentaire TEXT,
    FOREIGN KEY (commande_id) REFERENCES commandes (id)
);
-- drop DATABASE Application_livraison;
INSERT INTO
    utilisateur (nom, email, type, create_at)
VALUES (
        'Ali',
        'ali@mail.com',
        'client',
        NOW()
    ),
    (
        'Sara',
        'sara@mail.com',
        'client',
        NOW()
    ),
    (
        'Youssef',
        'youssef@mail.com',
        'client',
        NOW()
    ),
    (
        'Imane',
        'imane@mail.com',
        'client',
        NOW()
    ),
    (
        'Omar',
        'omar@mail.com',
        'client',
        NOW()
    ),
    (
        'Karim',
        'karim@mail.com',
        'livreur',
        NOW()
    ),
    (
        'Hassan',
        'hassan@mail.com',
        'livreur',
        NOW()
    ),
    (
        'Nadia',
        'nadia@mail.com',
        'livreur',
        NOW()
    ),
    (
        'Samir',
        'samir@mail.com',
        'livreur',
        NOW()
    ),
    (
        'Lina',
        'lina@mail.com',
        'livreur',
        NOW()
    );

INSERT INTO
    restaurants (nom, ville, note_moy)
VALUES (
        'Pizza House',
        'Casablanca',
        4.5
    ),
    ('Tacos Time', 'Rabat', 4.2),
    (
        'Burger City',
        'Marrakech',
        4.0
    ),
    ('Sushi World', 'Tanger', 4.8),
    ('Grill Master', 'Agadir', 4.3);

INSERT INTO
    plats (
        restaurant_id,
        nom,
        prix,
        categorie
    )
VALUES (
        1,
        'Pizza Margherita',
        50.00,
        'Pizza'
    ),
    (
        1,
        'Pizza 4 Fromages',
        65.00,
        'Pizza'
    ),
    (
        2,
        'Tacos Poulet',
        40.00,
        'Tacos'
    ),
    (
        2,
        'Tacos Viande',
        45.00,
        'Tacos'
    ),
    (
        3,
        'Burger Classic',
        55.00,
        'Burger'
    ),
    (
        3,
        'Cheese Burger',
        60.00,
        'Burger'
    ),
    (
        4,
        'Sushi Saumon',
        80.00,
        'Sushi'
    ),
    (
        4,
        'Sushi Mix',
        120.00,
        'Sushi'
    ),
    (
        5,
        'Steak Grillé',
        100.00,
        'Grill'
    ),
    (
        5,
        'Poulet Grillé',
        70.00,
        'Grill'
    );

INSERT INTO commandes (client_id, livreur_id, restaurant_id, total, statut, created_at) VALUES
(1, 6, 1, 100.00, 'livré', NOW()),
(2, 7, 2, 80.00, 'en cours', NOW()),
(3, 8, 3, 60.00, 'annulé', NOW()),
(4, 9, 4, 120.00, 'livré', NOW()),
(5, 10, 5, 150.00, 'livré', NOW()),
(1, 6, 2, 90.00, 'en cours', NOW()),
(2, 7, 3, 110.00, 'livré', NOW()),
(3, 8, 4, 200.00, 'annulé', NOW()),
(4, 9, 5, 130.00, 'livré', NOW()),
(5, 10, 1, 75.00, 'en cours', NOW());
INSERT INTO
    lignes_commandes (
        commande_id,
        plat_id,
        quantite,
        prix_unit
    )
VALUES (1, 1, 2, 50.00),
    (2, 3, 2, 40.00),
    (3, 5, 1, 55.00),
    (4, 7, 1, 80.00),
    (5, 9, 1, 100.00),
    (6, 2, 1, 65.00),
    (7, 6, 2, 60.00),
    (8, 8, 1, 120.00),
    (9, 10, 1, 70.00),
    (10, 4, 2, 45.00);

INSERT INTO
    notations (
        commande_id,
        note,
        commentaire
    )
VALUES (1, 5, 'Excellent service'),
    (4, 4, 'Très bon'),
    (5, 5, 'Parfait'),
    (7, 3, 'Moyen'),
    (10, 4, 'Rapide livraison');

-- Q1
select nom, email from utilisateur where type = 'client';
-- Q2
select * from plats 
where prix < 60
order by prix asc;

-- Q3
-- drop table commandes;
select count(id) as nb_commandes from commandes where statut IN  ('livré', 'en cours', 'annulé');

-- Q4
select * from restaurants order by note_moy desc limit 3;

-- Q5
select SUM(total)  ,AVG(total)   from commandes  where statut = 'annulé' ;

-- Q6
select * from plats WHERE nom LIKE 'Poulet%';

-- Q7

select u.nom ,c.total from utilisateur u inner join commandes c on u.id=c.client_id;

-- Q8
select r.nom ,count(c.id) from restaurants r left join commandes c on r.id=c.restaurant_id  group by r.nom;

-- Q9
select cl.nom as client ,l.nom as livreur,r.nom as restaurant,c.statut,c.total,c.created_at 
from utilisateur cl join commandes c
 on cl.id=c.client_id
  join utilisateur l 
  on l.id=c.livreur_id
  join restaurants r on r.id = c.restaurant_id;