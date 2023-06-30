export default class Sauce{

    constructor(private _sauce : String){}

    get sauce() : String{
        return this._sauce;
    }

    set sauce(sauce : String){
        this._sauce = sauce;
    }

}