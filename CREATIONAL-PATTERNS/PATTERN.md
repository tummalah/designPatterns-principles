### Creational Design Patterns
* _Singleton_ Pattern [code](singleton/singleton2.ts)
* _Factory_ Pattern [code](factory/OrdersFactory.ts)
* _Pool_ Pattern [code](pool/pool.ts)  



#### Singleton
* Singleton is used to have a single instance of a class in your entire application  
* One of the benefits of using Singleton is shared state  
* Most commonly used to hold application configuration 

#### Factory
* Factory pattern is usually a combination of single responsibilty and open/closed principles  
* Delegation of creating objects to factory class so that the client does not have to know how the objects are built. 

#### Pool
* Object pool pattern is usually a pool of pre-initialized objects whose initialization is heavyweight  
* Everytime we need an object we take the one from the pool and replinish the pool when required 
* Very commonly used in expensive operations like Database connections or RPC connections



