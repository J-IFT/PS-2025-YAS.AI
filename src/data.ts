import { Recette, SubstitutionIngredient } from './types';

export const substitutions: SubstitutionIngredient[] = [
  { original: 'beurre', substituts: ['huile', 'margarine', 'huile de coco', 'purée d\'avocat'] },
  { original: 'lait', substituts: ['lait d\'amande', 'lait de soja', 'lait de coco', 'lait d\'avoine'] },
  { original: 'oeuf', substituts: ['compote de pommes', 'banane écrasée', 'graines de chia', 'yaourt'] },
  { original: 'crème fraiche', substituts: ['yaourt', 'lait de coco', 'fromage blanc', 'crème de soja'] },
  { original: 'farine de blé', substituts: ['farine de maïs', 'farine d\'amande', 'farine de riz', 'farine complète'] },
  { original: 'sucre', substituts: ['miel', 'sirop d\'érable', 'stevia', 'purée de dattes'] },
  { original: 'pâtes', substituts: ['nouilles de riz', 'pâtes complètes', 'spaghetti de courgette'] },
  { original: 'riz', substituts: ['quinoa', 'boulgour', 'semoule', 'millet'] },
  { original: 'pomme de terre', substituts: ['patate douce', 'panais', 'navet'] },
  { original: 'viande hachée', substituts: ['tofu émietté', 'protéines de soja texturées', 'lentilles'] },
  { original: 'bacon', substituts: ['tofu fumé', 'champignons grillés', 'tempeh'] },
  { original: 'fromage', substituts: ['levure nutritionnelle', 'fromage végétal', 'tofu soyeux'] },
  { original: 'tomates', substituts: ['tomates séchées', 'poivrons', 'courgettes'] },
  { original: 'avocat', substituts: ['mousse de tofu', 'purée de courge', 'yaourt nature'] },
  { original: 'haricots verts', substituts: ['pois mange-tout', 'brocoli', 'épinards'] },
  { original: 'carottes', substituts: ['courgettes', 'patates douces', 'betteraves'] },
  { original: 'courgettes', substituts: ['concombre', 'aubergine', 'poivron'] },
  { original: 'oignons', substituts: ['échalotes', 'poireaux', 'ail'] },
  { original: 'ail', substituts: ['gingembre', 'curcuma', 'cumin'] },
  { original: 'champignons', substituts: ['tofu', 'tempeh', 'noix'] },
  { original: 'beurre de cacahuète', substituts: ['beurre d\'amande', 'purée de noisettes', 'crème de coco'] },
  { original: 'noix de pécan', substituts: ['noix de cajou', 'amandes', 'noix du Brésil'] },
  { original: 'bananes', substituts: ['pommes', 'pêches', 'mangues'] },
  { original: 'pain', substituts: ['crackers', 'biscottes', 'pain de riz'] },
  { original: 'graines de chia', substituts: ['graines de lin', 'graines de pavot', 'graines de tournesol'] },
  { original: 'poulet', substituts: ['tofu', 'tempeh', 'seitan'] },
  { original: 'saumon', substituts: ['thon', 'sardines', 'truite'] },
  { original: 'farine de maïs', substituts: ['farine de riz', 'farine de pomme de terre', 'fécule de maïs'] },
  { original: 'menthe', substituts: ['basilic', 'romarin', 'thym'] },
  { original: 'poivron', substituts: ['tomates séchées', 'aubergines', 'carottes'] }
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
  },
  {
    id: '5',
    nom: 'Soupe de Lentilles',
    ingredients: [
      { id: '20', nom: 'lentilles', quantite: 250, unite: 'g' },
      { id: '21', nom: 'carottes', quantite: 2, unite: 'pièces' },
      { id: '22', nom: 'oignon', quantite: 1, unite: 'pièce' },
      { id: '23', nom: 'ail', quantite: 2, unite: 'gousses' },
      { id: '24', nom: 'curry', quantite: 1, unite: 'c. à soupe' }
    ],
    instructions: [
      'Faire revenir l\'oignon et l\'ail dans une casserole',
      'Ajouter les carottes et les lentilles',
      'Incorporer de l\'eau et le curry',
      'Laisser mijoter pendant 30 minutes'
    ],
    tempsPreparation: 35,
    difficulte: 'Facile',
    note: 4.4,
    image: 'https://img.cuisineaz.com/660x660/2024/01/10/i197111-.jpg'
  },
  {
    id: '6',
    nom: 'Curry de Pois Chiches',
    ingredients: [
      { id: '9', nom: 'pois chiches', quantite: 400, unite: 'g' },
      { id: '10', nom: 'tomates concassées', quantite: 400, unite: 'g' },
      { id: '11', nom: 'oignon', quantite: 1, unite: 'pièce' },
      { id: '12', nom: 'ail', quantite: 2, unite: 'gousses' },
      { id: '13', nom: 'lait de coco', quantite: 200, unite: 'ml' },
      { id: '14', nom: 'curry', quantite: 1, unite: 'c. à soupe' }
    ],
    instructions: [
      'Faire revenir l\'oignon et l\'ail dans une poêle',
      'Ajouter les tomates et les pois chiches',
      'Incorporer le lait de coco et le curry',
      'Laisser mijoter 20 minutes'
    ],
    tempsPreparation: 30,
    difficulte: 'Facile',
    note: 4.7,
    image: 'https://lacerisesurlemaillot.fr/wp-content/uploads/2021/04/curry-poischiches-epinards.jpg'
  },
  {
    id: '7',
    nom: 'Salade de Quinoa et Avocat',
    ingredients: [
      { id: '15', nom: 'quinoa', quantite: 150, unite: 'g' },
      { id: '16', nom: 'avocat', quantite: 1, unite: 'pièce' },
      { id: '17', nom: 'tomates cerises', quantite: 200, unite: 'g' },
      { id: '18', nom: 'concombre', quantite: 100, unite: 'g' },
      { id: '19', nom: 'citron', quantite: 1, unite: 'pièce' }
    ],
    instructions: [
      'Faire cuire le quinoa et le laisser refroidir',
      'Couper les légumes et l\'avocat',
      'Presser le citron et mélanger avec les ingrédients',
      'Servir frais'
    ],
    tempsPreparation: 15,
    difficulte: 'Facile',
    note: 4.8,
    image: 'https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/c61ddec1-ef82-4a4b-b6da-8aae69446369.jpg'
  }
];