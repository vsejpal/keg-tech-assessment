/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
export const addGoatFacts = (facts = []) => {
  // console.error(`Step 5. Add Goat Facts to the DOM!`)
  facts = ["fact 1", "fact 2"]
  console.log("facts")
  console.log(facts)
  var ul = document.getElementById('goat-facts-list');
  ul.innerHTML = "";
  facts.forEach((fact) => {
   let li =  document.createElement("li");
   li.innerText = fact;
   ul.appendChild(li);
  });
}
