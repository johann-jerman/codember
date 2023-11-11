import { Decorer } from "./Decoder.js";

const code =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

let decorer = new Decorer(code);

decorer.decode();

console.log(decorer.getValueHistory());
