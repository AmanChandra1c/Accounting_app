import os
from dotenv import load_dotenv
import psycopg2

load_dotenv()

DATA_BASE_URL = os.getenv("DATA_BASE_URL")

def create_user(name, email, password, contact, country, account_type):
    try:
        conn = psycopg2.connect(DATA_BASE_URL)

        cur = conn.cursor()

        cur.execute("""
            INSERT INTO "user" (name, email, password, contact, country, account_type)
            VALUES (%s, %s, %s, %s, %s, %s);
        """, (name, email, password, contact, country, account_type))

        conn.commit()

    except psycopg2.Error as e:
        print("Error while creating the table:", e)

    finally:
        if 'cur' in locals():
            cur.close()
        if 'conn' in locals():
            conn.close()

def create_user_table():
    try:
        conn = psycopg2.connect(DATA_BASE_URL)
        print("Connected successfully")

        cur = conn.cursor()

        cur.execute("""
            CREATE TABLE "user" (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                name VARCHAR(50),
                email VARCHAR(50) UNIQUE,
                contact BIGINT,
                password VARCHAR(20),
                country VARCHAR(20),
                account_type TEXT[]
            )
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