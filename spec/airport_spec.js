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
      airport.receivePlane(plane);
      expect(airport.landedPlanes).toContain(plane);
    });

    it("can confirm plane is not at airport after take off", function(){
      airport.receivePlane(plane);
      airport.takeOff(plane);
      expect(airport.landedPlanes).not.toContain(plane);
    });

    it('has a default capacity', function() {
      expect(airport.maximumCapacity).toEqual(DEFAULT_CAPACITY);
    });

    it('it raises error if you try to breach maximum capacity', function() {
      for (count = 0; count < DEFAULT_CAPACITY; count++) {
        airport.receivePlane(plane);
      }
      expect(function() {
        airport.receivePlane(plane);
      }).toThrowError('Cannot land: airport full')
    });

    it('allow the default capacity to be overwritten', function() {
      airport.updateCapacity(20);
      expect(airport.maximumCapacity).toEqual(20);
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
      expect(function() {
        airport.receivePlane(plane);
      }).toThrowError("Cannot land: stormy weather")
    });




  });



});
