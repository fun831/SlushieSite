import React, { Component } from 'react';

const initial_state = {
   name: '',
   address: '',
   credit_info: '',
   
}

export default class Order extends Component {
   constructor(){
       super();
   }
   
 
   handleInputChange(event) {
       this.setState({ [event.target.name]: event.target.value });
   }

   render() {
   
       return (
           <div className='order_container'>
               <input type="text" className="order_inputs" name="name" placeholder="name" onChange={this.handleInputChange}/>
               <input type="text" className="order_inputs" name="address" placeholder="address" onChange={this.handleInputChange}/>
               <input type="text" className="order_inputs" name="credit_info" placeholder="credit_info" onChange={this.handleInputChange}/>
               <button type='submit'>Submit</button>

               <p>
                   Thank you {this.name} for placing your order. Your food will be shipped to your address
                   {this.address}. Thanks for shopping with us. {this.credit_info}
               </p>
           </div>
       );
   }
}