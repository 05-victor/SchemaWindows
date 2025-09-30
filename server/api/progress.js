// Vercel serverless function for MyShop Roadmap progress
// Using JSONBin.io as external database

const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID;
const JSONBIN_BASE_URL = "https://api.jsonbin.io/v3";

// Default progress data structure
const defaultProgressData = {
  completedTasks: {},
  expandedPhases: {},
  selectedView: "gantt",
  lastUpdated: new Date().toISOString(),
  updateCount: 0,
};

// Helper function to make JSONBin API calls
async function jsonBinRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${JSONBIN_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": JSONBIN_API_KEY,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`JSONBin API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("JSONBin request failed:", error);
    throw error;
  }
}

// Read progress data from JSONBin
async function readProgressData() {
  try {
    if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
      console.log("JSONBin credentials not found, using default data");
      return defaultProgressData;
    }

    const result = await jsonBinRequest(`/b/${JSONBIN_BIN_ID}/latest`);
    return result.record || defaultProgressData;
  } catch (error) {
    console.error("Failed to read from JSONBin:", error);
    return defaultProgressData;
  }
}

// Write progress data to JSONBin
async function writeProgressData(data) {
  try {
    if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
      console.log("JSONBin credentials not found, returning data as-is");
      return data;
    }

    const updatedData = {
      ...data,
      lastUpdated: new Date().toISOString(),
      updateCount: (data.updateCount || 0) + 1,
    };

    await jsonBinRequest(`/b/${JSONBIN_BIN_ID}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
    });

    return updatedData;
  } catch (error) {
    console.error("Failed to write to JSONBin:", error);
    throw error;
  }
}

// Main handler
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    switch (req.method) {
      case "GET":
        // Get current progress data
        const progressData = await readProgressData();
        res.status(200).json({
          success: true,
          data: progressData,
        });
        break;

      case "POST":
        // Save progress data
        const { completedTasks, expandedPhases, selectedView } = req.body;

        const currentData = await readProgressData();
        const newData = {
          ...currentData,
          completedTasks:
            completedTasks !== undefined
              ? completedTasks
              : currentData.completedTasks,
          expandedPhases:
            expandedPhases !== undefined
              ? expandedPhases
              : currentData.expandedPhases,
          selectedView:
            selectedView !== undefined
              ? selectedView
              : currentData.selectedView,
        };

        const savedData = await writeProgressData(newData);

        res.status(200).json({
          success: true,
          data: savedData,
          message: "Progress saved successfully",
        });
        break;

      case "DELETE":
        // Reset all progress
        const resetData = await writeProgressData(defaultProgressData);

        res.status(200).json({
          success: true,
          data: resetData,
          message: "All progress reset successfully",
        });
        break;

      default:
        res.status(405).json({
          success: false,
          error: "Method not allowed",
        });
    }
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message,
    });
  }
}
