const PaintCan = function(litres){
    this.litres = litres
}

PaintCan.prototype.isEmpty = function(){
    return this.litres === 0
    // if (this.litres === 0){
    //     return true;
    // } else {
    //     return false;
    // }
    
}

PaintCan.prototype.canEmpty = function(){
    return this.litres = 0
}


module.exports = PaintCan;