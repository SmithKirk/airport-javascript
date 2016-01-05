function Plane(){
  this.isFlying = true;
};

Plane.prototype.land = function(airport){
  this.isFlying = false;
};

Plane.prototype.takeOff = function(airport){
  this.isFlying = true;
};
