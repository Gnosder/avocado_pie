# Avocado millennials 
Us Millennials LOVE avocados! So we decided to analyze some avocado trends in the U.S. 

# Data information 
The data was compiled into a csv file from kaggle https://www.kaggle.com/neuromusic/avocado-prices which was downloaded from the Hass avocado board website https://hassavocadoboard.com/happenings/. 
#      METHODS
1. Cleaned the data using pandas in jupyter notebook.
2. Used PostgresSQL as our database.
3. Used FlaskSQLAlchemy to build an API. 
4. Used JavaScript, HTML, and CSS in order to create are visualizations.

#  VIZUALIZATIONS 
 # D3. Scatterplot:
 The D3.Scatter plot allows you to transition between Small/Medium Hass Avocados sold, and Large Hass Avocados sold on the X axis and displays the Average Prices for these avocados on the y axis. Each circle on the scatter plot displays the amount of avocados sold and their locations . Using this scatterplot we can see which regions are more/less expensive to shop for avocados and view a relationship between price and amount of avocados sold. 
 # Chart 
 The Bar Chart displays the number of avocados sold in the years of 2015, 2016,2017, and 2018. Each colored bar represents the size of an avocado. Using this vizualization we can see the relationships between the the amount of avocados sold v.s the size of the avocado. The information we can gather from this data is that large Hass avocados
 # JSChart
 Chart.js (https://www.chartjs.org/) is a JavaScript charting library which uses d3 (https://d3js.org/). This graph was made using Chart.js, titled "Hass Avocado Unit Sales Volume By Average Unit Sales Price in $USD, Year: 2015-2018. This graph shows three datasets of the data: Total Volume of all Hass avocados sold, total volume of small Hass avocados sold, and total volume of large Hass avocados sold. These datasets can be toggled to display against other datasets and the x and y ticks and scales will change dynamically. The data shows that at every price point the large sized Hass avocados sell for more than the small. The datasets show three major price points with similar sales volumes: $1.00, $1.25, $1.60. Prices vary based on world conditions, but the data shows paying over $1 for an avocado is not frugal.

# Project File Structure
index.html
assets/data -- All data should go here, .csv files, database files
assets/js -- All javascript files should go here
assets/css -- All css files should go here
flask/ -- Flask app and index.html should go here 
