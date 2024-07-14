export default async function handler(req, res) {
  const { page, size } = req.query;
  const orgId = process.env.ORGANISATION_ID;
  const apiKey = process.env.TIMBU_PUBLIC_API_KEY;
  const appId = process.env.TIMBU_APP_ID;

  const response = await fetch(
    `https://api.timbu.cloud/products?organization_id=${orgId}&reverse_sort=false&page=${page}&size=${size}&Appid=${appId}&Apikey=${apiKey}`
  );
  const data = await response.json();

  res.status(200).json(data);
}
