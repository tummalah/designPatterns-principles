### SOLID Design Principles
* _Single Responsibility_ Principle [code](S.ts)
* _Open Closed_ Principle [code](O.ts)
* _Liskov Substitution_ Principle [code](L.ts)
* _Interface Seggregation_ Principle [code](I.ts)
* _Dependency Inversion_ Pinrciple [code](D.ts)

#### Single Responsibility Principle
* A Class specification should have only one reason to change
* Singular Purpose makes the code easier to maintain and make sense out of it

#### The Open/Closed Principle
* Open for Extension to add new features or business logic
* Attempt  to leave existing classes and close it down for modifications

#### The Liskov Substitution Principle
* Should be able to substitute a child class for a parent class without causing any loss of functionality
* Concept of Overriding methods 
* Concept of **_Is a_** relationship exists between a child and parent

#### The Interface seggregation Principle
* The client code which is using Interface should not be forced to implement unused methods
* Discourage creating interface that do too many things

#### The Dependency Inversion Principle
* Higher level modules should not depend on lower level modules.
* Higher level modules should depend on abstractions of lower level modules and not concrete implementations
* Parent class should not know about Child class but rather child class should depend on abstract parents


