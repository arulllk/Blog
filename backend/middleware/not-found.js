const notFound = (req,res) => res.status(404).send('Router does not exist');

module.exports = notFound;