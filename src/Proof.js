class Proof{
    constructor(){
        this.hash=null;                     //The Proof hash
        this.timestamp=0;                   //Incomming time in first node
        this.signature=null;                //
        this.mimetype='text/plain';         //Mime Type
        this.size=0;                        //The Original content
        this.data=null;                     //Proof data if less than network limit
        this.shortcut=false;                //is shortcut
    }
}

exports=Proof;