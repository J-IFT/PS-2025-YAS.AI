import React, { useState } from 'react';
import { PlusCircle, Trash2, ChefHat, Star, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Ingredient, Recette } from './types';
import { recettesDisponibles, substitutions } from './data';

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [nouvelIngredient, setNouvelIngredient] = useState('');
  const [recettesSuggerees, setRecettesSuggerees] = useState<Recette[]>([]);
  const [recetteActive, setRecetteActive] = useState<string | null>(null);

  const ajouterIngredient = () => {
    if (nouvelIngredient.trim()) {
      setIngredients([
        ...ingredients,
        {
          id: Date.now().toString(),
          nom: nouvelIngredient.trim().toLowerCase(),
          quantite: 1,
          unite: 'pièce'
        }
      ]);
      setNouvelIngredient('');
    }
  };

  const supprimerIngredient = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const trouverRecettes = () => {
    const recettesPossibles = recettesDisponibles.filter(recette => {
      const ingredientsNecessaires = recette.ingredients.map(ing => ing.nom.toLowerCase());
      const ingredientsDisponibles = ingredients.map(ing => ing.nom.toLowerCase());
      
      return ingredientsNecessaires.some(ing => 
        ingredientsDisponibles.includes(ing) || 
        substitutions.some(sub => 
          sub.original === ing && 
          sub.substituts.some(substitut => ingredientsDisponibles.includes(substitut))
        )
      );
    });
    
    setRecettesSuggerees(recettesPossibles);
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3">
            <ChefHat size={32} className="text-pink-100" />
            <h1 className="text-4xl font-bold tracking-tight">YAS.AI</h1>
          </div>
          <p className="mt-2 text-pink-100 text-lg">Vous ne savez pas quoi manger ? YASAI est là pour vous aider !</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-xl shadow-md p-6 border border-pink-100">
            <h2 className="text-2xl font-semibold mb-4 text-pink-800">Mes Ingrédients</h2>
            
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={nouvelIngredient}
                onChange={(e) => setNouvelIngredient(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && ajouterIngredient()}
                placeholder="Ajouter un ingrédient"
                className="flex-1 px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button
                onClick={ajouterIngredient}
                className="shrink-0 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center shadow-sm"
              >
                <PlusCircle size={20} className="mr-2" />
                Ajouter
              </button>
            </div>

            <ul className="space-y-2">
              {ingredients.map((ingredient) => (
                <li
                  key={ingredient.id}
                  className="flex items-center justify-between bg-pink-50 px-4 py-2 rounded-lg border border-pink-100"
                >
                  <span className="capitalize text-pink-900">{ingredient.nom}</span>
                  <button
                    onClick={() => supprimerIngredient(ingredient.id)}
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>

            {ingredients.length > 0 && (
              <button
                onClick={trouverRecettes}
                className="mt-6 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all flex items-center justify-center shadow-md transform hover:scale-[1.02]"
              >
                <ChefHat size={20} className="mr-2" />
                Trouver des Recettes
              </button>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md p-6 border border-pink-100">
            <h2 className="text-2xl font-semibold mb-4 text-pink-800">Recettes Suggérées</h2>
            
            {recettesSuggerees.length === 0 ? (
              <div className="text-center py-12">
                <ChefHat size={48} className="mx-auto text-pink-300 mb-4" />
                <p className="text-pink-600 text-lg">
                  Ajoutez des ingrédients et cliquez sur "Trouver des Recettes" pour voir les suggestions
                </p>
              </div>
            ) : (
              <ul className="space-y-2">
                {recettesSuggerees.map((recette) => (
                  <li key={recette.id} className="border border-pink-100 rounded-lg p-4 cursor-pointer bg-pink-50 hover:bg-pink-100" onClick={() => setRecetteActive(recetteActive === recette.id ? null : recette.id)}>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-pink-800">{recette.nom}</span>
                      {recetteActive === recette.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                    {recetteActive === recette.id && (
                      <div className="mt-4">
                        <img src={recette.image} alt={recette.nom} className="w-full h-48 object-cover rounded-lg" />
                        <div className="flex items-center space-x-4 text-pink-600 mb-3">
                          <Clock size={16} className="mr-1" />
                          <span>{recette.tempsPreparation} min</span>
                          <Star size={16} className="mr-1 text-yellow-500" />
                          <span>{recette.note}/5</span>
                          <span className="px-3 py-1 bg-pink-50 rounded-full text-sm border border-pink-100">{recette.difficulte}</span>
                        </div>
                        <h4 className="font-medium text-pink-800">Ingrédients:</h4>
                        <ul className="mt-2 text-pink-700 list-disc pl-5">
                          {recette.ingredients.map((ing, index) => (
                            <li key={index}>{ing.nom} - {ing.quantite} {ing.unite}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
