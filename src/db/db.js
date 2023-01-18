import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    { title: "Пицца", price: 599, Image: pizzaImg,id:1 },
    { title: "Бургер", price: 250, Image: burgerImg,id:2 },
    { title: "Черноголовка", price: 69, Image: cocaImg ,id:3},
    { title: "Кебаб", price: 400, Image: kebabImg,id:4 },
    { title: "Салат", price: 140, Image: saladImg,id:5 },
    { title: "Вода", price: 60, Image: waterImg,id:6 },
    { title: "Мороженое", price: 120, Image: iceCreamImg,id:7 },
  ];
}
