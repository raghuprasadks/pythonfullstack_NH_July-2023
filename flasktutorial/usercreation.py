import sqlite3

def connect_to_db():
    conn = sqlite3.connect('database.db')
    return conn


def create_db_table():
    try:
        conn = connect_to_db()
        #conn.execute('''DROP TABLE users''')
        conn.execute('''
            CREATE TABLE users (
                user_id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                address TEXT NOT NULL,
                country TEXT NOT NULL
            );
        ''')

        conn.commit()
        print("User table created successfully")
    except:
        print("User table creation failed - Maybe table")
    finally:
        conn.close()

#create_db_table()


def get_user_by_id(user_id):
    user = {}
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE user_id = ?", (user_id,))
        row = cur.fetchone()

        # convert row object to dictionary
        user["user_id"] = row["user_id"]
        user["name"] = row["name"]
        user["email"] = row["email"]
        user["phone"] = row["phone"]
        user["address"] = row["address"]
        user["country"] = row["country"]
    except:
        user = {}

    return user


def insert_user(user):
    inserted_user = {}
    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("INSERT INTO users (name, email, phone, address, country) VALUES (?, ?, ?, ?, ?)", (user['name'], user['email'], user['phone'], user['address'], user['country']) )
        conn.commit()
        inserted_user = get_user_by_id(cur.lastrowid)
    except:
        conn().rollback()

    finally:
        conn.close()

    return inserted_user
users = []
user0 = {
    "name": "Charles Effiong",
    "email": "charles@gamil.com",
    "phone": "067765665656",
    "address": "Lui Str, Innsbruck",
    "country": "Austria"
}

user1 = {
    "name": "Sam Adebanjo",
    "email": "samadebanjo@gamil.com",
    "phone": "098765465",
    "address": "Sam Str, Vienna",
    "country": "Austria"
}

user2 = {
    "name": "John Doe",
    "email": "johndoe@gamil.com",
    "phone": "067765665656",
    "address": "John Str, Linz",
    "country": "Austria"
}

user3 = {
    "name": "Mary James",
    "email": "maryjames@gamil.com",
    "phone": "09878766676",
    "address": "AYZ Str, New york",
    "country": "United states"
}

users.append(user0)
users.append(user1)
users.append(user2)
users.append(user3)
"""
"""
for i in users:
    print(insert_user(i))

