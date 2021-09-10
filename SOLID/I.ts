import { randomUUID } from "crypto";

export interface SalesOrderService {
    BookOrderLine(Line: string): void;
    ConfirmOrder(order: any): String;

    // This method ideally should not be in this interface as DropOrders does not need this
   // ShipOrder(order: any, address: string) : void
}

// seggregated interface for Drop orders
export interface DropOrderService {
    callPartner(order: any): void;
    
}
//seggregated interface for shipping only as this is not required for DropOrders
export interface ShippingService {
    ShipOrder(order: any, address: string) : void
    
}

// Normal Orders 
export class Orders implements SalesOrderService, ShippingService {
    ShipOrder(order: any, address: string): void {
        console.log("Order is Shipped to:",address);
    }
    BookOrderLine(Line: string): void {
        console.log("Order Line Saved:",Line);
    }
    ConfirmOrder(order: any): String {
        return Math.random().toString();
        }
    
}

//Dropship Orders
export class DropOrders implements SalesOrderService,DropOrderService {
    BookOrderLine(Line: string): void {
        console.log("Order Line Saved:",Line);
    }
    ConfirmOrder(order: any): String {
        return Math.random().toString();
        }
    callPartner(order: any): void {
        console.log("Order dispatched to Amazon:",order);
    }
    
}

