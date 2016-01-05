function Plane(){
  this.isFlying = true;
};

Plane.prototype.land = function(airport){
  this.isFlying = false;
};
