
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

  it('can be told to take off and confirm it\'s not at the airport', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(plane.isFlying).toBe(true);
  });



});
