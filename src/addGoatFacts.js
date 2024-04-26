/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
export const addGoatFacts = (facts = []) => {
  // console.error(`Step 5. Add Goat Facts to the DOM!`)
  var ul = document.getElementById('goat-facts-list');
  ul.innerHTML = "";
  facts.data.forEach((fact) => {
   let li =  document.createElement("li");
   li.innerHTML = fact;
   ul.appendChild(li);
  });
}
