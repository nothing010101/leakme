module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRFToken, X-Requested-With');
  if (req.method === 'OPTIONS') return res.status(200).end();
  res.status(200).json({ ok: false, error: 'Login not available in static mode' });
};
