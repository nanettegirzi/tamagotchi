import { Tamagatchi } from "./../src/tamagatchi.js";

describe('Tamagatchi', function() {
  let chuck = new Tamagatchi("Chuck");

  beforeEach(function() {
    jasmine.clock().install();
    chuck.hungerDrain();
    chuck.sleepDrain();
    chuck.playDrain();

  });
  afterEach(function() {
    jasmine.clock().uninstall();
    chuck = new Tamagatchi("Chuck");
  });

  it('should have a name, foodLevel value of 50, sleepLevel value of 100, and playLevel value of 75', function(){
    expect(chuck.name).toEqual("Chuck");
    expect(chuck.foodLevel).toEqual(50);
    expect(chuck.sleepLevel).toEqual(100);
    expect(chuck.playLevel).toEqual(75);
  });

  it('will have a foodLevel of 49 after 3 seconds', function() {
    jasmine.clock().tick(3001);
    expect(chuck.foodLevel).toEqual(49);
  });

  it('will have a sleepLevel of 99 after 5 seconds', function() {
    jasmine.clock().tick(5001);
    expect(chuck.sleepLevel).toEqual(99);
  });

  it('will have a playLevel of 74 after 3 seconds', function() {
    jasmine.clock().tick(3001);
    expect(chuck.playLevel).toEqual(74);
  });

  it('will have a foodLevel of 50 after running for 30 seconds and then feeding using feed()', function() {
    jasmine.clock().tick(30001);
    chuck.feed();
    expect(chuck.foodLevel).toEqual(50);
  });

  it('will have a sleepLevel of 92 after waiting for 50 seconds (sleepLevel = 90), running the sleep method (sleepLevel + 1 every 1/2 second), and waiting for 1 second.', function() {
    jasmine.clock().tick(50001);
    chuck.sleep();
    jasmine.clock().tick(1000);
    expect(chuck.sleepLevel).toEqual(92);
  });

it('will have a playLevel of 75 after waiting for 45 seconds(playLevel = 60), running the play method and waiting for 3 seconds', function(){
  jasmine.clock().tick(45001);
  console.log(chuck.playLevel);
  chuck.play();
  jasmine.clock().tick(3001);
  console.log(chuck.playLevel);
  expect(chuck.playLevel).toEqual(75);
});

it('should die', function(){
  jasmine.clock().tick(150001);
  expect(chuck.didTamagatchiDie()).toEqual(true);

})

});
