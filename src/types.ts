export interface Ingredient {
  id: string;
  nom: string;
  quantite: number;
  unite: string;
}

export interface Recette {
  id: string;
  nom: string;
  ingredients: Ingredient[];
  instructions: string[];
  tempsPreparation: number;
  difficulte: 'Facile' | 'Moyen' | 'Difficile';
  note: number;
  image: string;
}

export interface SubstitutionIngredient {
  original: string;
  substituts: string[];
}