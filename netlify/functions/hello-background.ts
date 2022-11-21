type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, headers } = req;

  for (let i = 0; i <= 10; i++) {
    console.log(`sleeping ${i}`);
    axios.post("https://en1ta4a0x9c6i.x.pipedream.net", { i, url, headers });
    await sleep(i * 1000);
  }

  await res.status(200).json({ name: "John Doe" });
}
