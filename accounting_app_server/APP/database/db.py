import os
from dotenv import load_dotenv
import psycopg2

load_dotenv()

DATA_BASE_URL = os.getenv("DATA_BASE_URL")
    

def create_user_table():
    try:
        conn = psycopg2.connect(DATA_BASE_URL)
        print("Connected successfully")

        cur = conn.cursor()

        cur.execute("""
            CREATE TABLE "user" (
                id INT PRIMARY KEY,
                name VARCHAR(50),
                email VARCHAR(50) UNIQUE,
                contact INT,
                password VARCHAR(20),
                country VARCHAR(20),
            );
        """)
        conn.commit()
        print("database created successfully")

    except psycopg2.Error as e:
        print("Error while creating the table:", e)

    finally:
        if 'cur' in locals():
            cur.close()
        if 'conn' in locals():
            conn.close()

def create_user(id, name, email, age, gender):
    try:
        conn = psycopg2.connect(DATA_BASE_URL)

        cur = conn.cursor()

        cur.execute("""
            INSERT INTO "user" (id, name, email, age, gender)
            VALUES (%s, %s, %s, %s, %s);
        """, (id, name, email, age, gender))

        conn.commit()

    except psycopg2.Error as e:
        print("Error while creating the table:", e)

    finally:
        if 'cur' in locals():
            cur.close()
        if 'conn' in locals():
            conn.close()