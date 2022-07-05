import React from "react";
import '../../css/form.css'

export default function Transactions(){
  const [formData, setFormData] = React.useState(
    {
      customer_name: "",
      type_of_interest: "",
      amount: "",
      interest: "",
      value:"",
      income:"",
    }
  )
  
  const [percentage, setPercentage] = React.useState(0);
  //console.log(formData)
  
  React.useEffect(() => {
    console.log('Printing fprform data', formData)
    let totalValue = 0;
    if(formData.interest === "Percentage"){
      const result = (formData.amount * formData.value) / 100;
      totalValue = result + Number(formData.amount);
      setPercentage("Rs." + totalValue);
    }else if(formData.interest === "Amount"){
      const result = ((formData.value * 100) / formData.amount);
      totalValue = result;
      setPercentage(totalValue + "%");
    }
    
  }, [formData]);


  function fieldChange(event){
    const {name, value } = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]:  value
      }
    })
  }
  function fieldSubmit(event){
    event.preventDefault()
    console.log(formData)
  }
  
  return(
    <div className="rightSidePage">
      <h1>Transaction Information</h1>
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
            <label htmlFor="type_of_interest">Type Of Interest</label>
            <div className="twoFields">
              <div>
                <select
                  id="type_of_interest"
                  name="type_of_interest"
                  onChange={fieldChange}
                  value={formData.type_of_interest}
                >
                  <option value="">--- Choose ---</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Daily">Daily</option>
                  <option value="One time">One time</option>
                </select>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Days"
                  onChange={fieldChange}
                  name="period"
                  value={formData.period}
                />
              </div>
            </div>
          </div>
          <div className="form-fields">
            <label>Amount</label>
            <div>
              <input 
                type="text" 
                placeholder="Amount"
                onChange={fieldChange}
                name="amount"
                value={formData.amount}
              />
            </div>
          </div>
          <div className="form-fields">
            <label>Interest</label>
            <div className="twoFields">
            <div>
                <input 
                  type="text" 
                  placeholder="Value"
                  onChange={fieldChange}
                  name="value"
                  value={formData.value}
                />
              </div>
              <div>
              <select
                id="interest"
                name="interest"
                onChange={fieldChange}
                value={formData.interest}
              >
                <option value="">--- Choose ---</option>
                <option value="Percentage">Percentage</option>
                <option value="Amount">Amount</option>
              </select>
              </div>
            </div>
          </div>
          
          <div className="form-fields">
            <label>Income</label>
            <div className="inputBox">
              {percentage}
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