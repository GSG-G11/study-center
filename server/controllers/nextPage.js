const { join } = require('path');

const nextPAge = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'html', 'app.html'));
};

module.exports = nextPAge;
