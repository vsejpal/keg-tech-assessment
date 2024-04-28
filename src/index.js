import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
export const onGetGoatFacts = async () => {
  const facts = await getGoatFacts()
  const filteredFacts = filterGoatFacts(facts)
  addGoatFacts(filteredFacts)
}

export const onFilterGoatFacts = () => {
  const facts =  JSON.parse(localStorage.getItem('goat-facts'));
  const filteredFacts = filterGoatFacts(facts)
  addGoatFacts(filteredFacts)
}

;(async () => {
  await onGetGoatFacts()
})()
