import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";

export default class Sandwich{

    private _sandwichType : SandwichType;
    private _bread : Bread;
    private _salad : Salad;
    private _protein : Protein;
    private _sauces : Sauce[] = [];

	public get sandwichType(): SandwichType {
		return this._sandwichType;
	}

	public get bread(): Bread {
		return this._bread;
	}

	public get salad(): Salad {
		return this._salad;
	}

	public get protein(): Protein {
		return this._protein;
	}

	public get sauces(): Sauce[]  {
		return this._sauces;
	}

	public set sandwichType(value: SandwichType) {
		this._sandwichType = value;
	}

	public set bread(value: Bread) {
		this._bread = value;
	}

	public set salad(value: Salad) {
		this._salad = value;
	}

	public set protein(value: Protein) {
		this._protein = value;
	}

	public set sauces(value: Sauce[] ) {
		this._sauces = value;
	}

    public addSauces(sauce : Sauce){
        this.sauces.push(sauce);
    }

}