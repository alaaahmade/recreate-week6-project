BEGIN;

DROP TABLE IF EXISTS products, catogry CASCADE;

CREATE TABLE catogry (
    id SERIAL PRIMARY KEY,
    catogrys VARCHAR(100) NOT NULL
);
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    img text NOT NULL,
    catogry_id INTEGER NOT NULL REFERENCES catogry(id) ON DELETE CASCADE ON UPDATE CASCADE,
    name VARCHAR(50) NOT NULL,
    discreption TEXT ,
    price INTEGER NOT NULL
);


INSERT INTO catogry (catogrys) VALUES 
('phone'),
('tv'),
('headphone');

INSERT INTO products (img, catogry_id, name,discreption ,price) VALUES
('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204',
    1,
    'IPhone',
    'This Is ** <br>This Is ** <br>This Is ** <br>  ', 500);

INSERT INTO products (img, catogry_id, name,discreption ,price) VALUES
(
    'https://images.samsung.com/is/image/samsung/ps-ru7300-ue55ru7300uxmi-frontblack-241062844?$650_519_PNG$',
    2,
    'Samsung',
    'This Is ** <br>This Is ** <br>This Is ** <br>  ',
    500
);
INSERT INTO products (img, catogry_id, name,discreption ,price) VALUES
(
    'https://images.samsung.com/is/image/samsung/ps-ru7300-ue55ru7300uxmi-frontblack-241062844?$650_519_PNG$',
    3,
    'FU555',
    'This Is ** <br>This Is ** <br>This Is ** <br>  ',
    500
);


COMMIT;
 
