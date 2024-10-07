const SimCard = require('../models/SimCard');

exports.activateSim = async (req, res) => {
  const { simNumber } = req.body;
  try {
    const sim = await SimCard.findOne({ simNumber });
    if (!sim) return res.status(404).json({ msg: 'SIM card not found' });
    if (sim.status === 'active') return res.status(400).json({ msg: 'SIM is already active' });

    sim.status = 'active';
    sim.activationDate = new Date();
    await sim.save();
    res.json({ msg: 'SIM activated successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addSimCard = async (req, res) => {
  const { simNumber, phoneNumber } = req.body;

  try {
   
    let sim = await SimCard.findOne({ simNumber });
    if (sim) {
      return res.status(400).json({ msg: 'SIM card already exists' });
    }

    sim = new SimCard({
      simNumber,
      phoneNumber,
      status: 'inactive', 
    });

    await sim.save();
    res.status(201).json({ msg: 'SIM card added successfully', sim });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};


exports.deactivateSim = async (req, res) => {
  const { simNumber } = req.body;
  try {
    const sim = await SimCard.findOne({ simNumber });
    if (!sim) return res.status(404).json({ msg: 'SIM card not found' });
    if (sim.status === 'inactive') return res.status(400).json({ msg: 'SIM is already inactive' });

    sim.status = 'inactive';
    await sim.save();
    res.json({ msg: 'SIM deactivated successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getSimDetails = async (req, res) => {
  const { simNumber } = req.params;
  try {
    const sim = await SimCard.findOne({ simNumber });
    if (!sim) return res.status(404).json({ msg: 'SIM card not found' });

    res.json(sim);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
