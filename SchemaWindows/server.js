// Simple Express server to store shared progress
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, "progress-data.json");

// Middleware
app.use(cors());
app.use(express.json());

// Initialize data file if it doesn't exist
const initializeDataFile = () => {
  if (!fs.existsSync(DATA_FILE)) {
    const initialData = {
      completedTasks: {},
      expandedPhases: {},
      selectedView: "gantt",
      lastUpdated: new Date().toISOString(),
      updateCount: 0,
    };
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
      console.log("📄 Created initial data file:", DATA_FILE);
    } catch (error) {
      console.error("❌ Error creating data file:", error.message);
    }
  }
};

// Helper function to read data
const readData = () => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      initializeDataFile();
    }
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("❌ Error reading data:", error.message);
    return {
      completedTasks: {},
      expandedPhases: {},
      selectedView: "gantt",
      lastUpdated: new Date().toISOString(),
      updateCount: 0,
    };
  }
};

// Helper function to write data
const writeData = (data) => {
  try {
    const updatedData = {
      ...data,
      lastUpdated: new Date().toISOString(),
      updateCount: (data.updateCount || 0) + 1,
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedData, null, 2));
    console.log(`💾 Data saved (update #${updatedData.updateCount})`);
    return updatedData;
  } catch (error) {
    console.error("❌ Error writing data:", error.message);
    throw error;
  }
};

// GET progress data
app.get("/api/progress", (req, res) => {
  try {
    const data = readData();
    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error("❌ GET /api/progress error:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to read progress data",
    });
  }
});

// POST/PUT progress data
app.post("/api/progress", (req, res) => {
  try {
    const { completedTasks, expandedPhases, selectedView } = req.body;

    const currentData = readData();
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
        selectedView !== undefined ? selectedView : currentData.selectedView,
    };

    const savedData = writeData(newData);

    res.json({
      success: true,
      data: savedData,
      message: "Progress saved successfully",
    });
  } catch (error) {
    console.error("❌ POST /api/progress error:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to save progress data",
    });
  }
});

// DELETE all progress (reset)
app.delete("/api/progress", (req, res) => {
  try {
    const resetData = {
      completedTasks: {},
      expandedPhases: {},
      selectedView: "gantt",
      lastUpdated: new Date().toISOString(),
      updateCount: 0,
    };

    const savedData = writeData(resetData);

    res.json({
      success: true,
      data: savedData,
      message: "All progress reset successfully",
    });
  } catch (error) {
    console.error("❌ DELETE /api/progress error:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to reset progress",
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "MyShop Progress Server is running",
    timestamp: new Date().toISOString(),
    dataFile: DATA_FILE,
  });
});

// Initialize data file on startup
initializeDataFile();

// Start server
app.listen(PORT, () => {
  console.log("🚀 MyShop Progress Server running!");
  console.log(`🌐 Server: http://localhost:${PORT}`);
  console.log(`📊 Data file: ${DATA_FILE}`);
  console.log("🔗 API endpoints:");
  console.log(`   GET    /api/progress       - Get current progress`);
  console.log(`   POST   /api/progress       - Save progress`);
  console.log(`   DELETE /api/progress       - Reset all progress`);
  console.log(`   GET    /api/health         - Health check`);
  console.log("");
  console.log("✅ Ready to accept connections!");
});
