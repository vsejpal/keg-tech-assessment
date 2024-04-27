const { doIt } = require('@keg-hub/jsutils')
const factList = require('./goatFacts.json')

const getRandomFact = () => {
  const rand_factList_idx = Math.floor(Math.random() * factList.length)
  return factList[rand_factList_idx]
}

const goatFacts = async () => {
  return doIt(20, global, () => getRandomFact())
}

module.exports = {
  goatFacts,
}
