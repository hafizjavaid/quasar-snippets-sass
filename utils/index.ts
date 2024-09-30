import type { SingleComponent, Subcategory } from "~/types";

export function getRandomElementsFromSubcategories(obj: SingleComponent, n: number): Subcategory[] {
  // Flatten all subcategories into a single array
  const allSubcategories = obj.categories.flatMap(category => category.subcategories);

  // Shuffle the array and pick the first n elements
  const shuffled = allSubcategories.sort(() => 0.5 - Math.random());

  // Return the first n elements
  return shuffled.slice(0, n).filter(c => c.isPublished);
}

export const handleError = (error: any) => {
  const generalMessage = "An unexpected error occurred";
  let statusCode = 500;
  let statusMessage = "Unexpected error";
  let message = generalMessage;
  let data = undefined;

  console.log(error.response);
  
  if (error.response) {
    statusCode = error.response.status
    statusMessage = error.response.statusText
    data = error.response._data && error.response._data.errors ? error.response._data.errors : undefined
    message = error.response._data && error.response._data.message ? error.response._data.message : generalMessage
    if (error.statusCode === 401 && error.statusMessage === 'Unauthorized') {
      navigateTo('/auth/login');
    }
  }

  return {
    statusCode,
    statusMessage,
    message,
    data
  }

}