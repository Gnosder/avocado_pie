from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base

app = Flask(__name__ )
# app = Flask(__name__, template_folder='../templates')
app.config.from_pyfile('config.py')
db = SQLAlchemy()
db.init_app(app)
db.Model = automap_base(db.Model)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/avocadoData', methods= ['GET'])
def avocado():
    db.Model.prepare(db.engine, reflect=True)
    print(db.Model.classes.keys()) 
    AvocadoPrices = db.Model.classes.avocado_prices
    DataQuery = AvocadoPrices.query.all()
    DataListDict = [{"Date": q.avodate, "Average_price": q.averageprice,  "Total_volume": q.total_volume,
     "PLU4046": q.avo4046, "PLU4225": q.avo4225, "PLU4770": q.avo4770, 
     "Total_bags": q.total_bags, "Small_bags": q.small_bags, "Larg_bags": q.largebags,
      "XLarge_Bags": q.xlarge_bags, "Type": q.type, "Year": q.year,
       "Region": q.region} for q in DataQuery]
        
    return jsonify(DataListDict)
   
# @app.route('/dataByRegion')
# def region():
#     db.Model.prepare(db.engine, reflect=True)
#     print(db.Model.classes.keys()) 
#     AvocadoPrices = db.Model.classes.avocado_prices
#     DataQuery = db.Model.query(AvocadoPrices.region, count(AvocadoPrices.region)).group_by(AvocadoPrices.region).all()
   
    # return ("hello")
if __name__ == '__main__':
    app.run(debug=True)
