function Airport() {
  this.landedPlanes = [];
  this.maximumCapacity = DEFAULT_CAPACITY;
};

const DEFAULT_CAPACITY = 10;

Airport.prototype.receivePlane = function(plane) {
  if (this._isStormy() === true) {
    throw new Error("Cannot land: stormy weather")
  };
  if (this.landedPlanes.length >= this.maximumCapacity) {
    throw new Error('Cannot land: airport full')
  }
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
