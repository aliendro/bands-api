const dotenv = require('dotenv');
const express = require("express");
const albums = require("../json/albums.json");
const bands = require("../json/bands.json");
const tracks = require("../json/tracks.json");

dotenv.config();
const app = express();

const albumsMap = new Map(albums);
const bandsMap = new Map(bands);
const tracksMap = new Map(tracks);

app.get("/api/albums", (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=9999, stale-while-revalidate');
  return res.json([...albumsMap.values()]);
});

app.get("/api/albums/:id", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=9999, stale-while-revalidate');
  return res.json(albumsMap.get(req.params.id));
});

app.get("/api/bands", (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=9999, stale-while-revalidate');
  return res.json([...bandsMap.values()]);
});

app.get("/api/bands/:id", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=9999, stale-while-revalidate');
  return res.json(bandsMap.get(req.params.id));
});

app.get("/api/tracks", (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=9999, stale-while-revalidate');
  return res.json([...tracksMap.values()]);
});

app.get("/api/tracks/:id", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=9999, stale-while-revalidate');
  return res.json(tracksMap.get(req.params.id));
});

app.listen(process.env.PORT, () => {
  console.log(`API is running on port ${process.env.PORT}...`);
})

module.exports = app;