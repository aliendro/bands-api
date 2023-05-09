import dotenv from 'dotenv';
import express from "express";
import albums from "./json/albums.json" assert { type: "json" };
import bands from "./json/bands.json" assert { type: "json" };
import tracks from "./json/tracks.json" assert { type: "json" };

dotenv.config();
const app = express();

const albumsMap = new Map(albums);
const bandsMap = new Map(bands);
const tracksMap = new Map(tracks);

app.get("/api/albums", (_, res) => {
  return res.json([...albumsMap.values()]);
});

app.get("/api/albums/:id", (req, res) => {
  return res.json(albumsMap.get(req.params.id));
});

app.get("/api/bands", (_, res) => {
  return res.json([...bandsMap.values()]);
});

app.get("/api/bands/:id", (req, res) => {
  return res.json(bandsMap.get(req.params.id));
});

app.get("/api/tracks", (_, res) => {
  return res.json([...tracksMap.values()]);
});

app.get("/api/tracks/:id", (req, res) => {
  return res.json(tracksMap.get(req.params.id));
});

app.listen(process.env.PORT, () => {
  console.log(`[debug]: API is running on port ${process.env.PORT}...`);
})
