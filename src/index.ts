import SandwichBuilder from "./builders/SandwichBuilder";
import Director from "./directors/Director";
import Sandwich from "./products/Sandwich";

const builder : SandwichBuilder = new SandwichBuilder();
const director : Director = new Director(builder);

director.constructClassic();
const classico : Sandwich = builder.getSandwich();
imprimirDetalhes(classico);

director.constructVegan();
const vegano : Sandwich = builder.getSandwich();
imprimirDetalhes(vegano);

director.cosntructHotDog();
const hotdog : Sandwich = builder.getSandwich();
imprimirDetalhes(hotdog);

function imprimirDetalhes(lanche : Sandwich){
    console.log("Preparando Lanche: " + lanche.sandwichType);
    console.log("Pão: " + lanche.bread);
    console.log("Proteína: " + lanche.protein);
    console.log("Salada: " + lanche.salad);
    console.log("Molhos: ");
    for (let molho of lanche.sauces){
        console.log(molho.sauce)
    }
}