import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    await client.connect();

    const db = client.db("perpustakaan_9c");
    const collection = db.collection("buku");

    const buku = await collection.find({}).toArray();

    res.status(200).json(buku);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Gagal mengambil data buku"
    });
  }
}
