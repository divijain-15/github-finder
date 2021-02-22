
import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         name:"",
         email:"",
         sumit:""
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

      
}
         handleChangeName(event){
            this.setState({
              name: event.target.value,
    
            });
          }

          handleChangeEmail(event){
            this.setState({
              email: event.target.value,
    
            });
          }

          submitted(){
            alert("form submitted")
          }

     render(){
      return(
        <div>
            <h1>my name is {this.state.name}</h1>
      <h1>{this.state.email}</h1>
            <form>
              <div class="input">
                <h1 class="heading">Login form</h1>
                <input type="text" value={this.state.name} onChange={this.handleChangeName}placeholder="name"/>
                <input type="email" value={this.state.email}onChange={this.handleChangeEmail} placeholder="email"/>

              <select>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <input type="submit" value="Submit" onClick={this.submitted}></input>
                </div>
            </form>
        </div>
    )
}
    };