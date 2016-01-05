function Airport() {
  this.landedPlanes = [];
};

Airport.prototype.recievePlane = function(plane) {
  this.landedPlanes.push(plane);
};

Airport.prototype.takeOff = function(plane){
  if (this._isStormy() === true) {
    throw new Error("Cannot take off: stormy weather")
  };
  this._removePlane(plane)
};

Airport.prototype._removePlane = function(plane){
  var index = this.landedPlanes.indexOf(plane);
  if(index > -1) {
    this.landedPlanes.splice(index,1);
  }
};

Airport.prototype._isStormy = function(){
  return(Math.random() >= 0.8)
};
