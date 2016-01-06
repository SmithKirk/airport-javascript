describe('Weather', function() {

  var weather

  beforeEach(function() {
    weather = new Weather;
  });

  it('sometimes returns stormy', function() {
    spyOn(Math, "random").and.returnValue(0.9);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('sometimes returns not stormy', function() {
    spyOn(Math, "random").and.returnValue(0.1);
    expect(weather.isStormy()).toBeFalsy();
  });

});
