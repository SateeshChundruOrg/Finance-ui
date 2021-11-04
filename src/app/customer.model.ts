export class CustomerModel {
    customerId: string;
    name: string;
    address: string;
    phoneNumbers: PhoneNumberType[];
    emailAddress: string;
}

export class phoneNumber {
    phoneNumber: string;
    type: PhoneNumberType;
}
export class Payment {
    customerId: string;
    money: any;
    interest: any;
    givenDate: any;
}

export enum PhoneNumberType {
    LAND_LINE = 'landline',
    MOBILE = 'mobile'
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