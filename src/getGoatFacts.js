/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */
export const getGoatFacts = async () => {
  const response = await fetch('http://localhost:5005/goats/', 
    {
      method: 'GET'
    }
  );
  if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
  const data = await response.json();
  // put data in goat-facts, so we do not call the api for filtering on the client-side.
  localStorage.setItem("goat-facts", JSON.stringify(data))
  return data;
}
