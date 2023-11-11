export class Decorer {
  code = "";
  value = 0;
  loggedValue = "";
  constructor(code) {
    this.code = code;
  }

  decode() {
    let sectionOfCode = this.code.split("");
    sectionOfCode.forEach((element) => {
      if (element === "#") this.increment();
      if (element === "@") this.decrement();
      if (element === "*") this.multiplyByItself();
      if (element === "&") this.log();
    });
  }

  increment() {
    this.value += 1;
  }
  decrement() {
    this.value -= 1;
  }
  multiplyByItself() {
    this.value *= this.value;
  }
  log() {
    this.loggedValue += this.value;
  }
  getValueHistory() {
    return this.loggedValue;
  }
  getLastValue() {
    return this.value;
  }
}
/*
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/
