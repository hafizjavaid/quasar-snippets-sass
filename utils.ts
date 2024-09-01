import type { SingleComponent, Subcategory } from "./types";

export function getRandomElementsFromSubcategories(obj: SingleComponent, n: number): Subcategory[] {
    // Flatten all subcategories into a single array
    const allSubcategories = obj.categories.flatMap(category => category.subcategories);
  
    // Shuffle the array and pick the first n elements
    const shuffled = allSubcategories.sort(() => 0.5 - Math.random());
  
    // Return the first n elements
    return shuffled.slice(0, n);
  }