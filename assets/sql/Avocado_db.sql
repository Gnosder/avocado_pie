CREATE TABLE Avocado_Prices (
	avodate date NOT NULL,
	AveragePrice FLOAT NOT NULL, 
	Total_Volume FLOAT NOT NULL,
	avo4046 FLOAT NOT NULL, 
	avo4225 FLOAT NOT NULL, 
	avo4770 FLOAT NOT NULL, 
	Total_Bags FLOAT NOT NULL, 
	Small_Bags FLOAT NOT NULL, 
	LargeBags FLOAT NOT NULL, 
	XLarge_Bags FLOAT NOT NULL, 
	type VARCHAR(30) NOT NULL, 
	Year INT NOT NULL,
	region VARCHAR(30) NOT NULL,
	PRIMARY KEY (avodate, region)
)

SELECT * FROM Avocado_Prices



copy Avocado_Prices
from '/tmp/avocado_cleaned.csv'
delimiter ','
CSV HEADER;
