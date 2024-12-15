
const Resistance = require("../models/Resistance");

module.exports = {
  createResistance: async (req, res) => {
    const { name, weight, sets, reps, date } = req.body;

    if (!name || !weight || !sets || !reps || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const resistance = await Resistance.create({
        name,
        weight,
        sets,
        reps,
        date,
      });

      return res.status(201).json({
        message: "Resistance exercise created successfully",
        resistance,
      });
    } catch (error) {
      console.error("Error creating resistance exercise:", error);
      return res.status(500).json({ error: "Failed to create resistance exercise" });
    }
  },
  

  getResistanceById: async (req, res) => {
    const { id } = req.params;

    try {
      const resistance = await Resistance.findById(id);

      if (!resistance) {
        return res.status(404).json({ error: "Resistance not found" });
      }

      return res.json(resistance);
    } catch (error) {
      console.error("Error fetching resistance exercise:", error);
      return res.status(500).json({ error: "Failed to fetch resistance exercise" });
    }
  },

  deleteResistance: async (req, res) => {
    const { id } = req.params;

    try {
      const resistance = await Resistance.findByIdAndDelete(id);

      if (!resistance) {
        return res.status(404).json({ error: "Resistance not found" });
      }

      return res.json({ message: "Resistance exercise deleted successfully" });
    } catch (error) {
      console.error("Error deleting resistance exercise:", error);
      return res.status(500).json({ error: "Failed to delete resistance exercise" });
    }
  },
};
