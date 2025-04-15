class Allat {
    constructor(nev) {
      this.nev = nev;
    }
  
    hang() {
      return "Valamilyen állathang...";
    }
  
    megjelenit() {
      const elem = document.createElement('div');
      elem.textContent = `${this.nev} azt mondja: ${this.hang()}`;
      document.getElementById('zoo').appendChild(elem);
    }
  }
  
  class Kutya extends Allat {
    constructor(nev) {
      super(nev);
    }
  
    hang() {
      return "Vau vau!";
    }
  }
  
  class Macska extends Allat {
    constructor(nev) {
      super(nev);
    }
  
    hang() {
      return "Miau!";
    }
  }
  
  class Papagaj extends Allat {
    constructor(nev) {
      super(nev);
    }
  
    hang() {
      return "Helló! Helló!";
    }
  }
  
  function addDog() {
    const kutya = new Kutya("Bodri");
    kutya.megjelenit();
  }
  
  function addCat() {
    const macska = new Macska("Cirmi");
    macska.megjelenit();
  }
  
  function addParrot() {
    const papagaj = new Papagaj("Koko");
    papagaj.megjelenit();
  }
  