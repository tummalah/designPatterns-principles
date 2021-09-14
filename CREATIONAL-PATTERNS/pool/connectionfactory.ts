import { DataConnection } from "./connection";

export class DataConnectionFactory {
    public static getOracle(): DataConnection {
        let oracle: DataConnection;
        oracle= {
            Database: 'ORACLE'
        }
        return oracle;
    }

    public static getRedis(): DataConnection {
        let redis: DataConnection;
        redis= {
            Database: 'REDIS'
        }
        return redis;
    }
}