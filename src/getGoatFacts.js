/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */
export const getGoatFacts = async () => {
  // console.error(`Step 4. Goat Facts api call!`)
  console.log('getting goat facts ...');
  const response = await fetch('http://localhost:5005/goats/', 
    {
      method: 'GET'
    }
  );
  if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
  const data = await response.json();
  console.log(data);
  return data;
}
