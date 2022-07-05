import React from "react";
import '../../css/form.css'

export default function Customers(){
  const [formData, setFormData] = React.useState(
    {
      information: "Customer",
      business_name: "",
      first_name: "",
      last_name: "",
      address1: "",
      address2: "",
      pincode: "",
      city: "",
      mobile: "",
      phone: "",
      email: "",
      referred_by: ""
    }
  )
  //console.log(formData)

  function fieldChange(event){
    const {name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  function fieldSubmit(event){
    event.preventDefault()
    console.log(formData)
  }
  
  return(
    <div className="rightSidePage">
      <h1>Customer Information</h1>
      <form onSubmit={fieldSubmit}>
        <div className="full-form">
        <div className="form-fields">
          <label htmlFor="information">Select Information</label>
          <div>
          <select
            id="information"
            name="information"
            onChange={fieldChange}
            value={formData.information}
          >
            <option value="">--- Choose ---</option>
            <option value="Customer">Customer</option>
            <option value="Investor">Investor</option>
          </select>
          </div>
        </div>
        <div className="form-fields">
          <label>First Name</label>
          <div>
            <input 
              type="text" 
              placeholder="First Name"
              onChange={fieldChange}
              name="first_name"
              value={formData.first_name}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>Last Name</label>
          <div>
            <input 
              type="text" 
              placeholder="Last Name"
              onChange={fieldChange}
              name="last_name"
              value={formData.last_name}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>Address1</label>
          <div>
            <textarea
              name="address1"
              placeholder="Address1"
              onChange={fieldChange}
              value={formData.address1}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>Address2</label>
          <div>
            <textarea
              name="address2"
              placeholder="Address2"
              onChange={fieldChange}
              value={formData.address2}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>Pincode</label>
          <div>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={fieldChange}
              value={formData.pincode}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>City</label>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={fieldChange}
              value={formData.city}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>Mobile Number</label>
          <div>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              onChange={fieldChange}
              value={formData.mobile}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>Phone Number</label>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={fieldChange}
              value={formData.phone}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>Email</label>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={fieldChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="form-fields">
          <label>Referred By</label>
          <div>
            <input
              type="text"
              name="referred_by"
              placeholder="Referred By"
              onChange={fieldChange}
              value={formData.referred_by}
            />
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