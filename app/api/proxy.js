// export default async function handler(req, res) {
//   const { page, size } = req.query;
//   const orgId = process.env.ORGANISATION_ID;
//   const apiKey = process.env.TIMBU_PUBLIC_API_KEY;
//   const appId = process.env.TIMBU_APP_ID;

//   const response = await fetch(
//     `https://api.timbu.cloud/products?organization_id=${orgId}&reverse_sort=false&page=${page}&size=${size}&appId=${appId}&apiKey=${apiKey}`
//   );
//   const data = await response.json();

//   res.status(200).json(data);
// }

export default async function handler(req, res) {
  const { query } = req;

  const primaryUrl = new URL(
    "https://timbu-get-all-products.reavdev.workers.dev/"
  );
  Object.keys(query).forEach((key) =>
    primaryUrl.searchParams.append(key, query[key])
  );

  const backupUrl = new URL("https://api.timbu.cloud/products");
  Object.keys(query).forEach((key) =>
    backupUrl.searchParams.append(key, query[key])
  );

  try {
    const response = await fetch(primaryUrl.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Primary API request failed with status ${response.status}`
      );
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Primary API request failed, trying backup:", error);

    try {
      const backupResponse = await fetch(backupUrl.toString(), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!backupResponse.ok) {
        throw new Error(
          `Backup API request failed with status ${backupResponse.status}`
        );
      }

      const backupData = await backupResponse.json();
      res.status(200).json(backupData);
    } catch (backupError) {
      console.error("Backup API request also failed:", backupError);
      res.status(500).json({
        error: "Failed to fetch data from both primary and backup APIs",
      });
    }
  }
}
