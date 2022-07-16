import CustomerModel from '../../models/CustomerModel';
import Customer from '../customer/Customer';

function Storefront(props: {}) {
    const customers: CustomerModel[] = [];
    return (
        <tbody>
            This is the storefront
            {customers.map((customer: CustomerModel) => {
               return <Customer customer={customer}></Customer>
            })}
        </tbody>
    );
 
  }

  export default Storefront;
 