import { DataConnectionPool } from "./pool";


let pool = new DataConnectionPool();

// Load 40 oracle connections and see that we can create more than 30 
for(let i=0; i< 40; i++) {
    console.log(i+1);
    console.log(pool.getOracleConnection());
}