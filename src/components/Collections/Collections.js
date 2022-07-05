import React from "react";
import "../../css/form.css"

export default function Collections(){
  const [formData, setFormData] = React.useState(
    {
      customer_name:"",
      amount_received:"",
      amount_type:"",
      type_of_payment:""
    }
  )
  function fieldChange(event){
      const {name, value} = event.target
      setFormData(prevFormData =>{
        return{
          ...prevFormData,
          [name] : value
        }
      })
  }

  function fieldSubmit(event){
    event.preventDefault()
    console.log(formData)
  }
  return(
    <div  className="rightSidePage">
      <h1>Collections Information</h1>
      <form onSubmit={fieldSubmit}>
        <div className="full-form">
          <div className="form-fields">
            <label htmlFor="customer_name">Name</label>
            <div>
            <select
              id="customer_name"
              name="customer_name"
              onChange={fieldChange}
              value={formData.customer_name}
            >
              <option value="">--- Choose ---</option>
              <option value="Nitin">Nitin</option>
              <option value="Sachin">Sachin</option>
            </select>
            </div>
          </div>
          <div className="form-fields">
            <label>Amount Received</label>
            <div>
              <input 
                type="text" 
                placeholder="Amount Received"
                onChange={fieldChange}
                name="amount_received"
                value={formData.amount_received}
              />
            </div>
          </div>
          <div className="form-fields">
            <label htmlFor="amount_type">Amount Type</label>
            <div>
            <select
              id="amount_type"
              name="amount_type"
              onChange={fieldChange}
              value={formData.amount_type}
            >
              <option value="">--- Choose ---</option>
              <option value="Full">Full</option>
              <option value="Partial">Partial</option>
            </select>
            </div>
          </div>
          
          <div className="form-fields">
            <label htmlFor="type_of_payment">Type of Payment</label>
            <div>
            <select
              id="type_of_payment"
              name="type_of_payment"
              onChange={fieldChange}
              value={formData.type_of_payment}
            >
              <option value="">--- Choose ---</option>
              <option value="Cash">Cash</option>
              <option value="UPI">UPI</option>
              <option value="Cheque">Cheque</option>
              <option value="NEFT">NEFT</option>
            </select>
            </div>
          </div>
          
          <div className="center">
            <button type="submit" className="white-btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}