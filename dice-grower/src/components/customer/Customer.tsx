import CustomerModel from '../../models/CustomerModel';

function Customer(props: {customer: CustomerModel}) {
    return (
      <h1> This represents a Customer with a desire of {props.customer.desiredFruit.toString()} </h1>
    );
 
  }
  
  export default Customer;
 