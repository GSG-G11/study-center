const { join } = require('path');

const nextPAge = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', 'public', 'html', 'app.html'));
};

module.exports = nextPAge;
