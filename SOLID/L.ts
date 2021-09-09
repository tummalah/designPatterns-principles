//base class
class OrderHeader {

constructor(public custId: number, public address1: string, public zipcode: string){

}
    get CustomerId(): number {
        return this.custId;

    }
    get AddressLine(): string {
        return this.address1;
    }

    get ZipCode(): string {
        return this.zipcode;
    }
}

class DEAOHeader extends OrderHeader{

    constructor(public custId: number, public address1: string, public zipcode: string, public deaNumber: number){
        super(custId,address1,zipcode);

        }

        get CustomerDeaNumber(): number{
                return this.deaNumber;
        }
}

class b2bOHeader extends OrderHeader{

    constructor(public custId: number, public address1: string, public zipcode: string, public partner: string){
        super(custId,address1,zipcode);

        }

        get Businesspartner() : string{
            return this.partner;
        }

}

// Substitution 1 for dea customer
let oh: OrderHeader = new DEAOHeader(1234,'LONDON','000',787);
const dea_customer= oh.CustomerId;

// Substitution 2 for b2b customer does not break oh 
oh= new b2bOHeader(656,'NEW YORK','999','AMAZON');
const b2b_customer= oh.CustomerId;