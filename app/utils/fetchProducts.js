export const fetchProducts = async ({
  organization_id,
  reverse_sort,
  page,
  size,
  Appid,
  Apikey,
}) => {
  const url = new URL("/api/proxy", window.location.origin);
  const urlParams = {
    organization_id,
    reverse_sort,
    page,
    size,
    Appid,
    Apikey,
  };

  Object.keys(urlParams).forEach((key) =>
    url.searchParams.append(key, urlParams[key])
  );

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching from proxy API:", error);
    throw error;
  }
};

// export const fetchProducts = async ({
//   organization_id,
//   reverse_sort,
//   page,
//   size,
//   Appid,
//   Apikey,
// }) => {
//   const primaryUrl = new URL(process.env.NEXT_PUBLIC_PRIMARY_API_URL);
//   const backupUrl = new URL(process.env.NEXT_PUBLIC_BACKUP_API_URL);

//   const urlParams = {
//     organization_id,
//     reverse_sort,
//     page,
//     size,
//     Appid,
//     Apikey,
//   };

//   const appendParams = (url, params) => {
//     Object.keys(params).forEach((key) =>
//       url.searchParams.append(key, params[key])
//     );
//   };

//   appendParams(primaryUrl, urlParams);

//   try {
//     const response = await fetch(primaryUrl.toString(), {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       if (response.status === 429) {
//         console.warn("Rate limit exceeded, switching to backup URL.");
//       } else {
//         throw new Error(`Primary URL fetch failed: ${response.statusText}`);
//       }
//     }

//     const data = await response.json();
//     console.log("Primary URL data:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching from primary URL:", error);

//     appendParams(backupUrl, urlParams);

//     try {
//       const response = await fetch(backupUrl.toString(), {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Backup URL fetch failed: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("Backup URL data:", data);
//       return data;
//     } catch (backupError) {
//       console.error("Error fetching from backup URL:", backupError);
//       throw backupError;
//     }
//   }
// };
