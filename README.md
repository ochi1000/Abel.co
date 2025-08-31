# Abel.co

This project provides a simple Django back end and static front end for an online shop.

## Project structure

- `backend/` – Django project containing the `shop` app.
- `frontend/` – Static HTML, CSS and JavaScript for the client interface.
- `requirements.txt` – Python dependencies for the back end.

## Prerequisites

- Python 3.11+
- `pip` for managing Python packages

## Installation and setup

1. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
2. **Prepare the database**
   ```bash
   python backend/manage.py migrate
   ```
3. **Run the development server**
   ```bash
   python backend/manage.py runserver
   ```
   The API will be available at `http://127.0.0.1:8000/`.

4. **Run tests (optional)**
   ```bash
   python backend/manage.py test shop
   ```

## Frontend

The front end is static and can be opened directly in a browser. For local development, you can serve it using a simple HTTP server:

```bash
cd frontend
python -m http.server 8001
```
Then visit `http://127.0.0.1:8001/index.html` in your browser.

