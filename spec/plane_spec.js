
describe ("Plane", function() {
  var plane
  var airport

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpy("airport")
  });

  it ("confirmation of landed plane", function(){
    plane.land(airport);
    expect(plane.isFlying).toBe (false);
  });



});
