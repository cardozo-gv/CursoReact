import React from 'react';


function FormularioComponent(props){
  return(
    <main>
      <form>
        <input
          name="firstname"
          placeholder="First name"
          onChange={props.handleChange}/> <br/>
          <input
            name="lastname"
            placeholder="Last name"
            onChange={props.handleChange}/> <br/>
            <input
              name="age"
              placeholder="Age"
              onChange={props.handleChange}/> <br/>
              <h3>Gender</h3>
              <label>Male</label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={props.gender === "male"}
                onChange={props.handleChange}/>
                <label>Female</label>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  checked={props.data.gender === "female"}
                  onChange={props.handleChange} />
                  <br/>
                  <h3>Location</h3>
                  <select onChange={props.handleChange} name="location">
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Tucumán">Tucumán</option>
                    <option value="Mendoza">Mendoza</option>
                  </select>
                  <br/><br/>

                  <label>
                    <input
                      type="checkbox"
                      name="isVegan"
                      onChange={props.handleChange}
                      checked = {props.data.isvegan}
                    /> is Vegan?
                  </label> <br/>
                  <label>
                    <input
                      type="checkbox"
                      name="isKosher"
                      onChange={props.handleChange}
                      checked = {props.data.isKosher}
                    /> is Kosher?
                  </label> <br/>
                  <label>
                    <input
                      type="checkbox"
                      name="isLactosaFree"
                      onChange={props.handleChange}
                      checked = {props.data.isLactosaFree}
                    /> is lactosa free?
                  </label> <br/>
                  <input type="submit" value="Submit"/>
                </form>
                <h1>Entered Information</h1>
                Your name : {props.data.firstname} {props.data.lastname} <br/>
                Your age : {props.data.age} <br/>
                Gender : {props.data.gender} <br/>
                Location : {props.data.location}
                Your dietary Restriction : <br/>
                <p>
                  Vegan : {props.data.isVegan ? "Yes" : "No"} <br/>
                  Kosher : {props.data.isKosher ? "Yes" : "No"} <br/>
                  Lactosa free : {props.data.isLactosaFree ? "Yes" : "No"} <br/>
                </p>

              </main>
  )
}

export default FormularioComponent;
