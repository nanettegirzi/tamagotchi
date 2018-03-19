export class Tamagatchi
{

  constructor(name)
  {
    this.name = name;
    this.foodLevel = 50;
    this.sleepLevel = 100;
    this.playLevel = 75;
  }

  //These are the drain amounts

  hungerDrain()
  {
    setInterval(() =>
    {this.foodLevel--;
    }, 3000);
  }

  sleepDrain()
  {
    setInterval(() =>
    {this.sleepLevel--;
    }, 5000);
  }

  playDrain()
  {
    setInterval(() =>
    {this.playLevel--;
    }, 3000);
  }


  //These are the functions to feed/sleep/play with the Tamagatchi

  feed()
  {
    this.foodLevel += 10;
  }

  sleep()
  {
    setInterval(() =>
    {this.sleepLevel ++;
    }, 500);
  }

  play()
  {
    setInterval(() =>
    {this.playLevel += 16;
    }, 3000);
  }


  didTamagatchiDie()
  {
    if(this.foodLevel === 0 || this.sleepLevel === 0 || this.playLevel === 0)
    {
      return true;
    }
    else return false;
  }


}
