import { Order } from "./order"

// Factory class to build SAP Order or JDE Order 
export class OrdersFactory {
    public static getSAPOrder(): Order {
        let sap_order: Order;
        
        sap_order.oerp='SAP';
        sap_order.ourl='http://sap.com'+ '/order/{onum}';
        return sap_order;
    }

    public static getJDEOrder(): Order {
        let jde_order: Order;
        
        jde_order.oerp='JDE';
        jde_order.ourl='http://oracle.com'+ '/order/getOrders/{onum}';
        return jde_order;
    }

    public static getOrder(erp: string): Order {
        let order: Order;
        if (erp==='SAP'){
            order.oerp='SAP';
            order.ourl='http://sap.com'+ '/order/{onum}';
        }
        else if(erp==='JDE'){
            order.oerp='JDE';
            order.ourl='http://oracle.com'+ '/order/getOrders/{onum}';

        }
        
   
        

        return order;
    }

   
}