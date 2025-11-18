# Movie Collection Display API

## About the Collection
This is a small curated movie collection containing a mix of classic and recent films across different genres such as Drama, Sci-Fi, Action, Comedy, Crime, and Thriller. The collection demonstrates filtering (classic movies) and grouping by genre.

## Project Description
A simple Node.js + Express API that serves movie data and a static frontend to browse it. The frontend uses `fetch()` to call the API endpoints and display results dynamically.

**Technologies:** Node.js, Express, HTML, CSS, JavaScript

## Genres Available
- Drama
- Sci-Fi
- Crime
- Action
- Comedy
- Thriller

## Project Structure
movie-collection-api/
├─ node_modules/
├─ public/
│ ├─ index.html
│ └─ styles.css
├─ .gitignore
├─ package.json
├─ README.md
└─ server.js

bash
Copy code

## API Documentation

### 1. Get all movies
- **Endpoint:** `/movies`
- **Method:** GET
- **Description:** Returns an array of all movie objects.
- **Sample Response:**
```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  },
  ...
]
2. Get classic movies
Endpoint: /movies/classics

Method: GET

Description: Returns movies where isClassic is true.

Sample Response:

json
Copy code
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
3. Get genres with counts
Endpoint: /movies/genres

Method: GET

Description: Returns an object with a genres array. Each element contains name and movieCount.

Sample Response:

json
Copy code
{
  "genres": [
    { "name": "Drama", "movieCount": 1 },
    { "name": "Sci-Fi", "movieCount": 2 },
    { "name": "Action", "movieCount": 1 }
  ]
}
Installation & Setup Instructions
Clone the repository:

bash
Copy code
git clone <YOUR_REPO_URL>
cd movie-collection-api
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
The server will start on port 3000.

Access:

Frontend: http://localhost:3000 (serves public/index.html)

API endpoints:

http://localhost:3000/movies

http://localhost:3000/movies/classics

http://localhost:3000/movies/genres

Features
GET endpoints for all movies, classic movies, and genres with counts

Simple frontend using fetch() and dynamic DOM rendering

Visual badge for classic movies

In-memory data array (no DB required)

GitHub Repository Link
Replace with your repo URL: 

Author
Harshitha C J


---

# How to run (quick summary)

1. Put all files above into a folder (e.g., `movie-collection-api`).
2. Run:
```bash
npm install
npm start
Open http://localhost:3000 in your browser.

Test:

/movies → show all movies

/movies/classics → only classics

/movies/genres → genre counts

Use buttons on the frontend to fetch and display.