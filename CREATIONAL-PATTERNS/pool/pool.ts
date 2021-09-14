import { DataConnection } from "./connection";
import { DataConnectionFactory } from "./connectionfactory";

export class DataConnectionPool {
    private _oraclePool: DataConnection[] = [];
    private _redisPool: DataConnection[] = [];

    static ORACLE_POOL_SIZE = 30;
    static REDIS_POOL_SIZE = 20;

    constructor() {
        this.loadRedisPool();
        this.loadOraclePool();
    }

    private  loadOraclePool() {
        for(let i=0; i<DataConnectionPool.ORACLE_POOL_SIZE; i++) {
            this._oraclePool.push(DataConnectionFactory.getOracle());
        }
    }

    private loadRedisPool() {
        for(let i=0; i<DataConnectionPool.REDIS_POOL_SIZE; i++) {
            this._redisPool.push(DataConnectionFactory.getRedis());
        }
    }

    private getPoolItem<T>(pool: T[], reloadFn: () => void): T {
        let item: T = pool.pop() as T;
        if(!pool.length) {
            reloadFn();
        }
        return item;
    }

    public getOracleConnection(): DataConnection {
        return this.getPoolItem<DataConnection>(this._oraclePool, this.loadOraclePool.bind(this));
    }

    public getRedisConnection(): DataConnection {
        return this.getPoolItem<DataConnection>(this._redisPool, this.loadRedisPool.bind(this));
    }

    
}