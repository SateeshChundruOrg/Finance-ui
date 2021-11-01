export class CustomerModel {
    customerId:string;
    firstName: string;
    lastName: string;
    address?: string;
    phoneNumber: string;
    aadhar?: string;
    emailAddress: string;
    payments?: Payment[] = [];//one to many relation ship
}
export class Payment {
    customerId:string;
    money: any;
    interest: any;
    givenDate: any;
}

export enum PageType {
    CUSTOMER_EDIT,
    ALL_CUSTOMERS,
    CUSTOMER_DETAILS,
    CUSTOMER_VIEW_DETAILS,
    CUSTOMER_DELETE,
    ADD_PAYMENT,
    VIEW_PAYMENT
}