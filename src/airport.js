function Airport() {
  this.landedPlanes = [];
};

Airport.prototype.recievePlane = function(plane) {
  this.landedPlanes.push(plane);
};

Airport.prototype.takeOff = function(plane){
  this._removePlane(plane)
};

Airport.prototype._removePlane = function(plane){
  var index = this.landedPlanes.indexOf(plane);
  if(index > -1) {
    this.landedPlanes.splice(index,1);
  }
};
