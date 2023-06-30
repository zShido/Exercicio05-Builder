import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";

export default class Director{

    constructor(private builder : IBuilder){}

    constructClassic(){
        this.builder.setSandwichType(SandwichType.CLASSIC);
        this.builder.setBread(Bread.BUM);
        this.builder.setProtein(Protein.BOVINE);
        this.builder.setSalad(Salad.LETTUCE);
        this.builder.addSauces(new Sauce("MOSTARDA"));
        this.builder.addSauces(new Sauce("KETCHUP"));
        this.builder.addSauces(new Sauce("MAIONESE"));
    }

    cosntructHotDog(){
        this.builder.setSandwichType(SandwichType.HOTDOG);
        this.builder.setBread(Bread.HOTDOG);
        this.builder.setProtein(Protein.SALSAGE);
        this.builder.addSauces(new Sauce("MOSTARDA"));
        this.builder.addSauces(new Sauce("KETCHUP"));
        this.builder.setSalad(Salad.PICKLES);
    }

    constructVegan(){
        this.builder.setSandwichType(SandwichType.VEGAN);
        this.builder.setBread(Bread.ROLL);
        this.builder.setProtein(Protein.VEGAN);
        this.builder.addSauces(new Sauce("MOSTARDA"));
        this.builder.addSauces(new Sauce("KETCHUP"));
        this.builder.setSalad(Salad.TOMATO);
    }
}