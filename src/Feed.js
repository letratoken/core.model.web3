import Proof from "./Proof.js";
class Feed extends Proof{
    constructor(text,resources){
        super();
        this.text=text?text:'';
        this.resources= resources instanceof Array? resources : (resources?resources:null);
    }
}