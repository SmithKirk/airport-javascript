function Airport() {
  this.landedPlanes = [];
};

Airport.prototype.land = function(plane) {
  this.landedPlanes.push(plane);
}
