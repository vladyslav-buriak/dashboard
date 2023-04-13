export interface ICustomers {
    name: string;
    phone: string;
    email: string;
    id: number;
    address: IContacts;
    company: ICompany

}
interface IContacts {
    city: string;

}
interface ICompany {
    name: string;

}


export interface ICustomersSliceState {
    customersItems: ICustomers[];
    loading: string;
  }


  export interface ICreateThunk {
    users: ICustomers[];
  }



