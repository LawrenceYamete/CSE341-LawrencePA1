const awesomeFunction = (req, res, next) => {
    res.json('Valerie Roque');
}; 

const returnAnotherPerson = (req, res, next) => {
    res.json('Lawrence');
}; 

module.exports = { awesomeFunction, returnAnotherPerson };