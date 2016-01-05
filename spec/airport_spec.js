describe('Airport', function() {

var airport
var plane

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  describe("Not stormy", function(){

    beforeEach(function(){
      spyOn(Math, "random").and.returnValue(0.2);
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

  describe("Stormy", function(){

    beforeEach(function(){
      spyOn(Math, "random").and.returnValue(0.9);
    });

    it("prevent take off in stormy weather", function(){
      expect(function(){
        airport.takeOff(plane);
      }).toThrowError("Cannot take off: stormy weather")
    });

    it('prevents landing in stormy weather', function() {
      expect(function(){
        airport.recievePlane(plane);
      }).toThrowError("Cannot land: stormy weather")
    });




  });



});
