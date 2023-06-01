-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping (
	id SERIAL PRIMARY KEY,
	name varchar(100),
	quantity int,
	unit varchar (20),
	purchase_status BOOLEAN DEFAULT FALSE
);
INSERT INTO shopping ("name", "quantity", "unit", "purchase_status") 
VALUES ('cereal', '1', 'box', 'FALSE'), ('milk', '2', 'gallons', 'FALSE'), ('juice', '3', 'gallons', 'FALSE');