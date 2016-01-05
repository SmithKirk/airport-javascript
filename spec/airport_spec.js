describe('Airport', function() {

var airport
var plane

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('can confirm plane is at airport after landing', function() {
    airport.recievePlane(plane);
    expect(airport.landedPlanes).toContain(plane);
  });

  it("can confirm plane is not at airport after take off", function(){
    airport.recievePlane(plane);
    airport.takeOff(plane);
    expect(airport.landedPlanes).not.toContain(plane);
  });



});
