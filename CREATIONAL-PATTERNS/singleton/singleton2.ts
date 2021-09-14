import { DatabaseConfig  } from "./singleton";

let config= DatabaseConfig.instance;

// The host here should be oracle-test
console.log(` ${config.host}`);
