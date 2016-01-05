describe('Feature', function() {

var airport
var plane

beforeEach(function(){
  spyOn(Math, "random").and.returnValue(0.2);
});


  it('A plane can take off, land, and be confirmed at the airport', function() {
    plane = new Plane();
    airport = new Airport();

    plane.land(airport);
    expect(plane.isFlying).toBe(false);
    expect(airport.landedPlanes).toContain(plane);
    plane.takeOff(airport);
    expect(plane.isFlying).toBe(true);
    expect(airport.landedPlanes).not.toContain(plane)
  });

});
