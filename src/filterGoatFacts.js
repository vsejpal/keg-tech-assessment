/**
 * filterGoatFacts - Filters goat facts based on word and index
 */
export const filterGoatFacts = facts => {
  const filter_word = document.getElementById('ftr-word').value.trim();
  const filter_index = document.getElementById('ftr-index').value;
  
  if (!filter_word.trim() || filter_word.split(' ').length > 1 || !filter_index.trim() || Number(filter_index) < 0) {
    return facts;
  }
  
  let match_html = true; // TODO: add a checkbox to the form to toggle this
  const match_word = match_html ? filter_word : htmlEncode(filter_word);

  facts.data = facts.data.filter(fact => doesMatchFilter(fact, match_word, filter_index));
  return facts;
}

const htmlEncode = input => {
  return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
}

const doesMatchFilter  = (fact, match_word, filter_index) => {
  const fact_words = fact.toLowerCase().split(' ');
  return fact_words.indexOf(match_word.toLowerCase()) == filter_index
}
