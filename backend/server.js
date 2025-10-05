import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// Example route
app.get("/api/swiggy", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1090805&lng=72.8720171&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Referer": "https://www.swiggy.com/"
        }
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Route 2: For restaurant menu
app.get("/api/menu", async (req, res) => {
  const { id } = req.query; // example: /api/menu?id=12345

  // Validation
  if (!id) {
    return res.status(400).json({ error: "Restaurant id is required" });
  }

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1090805&lng=72.8720171&restaurantId=${id}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Referer": "https://www.swiggy.com/"
        }
      }
    );

    // Check if API response is ok
    if (!response.ok) {
      return res.status(500).json({ error: "Swiggy API request failed" });
    }

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.error("Error fetching menu data:", err);
    return res.status(500).json({ error: "Failed to fetch menu data" });
  }
});


app.listen(5000, () => console.log(`http://localhost:5000`));
