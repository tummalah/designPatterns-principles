// Create a singleton class
export class DatabaseConfig {
    host: string = "";
    user: string = "";
    password: string = "";
    

    constructor() {
        // if the instance already created once then throw error

        if(DatabaseConfig._instance) {
            throw new Error("Cannot initialize singleton class using new");
        }
        // if no instance created then initialize the static _instance
        DatabaseConfig._instance = this;
    }

    private static _instance: DatabaseConfig = new DatabaseConfig();
// public access method for instance

    public static get instance(): DatabaseConfig {
        return DatabaseConfig._instance;
    }
}

// Test
let dbConfig = DatabaseConfig.instance;
dbConfig.host="oracle-test";
dbConfig.user="test";
dbConfig.password="sudo";



