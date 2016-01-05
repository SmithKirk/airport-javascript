describe('Airport', function() {

var airport
var plane

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('can confirm plane is at airport after landing', function() {
    airport.land(plane)
    expect(airport.landedPlanes).toContain(plane)
  });



});
