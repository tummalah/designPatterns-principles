import { IoCContainer } from "./ioc";

interface IOrderService {
    placeOrder(): void;
}

interface ICustomerService {
    getCustomerAddress(): string;
}

interface IShippingService {
    getShippingRate(): number;
}

class ConcreteCustomerService implements ICustomerService {
    getCustomerAddress(): string {
        return "Richmond,VA"
    }
}

class ConcreteShippingService implements IShippingService {
    getShippingRate(): number {
        return 10;
    }
}

class ConcreteOrderService implements IOrderService {
    constructor(private _customer: ICustomerService, private _shipping: IShippingService) {}

    placeOrder(): void {
        console.log("Order Placed to:"+ this._customer.getCustomerAddress() + " with shipping rate of:"+ this._shipping.getShippingRate());
    }
}
// get DI container
let container = IoCContainer.instance;
// register concrete implementations in container
container.register("ICustomerService", [], ConcreteCustomerService);
container.register("IShippingService", [], ConcreteShippingService);
container.register("IOrderService", ["ICustomerService", "IShippingService"], ConcreteOrderService);


// get the implementation orderservice from DI container
let concreteOrderService = container.resolve<IOrderService>("IOrderService");
concreteOrderService.placeOrder();