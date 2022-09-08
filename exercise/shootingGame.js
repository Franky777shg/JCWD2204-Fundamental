class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    let item = {
      health: 0,
      power: 0,
    };

    if (randomNumber == 1) {
      // nambah power
      item.power = 10;
    } else if (randomNumber == 2) {
      // nambah health
      item.health = 10;
    }

    return item;
  };

  start = () => {
    console.log("===== Game Start =====");
    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`=== Player ${this.player1.name} turn ===`);
      this.player1.showStatus();
      let itemPlayer1 = this.getRandomItem();
      this.player1.useItem(itemPlayer1);
      this.player2.hit(this.player1.power);
      this.player2.showStatus();
      if (this.player2.health < 0) {
        break;
      }

      console.log(`=== Player ${this.player2.name} turn ===`);
      this.player2.showStatus();
      let itemPlayer2 = this.getRandomItem();
      this.player2.useItem(itemPlayer2);
      this.player1.hit(this.player2.power);
      this.player1.showStatus();
      if (this.player1.health < 0) {
        break;
      }
    }

    if (this.player1.health > this.player2.health) {
      console.log(`Player ${this.player1.name} is the winner`);
    } else {
      console.log(`Player ${this.player2.name} is the winner`);
    }
  };
}

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  showStatus = () => {
    // Player A (Health => 100, Power => 10)
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  };

  hit = (power) => {
    this.health -= power;
    console.log(`Player ${this.name} has been damaged by ${power} points`);
    console.log(`Player ${this.name} has ${this.health} remaining health`);
  };

  useItem = (item) => {
    if (item.health) {
      this.health += item.health;
      console.log(`Player ${this.name} received ${item.health} health points`);
    }

    if (item.power) {
      this.power += item.power;
      console.log(`Player ${this.name} received ${item.power} power points`);
    }
  };
}

const pemain1 = new Player("A");
const pemain2 = new Player("B");

const game = new ShootingGame(pemain1, pemain2);
game.start();

// player1.showStatus()
// player1.hit(20)
