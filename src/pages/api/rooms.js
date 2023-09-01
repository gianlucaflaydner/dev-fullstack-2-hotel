import clientPromise from "@/database";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster0");

  console.log("REQ", req);
}
