import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";
import Sandwich from "../products/Sandwich";

export default interface IBuilder{
    reset() : void;
    getSandwich() : Sandwich;
    setSandwichType(value : SandwichType);
    setBread(value : Bread);
    setProtein(value : Protein);
    setSalad(value : Salad);
    addSauces(sauce : Sauce);

}