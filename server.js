// server.js
// Movie Collection Display API using Node.js + Express
// Serves static frontend from ./public and provides 3 GET endpoints

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// --- In-memory movie data (at least 6 movies, 3+ genres, classics before 2000) ---
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    isClassic: true,
    director: "Frank Darabont"
  },
  {
    id: 2,
    title: "The Matrix",
    genre: "Sci-Fi",
    releaseYear: 1999,
    isClassic: true,
    director: "The Wachowskis"
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    isClassic: false,
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    isClassic: true,
    director: "Quentin Tarantino"
  },
  {
    id: 5,
    title: "Mad Max: Fury Road",
    genre: "Action",
    releaseYear: 2015,
    isClassic: false,
    director: "George Miller"
  },
  {
    id: 6,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    releaseYear: 2014,
    isClassic: false,
    director: "Wes Anderson"
  },
  {
    id: 7,
    title: "Se7en",
    genre: "Thriller",
    releaseYear: 1995,
    isClassic: true,
    director: "David Fincher"
  }
];

// --- Middleware to serve static files from /public ---
app.use(express.static(path.join(__dirname, 'public')));

// --- API Endpoints ---

// GET /movies - return all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// GET /movies/classics - return only classic movies (isClassic === true)
app.get('/movies/classics', (req, res) => {
  const classics = movies.filter(m => m.isClassic === true);
  res.json(classics);
});

// GET /movies/genres - return unique genres and counts
app.get('/movies/genres', (req, res) => {
  // reduce into a map { genreName: count }
  const counts = movies.reduce((acc, m) => {
    acc[m.genre] = (acc[m.genre] || 0) + 1;
    return acc;
  }, {});
  // transform to desired array format
  const genres = Object.keys(counts).map(name => ({
    name,
    movieCount: counts[name]
  }));
  res.json({ genres });
});

// Fallback for other API routes (optional)
app.use((req, res, next) => {
  // If request wants JSON and not matched, return 404 JSON; otherwise let static serve index.html
  if (req.path.startsWith('/movies')) {
    return res.status(404).json({ error: 'Not found' });
  }
  next();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}. Open http://localhost:${PORT}`);
});
