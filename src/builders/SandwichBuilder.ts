import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";
import Sandwich from "../products/Sandwich";
import IBuilder from "./IBuilder";

export default class SandwichBuilder implements IBuilder{

    private sandwich = new Sandwich();

    reset(): void {
        this.sandwich = new Sandwich();
    }
    getSandwich(): Sandwich {
        const result : Sandwich = this.sandwich;
        this.reset();
        return result;
    }
    setSandwichType(value: SandwichType) {
        this.sandwich.sandwichType = value;
    }
    setBread(value: Bread) {
        this.sandwich.bread = value;
    }
    setProtein(value: Protein) {
        this.sandwich.protein = value;
    }
    setSalad(value: Salad) {
        this.sandwich.salad = value;
    }
    addSauces(sauce: Sauce) {
        this.sandwich.addSauces(sauce);
    }

}