#!/usr/bin/python
import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS


def connect_to_db():
    conn = sqlite3.connect('database.db')
    return conn

def insert_product(product):
    inserted_product = {}
    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("INSERT INTO product (name, desc, supplier, price) VALUES (?, ?, ?, ?)", (product['name'], product['desc'], product['supplier'], product['price']) )
        conn.commit()
        inserted_product = get_product_by_code(cur.lastrowid)
    except:
        conn().rollback()

    finally:
        conn.close()

    return inserted_product


def get_products():
    products = []
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM product")
        rows = cur.fetchall()

        # convert row objects to dictionary
        for i in rows:
            product = {}
            product["code"] = i["code"]
            product["name"] = i["name"]
            product["desc"] = i["desc"]
            product["supplier"] = i["supplier"]
            product["price"] = i["price"]
            products.append(product)

    except:
        products = []

    return products


def get_product_by_code(product_code):
    product = {}
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM product WHERE code = ?", (product_code,))
        row = cur.fetchone()
        # convert row object to dictionary
        product["code"] = row["code"]
        product["name"] = row["name"]
        product["desc"] = row["desc"]
        product["supplier"] = row["supplier"]
        product["price"] = row["price"]
    except:
        product = {}

    return product


def update_product(product):
    updated_product = {}
    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("UPDATE product SET name = ?, desc = ?, supplier = ?, price = ? WHERE code =?", (product["name"], product["desc"], product["supplier"], product["price"], product["code"],))
        conn.commit()
        #return the product
        updated_product = get_product_by_code(product["code"])

    except:
        conn.rollback()
        updated_product = {}
    finally:
        conn.close()

    return updated_product


def delete_product(product_code):
    message = {}
    try:
        conn = connect_to_db()
        conn.execute("DELETE from product WHERE code = ?", (product_code,))
        conn.commit()
        message["status"] = "Product deleted successfully"
    except:
        conn.rollback()
        message["status"] = "Cannot delete product"
    finally:
        conn.close()

    return message

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/api/product', methods=['GET'])
def api_get_products():
    return jsonify(get_products())

@app.route('/api/product/<product_code>', methods=['GET'])
def api_get_product(product_code):
    return jsonify(get_product_by_code(product_code))

@app.route('/api/product',  methods = ['POST'])
def api_add_product():
    product = request.get_json()
    return jsonify(insert_product(product))

@app.route('/api/product',  methods = ['PUT'])
def api_update_product():
    product = request.get_json()
    return jsonify(update_product(product))

@app.route('/api/product/<product_code>',  methods = ['DELETE'])
def api_delete_product(product_code):
    return jsonify(delete_product(product_code))


if __name__ == "__main__":
    #app.debug = True
    #app.run(debug=True)
    app.run()