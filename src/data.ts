import { Recette, SubstitutionIngredient } from './types';

export const substitutions: SubstitutionIngredient[] = [
  {
    original: 'beurre',
    substituts: ['huile', 'margarine', 'huile de coco']
  },
  {
    original: 'lait',
    substituts: ['lait d\'amande', 'lait de soja', 'lait de coco']
  },
  {
    original: 'oeuf',
    substituts: ['compote de pommes', 'banane écrasée', 'graines de chia']
  },
  {
    original: 'crème fraiche',
    substituts: ['yaourt', 'lait de coco', 'fromage blanc']
  }
];

export const recettesDisponibles: Recette[] = [
  {
    id: '1',
    nom: 'Pâtes à la Carbonara',
    ingredients: [
      { id: '1', nom: 'pâtes', quantite: 500, unite: 'g' },
      { id: '2', nom: 'lardons', quantite: 200, unite: 'g' },
      { id: '3', nom: 'oeuf', quantite: 3, unite: 'pièce' },
      { id: '4', nom: 'parmesan', quantite: 100, unite: 'g' }
    ],
    instructions: [
      'Faire cuire les pâtes dans l\'eau bouillante salée',
      'Faire revenir les lardons',
      'Mélanger les oeufs et le parmesan',
      'Incorporer la préparation aux pâtes'
    ],
    tempsPreparation: 20,
    difficulte: 'Facile',
    note: 4.5,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    nom: 'Quiche aux Légumes',
    ingredients: [
      { id: '5', nom: 'pâte brisée', quantite: 1, unite: 'pièce' },
      { id: '6', nom: 'oeuf', quantite: 4, unite: 'pièce' },
      { id: '7', nom: 'lait', quantite: 200, unite: 'ml' },
      { id: '8', nom: 'légumes variés', quantite: 400, unite: 'g' }
    ],
    instructions: [
      'Préchauffer le four à 180°C',
      'Étaler la pâte dans un moule',
      'Battre les oeufs avec le lait',
      'Ajouter les légumes et enfourner'
    ],
    tempsPreparation: 45,
    difficulte: 'Moyen',
    note: 4.2,
    image: 'https://assets.afcdn.com/recipe/20200630/112347_w1024h768c1cx2880cy1920cxt0cyt0cxb5760cyb3840.jpg'
  },
  {
    id: '3',
    nom: 'Pancakes',
    ingredients: [
      { id: '9', nom: 'farine', quantite: 200, unite: 'g' },
      { id: '10', nom: 'lait', quantite: 250, unite: 'ml' },
      { id: '11', nom: 'oeuf', quantite: 2, unite: 'pièce' },
      { id: '12', nom: 'beurre', quantite: 50, unite: 'g' },
      { id: '13', nom: 'sucre', quantite: 50, unite: 'g' }
    ],
    instructions: [
      'Mélanger les ingrédients secs',
      'Ajouter les oeufs, le lait et le beurre fondu',
      'Cuire dans une poêle chaude'
    ],
    tempsPreparation: 20,
    difficulte: 'Facile',
    note: 4.7,
    image: 'https://assets.afcdn.com/recipe/20221027/136756_w1024h1024c1cx2933cy1783cxt0cyt0cxb5500cyb3671.jpg'
  },
  {
    id: '4',
    nom: 'Soupe de légumes',
    ingredients: [
      { id: '14', nom: 'carottes', quantite: 3, unite: 'pièce' },
      { id: '15', nom: 'pommes de terre', quantite: 2, unite: 'pièce' },
      { id: '16', nom: 'oignon', quantite: 1, unite: 'pièce' },
      { id: '17', nom: 'bouillon de légumes', quantite: 500, unite: 'ml' }
    ],
    instructions: [
      'Éplucher et couper les légumes',
      'Faire revenir l\'oignon',
      'Ajouter les légumes et le bouillon',
      'Laisser mijoter puis mixer'
    ],
    tempsPreparation: 30,
    difficulte: 'Facile',
    note: 4.3,
    image: 'https://assets.afcdn.com/recipe/20130204/35645_w1024h1024c1cx1250cy1875.jpg'
  }
];