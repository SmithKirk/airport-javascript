function Plane(){
  this.isFlying = true;
};

Plane.prototype.land = function(airport){
  airport.recievePlane(this);
  this.isFlying = false;
};

Plane.prototype.takeOff = function(airport){
  airport.takeOff(this);
  this.isFlying = true;
};
