export const cocktails = [
    {
      id: 1,
      name: "MOSCOW MULE",
      image: "/images/moscow-mule.jpg",
      glass: "Moscow Mule Mug ou Rocks",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Vodka", quantity: "4", unit: "cl" },
        { name: "Jus de citron vert", quantity: "2", unit: "cl" },
        { name: "Ginger Beer", quantity: "Remplir", unit: "" }
      ],
      decoration: "Quartier de citron vert",
      optional: "Mule jamaïcaine : Remplacer la vodka par du rhum épicé"
    },
    {
      id: 2,
      name: "LYNCHBURG LEMONADE",
      image: "/images/lynchburg-lemonade.jpg",
      glass: "Verre haut",
      ice: "Cube",
      technique: "Shaker & Filtrer",
      ingredients: [
        { name: "Jack Daniel's", quantity: "4", unit: "cl" },
        { name: "Cointreau", quantity: "2", unit: "cl" },
        { name: "Jus de citron jaune", quantity: "2", unit: "cl" },
        { name: "Sirop de sucre", quantity: "1", unit: "cl" },
        { name: "Limonade", quantity: "Remplir", unit: "" }
      ],
      decoration: "Quartier de citron jaune",
      optional: ""
    },
    {
      id: 3,
      name: "EL DIABLO",
      image: "/images/el-diablo.jpg",
      glass: "Verre haut",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Tequila", quantity: "3", unit: "cl" },
        { name: "Crème de cassis", quantity: "1", unit: "cl" },
        { name: "Jus de citron vert", quantity: "1", unit: "cl" },
        { name: "Ginger Ale", quantity: "Remplir", unit: "" }
      ],
      decoration: "Quartier de citron vert",
      optional: ""
    },
    {
      id: 4,
      name: "LONG ISLAND ICED TEA",
      image: "/images/long-island.jpg",
      glass: "Verre haut",
      ice: "Cube",
      technique: "Shaker & Filtrer",
      ingredients: [
        { name: "Vodka", quantity: "2", unit: "cl" },
        { name: "Rhum blanc", quantity: "2", unit: "cl" },
        { name: "Gin", quantity: "2", unit: "cl" },
        { name: "Tequila", quantity: "2", unit: "cl" },
        { name: "Cointreau", quantity: "2", unit: "cl" },
        { name: "Jus de citron jaune", quantity: "2", unit: "cl" },
        { name: "Sirop de sucre", quantity: "1", unit: "cl" },
        { name: "Coca Cola", quantity: "Remplir", unit: "" }
      ],
      decoration: "Quartier de citron jaune",
      optional: "Beverly Hills Iced Tea : Remplacer le Coca Cola par du Champagne"
    },
    {
      id: 5,
      name: "AMARETTO SOUR",
      image: "/images/amaretto-sour.jpg",
      glass: "Rocks",
      ice: "Cube",
      technique: "Shaker sans glaçon puis Shaker & Filtrer",
      ingredients: [
        { name: "Angostura Bitters", quantity: "2", unit: "traits" },
        { name: "Blanc d'oeuf", quantity: "1", unit: "" },
        { name: "Amaretto", quantity: "6", unit: "cl" },
        { name: "Jus de citron jaune", quantity: "3", unit: "cl" },
        { name: "Sirop de sucre", quantity: "1", unit: "cl" }
      ],
      decoration: "Quartier de citron jaune et une cerise",
      optional: ""
    },
    {
      id: 6,
      name: "APEROL SPRITZ",
      image: "/images/aperol-spritz.jpg",
      glass: "Verre à vin",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Prosecco", quantity: "6", unit: "cl" },
        { name: "Aperol", quantity: "4", unit: "cl" },
        { name: "Eau gazeuse", quantity: "2", unit: "cl" }
      ],
      decoration: "Tranche d'orange",
      optional: ""
    },
    {
      id: 7,
      name: "B52",
      image: "/images/b52.jpg",
      glass: "Shooter",
      ice: "Aucun",
      technique: "Par couche",
      ingredients: [
        { name: "Kahlua", quantity: "2", unit: "cl" },
        { name: "Baileys", quantity: "2", unit: "cl" },
        { name: "Cointreau", quantity: "2", unit: "cl" }
      ],
      decoration: "",
      optional: "Enflammer le shooter"
    },
    {
      id: 8,
      name: "BATANGA",
      image: "/images/batanga.jpg",
      glass: "Verre haut",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Tequila", quantity: "4", unit: "cl" },
        { name: "Jus de citron vert", quantity: "1/2", unit: "citron" },
        { name: "Coca Cola", quantity: "Remplir", unit: "" }
      ],
      decoration: "Givrage de sel",
      optional: ""
    },
    {
      id: 9,
      name: "BELLINI",
      image: "/images/bellini.jpg",
      glass: "Flûte à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Purée de pêche", quantity: "1", unit: "cl" },
        { name: "Liqueur de pêche", quantity: "1", unit: "cl" },
        { name: "Prosecco", quantity: "Remplir", unit: "" }
      ],
      decoration: "",
      optional: "Rossini : Remplacer la purée et liqueur de pêche par de la purée et liqueur de framboise"
    },
    {
      id: 10,
      name: "BLOOD & SAND",
      image: "/images/blood-&-sand.jpg",
      glass: "Coupe à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Scotch Whisky", quantity: "2", unit: "cl" },
        { name: "Sweet Vermouth", quantity: "2", unit: "cl" },
        { name: "Liqueur de cerise", quantity: "2", unit: "" },
        { name: "Jus d'orange", quantity: "2", unit: "" }
      ],
      decoration: "Zeste d'orange",
      optional: ""
    },
    {
      id: 11,
      name: "BLOODY MARY",
      image: "/images/bloody-mary.jpg",
      glass: "Verre haut",
      ice: "Cube",
      technique: "Shaker",
      ingredients: [
        { name: "Vodka", quantity: "4", unit: "cl" },
        { name: "Jus de tomate", quantity: "8", unit: "cl" },
        { name: "Worcestershire sauce", quantity: "3", unit: "traits" },
        { name: "Tabasco", quantity: "3", unit: "traits" },
        { name: "Sel de céléri", quantity: "1", unit: "pincée" },
        { name: "Poivre", quantity: "1", unit: "pincée" },
        { name: "Jus de citron vert", quantity: "1", unit: "cl" }
      ],
      decoration: "Branche de céléri",
      optional: ""
    },
    {
      id: 12,
      name: "BRAMBLE",
      image: "/images/bramble.jpg",
      glass: "Rocks",
      ice: "Cube",
      technique: "Shaker",
      ingredients: [
        { name: "Gin", quantity: "4", unit: "cl" },
        { name: "Jus de citron jaune", quantity: "2", unit: "cl" },
        { name: "Sirop de sucre", quantity: "1", unit: "cl" },
        { name: "Crème de mûre (flotter)", quantity: "2", unit: "cl" }
      ],
      decoration: "Quartier de citron jaune & 2 mûres",
      optional: ""
    },
    {
      id: 13,
      name: "CAPIRINHA",
      image: "/images/capirinha.jpg",
      glass: "Rocks",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Cachaça", quantity: "6", unit: "cl" },
        { name: "Quartier de citron vert", quantity: "6", unit: "" },
        { name: "Sirop de sucre", quantity: "2", unit: "cl" }
      ],
      decoration: "Quartier de citron vert",
      optional: "Remplacer la cachaça par du rhum blanc de Martinique"
    },
    {
      id: 14,
      name: "CLASSIC CHAMPAGNE COCKTAIL",
      image: "/images/classic-champagne-cocktail.jpg",
      glass: "Flûte à champagne",
      ice: "Aucun",
      technique: "Au verre",
      ingredients: [
        { name: "Angostura Bitters mélangé avec un sucre", quantity: "1", unit: "" },
        { name: "Cognac", quantity: "2", unit: "cl" },
        { name: "Champagne", quantity: "Remplir", unit: "" }
      ],
      decoration: "",
      optional: ""
    },
    {
      id: 15,
      name: "CLOVER CLUB",
      image: "/images/clover-club.jpg",
      glass: "Coupe à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Blanc d'oeuf", quantity: "1", unit: "" },
        { name: "Purée de framboise", quantity: "1,5", unit: "cl" },
        { name: "Gin", quantity: "6", unit: "cl" },
        { name: "Jus de citron jaune", quantity: "3", unit: "cl" },
        { name: "Sirop de sucre", quantity: "1", unit: "cl" }
      ],
      decoration: "Une framboise",
      optional: ""
    },
    {
      id: 16,
      name: "COSMOPOLITAN",
      image: "/images/cosmopolitan.jpg",
      glass: "Coupe à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Vodka au citron", quantity: "4", unit: "cl" },
        { name: "Cointreau", quantity: "2", unit: "cl" },
        { name: "Jus de citron vert", quantity: "1", unit: "cl" },
        { name: "Jus de cramberry", quantity: "3", unit: "cl" }
      ],
      decoration: "Zeste d'orange",
      optional: "Enflammer le zeste d'orange au dessus du verre"
    },
    {
      id: 17,
      name: "CUBA LIBRE",
      image: "/images/cuba-libre.jpg",
      glass: "Verre haut",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Rhum blanc", quantity: "4", unit: "cl" },
        { name: "Jus de citron vert", quantity: "1", unit: "cl" },
        { name: "Coca Cola", quantity: "Remplir", unit: "" }
      ],
      decoration: "Quartier de citron vert",
      optional: "Cubata : Remplacer le rhum blanc par du rhum ambré"
    },
    {
      id: 18,
      name: "DAIQUIRI",
      image: "/images/daiquiri.jpg",
      glass: "Coupe à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Rhum blanc", quantity: "6", unit: "cl" },
        { name: "Jus de citron vert", quantity: "3", unit: "cl" },
        { name: "Sirop de sucre", quantity: "1,5", unit: "cl" }
      ],
      decoration: "",
      optional: ""
    },
    {
      id: 19,
      name: "DARK & STORMY",
      image: "/images/dark-&-stormy.jpg",
      glass: "Verre haut",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Jus de citron vert", quantity: "2", unit: "cl" },
        { name: "Ginger beer", quantity: "Remplir", unit: "" },
        { name: "Rhum ambré (flotter)", quantity: "4", unit: "cl" }
      ],
      decoration: "Quartier de citron vert",
      optional: ""
    },
    {
      id: 20,
      name: "ESPRESSO MARTINI",
      image: "/images/espresso-martini.jpg",
      glass: "Coupe à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Vodka", quantity: "4", unit: "cl" },
        { name: "Kahlua", quantity: "2", unit: "cl" },
        { name: "Espresso", quantity: "1", unit: "shot" },
        { name: "Sirop de sucre", quantity: "1", unit: "cl" }
      ],
      decoration: "3 grains de café",
      optional: "Le sirop de sucre dépend de l'amertume du café"
    },
    {
      id: 21,
      name: "FRENCH 75",
      image: "/images/french-75.jpg",
      glass: "Flûte à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Gin", quantity: "4", unit: "cl" },
        { name: "Jus de citron jaune", quantity: "2", unit: "cl" },
        { name: "Sirop de sucre", quantity: "1", unit: "cl" },
        { name: "Champagne", quantity: "Remplir", unit: "" }
      ],
      decoration: "Zeste de citron jaune",
      optional: ""
    },
    {
      id: 22,
      name: "FRENCH MARTINI",
      image: "/images/french-martini.jpg",
      glass: "Coupe à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Vodka", quantity: "4", unit: "cl" },
        { name: "Chambord", quantity: "2", unit: "cl" },
        { name: "Jus d'ananas", quantity: "4", unit: "cl" }
      ],
      decoration: "Une framboise",
      optional: ""
    },
    {
      id: 23,
      name: "GIN BASIL SMASH",
      image: "/images/gin-basil-smash.jpg",
      glass: "Rocks",
      ice: "Cube",
      technique: "Shaker & Filtrer",
      ingredients: [
        { name: "Basilic", quantity: "8 à 12", unit: "feuilles" },
        { name: "Gin", quantity: "6", unit: "cl" },
        { name: "Jus de citron jaune", quantity: "3", unit: "cl" },
        { name: "Sirop de sucre", quantity: "1,5", unit: "cl" }
      ],
      decoration: "Une feuille de basilic",
      optional: ""
    },
    {
      id: 24,
      name: "GIN TONIC",
      image: "/images/gin-tonic.jpg",
      glass: "Verre haut",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Gin", quantity: "4", unit: "cl" },
        { name: "Tonic", quantity: "Remplir", unit: "" }
      ],
      decoration: "Quartier de citron vert",
      optional: ""
    },
    {
      id: 25,
      name: "GODFATHER",
      image: "/images/godfather.jpg",
      glass: "Rocks",
      ice: "Cube",
      technique: "Au verre",
      ingredients: [
        { name: "Scotch Whisky", quantity: "3", unit: "cl" },
        { name: "Amaretto", quantity: "3", unit: "cl" }
      ],
      decoration: "",
      optional: ""
    },
    {
      id: 26,
      name: "HEMINGWAY DAIQUIRI",
      image: "/images/hemingway-daiquiri.jpg",
      glass: "Coupe à champagne",
      ice: "Aucun",
      technique: "Shaker & filtrer",
      ingredients: [
        { name: "Rhum blanc", quantity: "5", unit: "cl" },
        { name: "Maraschino", quantity: "1", unit: "cl" },
        { name: "Jus de citron vert", quantity: "2", unit: "cl" },
        { name: "Jus de pamplemousse", quantity: "2", unit: "cl" }
      ],
      decoration: "Une cerise",
      optional: "Comme Hemingway était diabétique, ce cocktail ne contient pas de sirop de sucre"
    }
  ];