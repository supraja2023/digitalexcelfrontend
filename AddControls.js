import React, { useState } from 'react';
import AddControls from './AddControls.css'
import {  postData } from './Service';
function YourComponent() {
  const [formData, setFormData] = useState({
    standard: '',
    controls: [
      {
        control: '',
        subcontrols: [
          {
            refno: '',
            rational: '',
            rationalrating: '',
            evidence: '',
          },
        ],
      },
    ],
  });

  const handleChange = (e, index, subcontrolIndex) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };
   
    if (subcontrolIndex !== undefined) {
      updatedFormData.controls[index].subcontrols[subcontrolIndex][name] = value;
    } else if (name === 'control') {
      updatedFormData.controls[index].control = value;
    } else {
      updatedFormData[name] = value;
    }

    setFormData(updatedFormData);
    console.log(updatedFormData);
  };

  const addControl = () => {
    setFormData({
      ...formData,
      controls: [
        ...formData.controls,
        {
          control: '',
          subcontrols: [
            {
              refno: '',
              rational: '',
              rationalrating: '',
              evidence: '',
            },
          ],
        },
      ],
    });
  };

  const addSubcontrol = (index) => {
    const updatedFormData = { ...formData };
    updatedFormData.controls[index].subcontrols.push({
      refno: '',
      rational: '',
      rationalrating: '',
      evidence: '',
    });
    setFormData(updatedFormData);
  };

  const handleSubmit = async () => {
    
    let res= await postData(formData)
    if (res.status === 201) 
    {
      alert("Added Controls and SubControls Successfully");
      setFormData({
        standard: '',
        controls: [
          {
            control: '',
            subcontrols: [
              {
                refno: '',
                rational: '',
                rationalrating: '',
                evidence: '',
              },
            ],
          },
        ],
      });
    }
     else
     {
      alert("please enter valid standard or control or subcontrol details")
     }
     //console.log('success',formData)
      
     
  };

  return (
    <div class="mx-4 my-4">
      <div className="form-group col-lg-3 col-md-3 col-sm-12 col-xs-12"> 
       <label htmlFor="standardInput" className="form-label mt-4">Enter Standard </label> 
       <input
        type="text"
        name="standard"
        placeholder="Standard"
        className="form-control" 
        value={formData.standard}
        onChange={(e) => handleChange(e)}
      /></div>
    

      {formData.controls.map((control, controlIndex) => (
        <div key={controlIndex}>
          <input
            type="text"
            name="control"
            placeholder="Control"
            className="mt-2 col-lg-3 col-md-3 col-sm-12 col-xs-12"
            value={control.control} 
            onChange={(e) => handleChange(e, controlIndex)}
          />

          {control.subcontrols.map((subcontrol, subcontrolIndex) => (
            <div key={subcontrolIndex}>
              <input
                type="text"
                name="refno"
                placeholder="Ref No"
                className='col-lg-3 col-md-3 col-sm-12 col-xs-12'
                value={subcontrol.refno}
                onChange={(e) => handleChange(e, controlIndex, subcontrolIndex)}
              />

              <input
                type="text"
                name="rational"
                placeholder="Rational"
                className='col-lg-3 col-md-3 col-sm-12 col-xs-12'
                value={subcontrol.rational}
                onChange={(e) => handleChange(e, controlIndex, subcontrolIndex)}
              />

              <input
                type="text"
                name="rationalrating"
                placeholder="Rational Rating"
                className='col-lg-3 col-md-3 col-sm-12 col-xs-12'
                value={subcontrol.rationalrating}
                onChange={(e) => handleChange(e, controlIndex, subcontrolIndex)}
              />

              <input
                type="text"
                name="evidence"
                placeholder="Evidence"
                value={subcontrol.evidence}
                onChange={(e) => handleChange(e, controlIndex, subcontrolIndex)}
              />
            </div>
          ))}
          <button className="btn btn-primary mt-2" onClick={() => addSubcontrol(controlIndex)}>Add Subcontrol</button>
        </div>
      ))}
      <button className="btn btn-primary mt-2" onClick={addControl}>Add Control</button>
      <div className="submit-btn">  <button className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button></div>
      
    </div>
  );
}

export default YourComponent;
