export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

const recipes = [
  {
    id: "1",
    title: "Veggie Carbonara",
    image: "veggie_carbonara.jpg",
    time: 20,
    description:
      "A vegetarian twist on the classic Italian pasta dish with eggs, cheese, and vegetarian bacon.",
    vegan: false,
  },
  {
    id: "2",
    title: "Veg Stir-Fry",
    image: "veg_stir_fry.jpg",
    time: 25,
    description:
      "A quick and healthy vegetarian stir-fry with fresh vegetables and tofu.",
    vegan: true,
  },
  {
    id: "3",
    title: "Veg Alfredo",
    image: "veg_alfredo.jpg",
    time: 30,
    description:
      "Creamy pasta with grilled vegetarian chicken and a rich Alfredo sauce.",
    vegan: false,
  },
  {
    id: "4",
    title: "Mushroom Risotto",
    image: "mushroom_risotto.jpg",
    time: 40,
    description:
      "A comforting vegetarian Italian rice dish with sautéed mushrooms and parmesan cheese.",
    vegan: false,
  },
  {
    id: "5",
    title: "Veg Lentil Soup",
    image: "veg_lentil_soup.jpg",
    time: 35,
    description:
      "A hearty and nutritious vegetarian soup made with lentils and a blend of spices.",
    vegan: true,
  },
  {
    id: "6",
    title: "Grilled Mushrooms",
    image: "grilled_mushrooms.jpg",
    time: 15,
    description:
      "Flavorful grilled Portobello mushrooms with a lemon and herb marinade.",
    vegan: true,
  },
  {
    id: "7",
    title: "Roasted Veg Salad",
    image: "roasted_veg_salad.jpg",
    time: 30,
    description:
      "A colorful vegetarian salad featuring roasted vegetables and a balsamic vinaigrette.",
    vegan: true,
  },
  {
    id: "8",
    title: "Veggie Tacos",
    image: "veggie_tacos.jpg",
    time: 25,
    description:
      "Tasty vegetarian tacos with seasoned plant-based meat and fresh toppings.",
    vegan: true,
  },
  {
    id: "9",
    title: "Chocolate Cookies",
    image: "chocolate_cookies.jpg",
    time: 12,
    description:
      "Homemade vegetarian chocolate chip cookies that are soft and gooey inside.",
    vegan: false,
  },
];

export default recipes;
