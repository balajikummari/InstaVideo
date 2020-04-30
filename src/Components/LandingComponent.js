import React, { Component } from 'react';
import InstaGrid from "./InstaGrid"
import { Card ,Button, Form} from 'react-bootstrap';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { profile : null, isSubmit : false}
    }
    async handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
         this.setState(change)
       }
       onsubmit(e){
           e.preventDefault()
        this.setState({isSubmit : true})
       }

    render() { 
        const renderPics = () =>{
                if(this.state.isSubmit){
                  return(<InstaGrid account={String(this.state.profile)} numberOfMediaElements={30} />)
                }
         }
        return ( 
                <div>
                      <Form.Control type="text" placeholder="Profile Name" name="profile" onChange = {this.handleChange.bind(this)} required/>
                      <Button variant="primary" onClick={this.onsubmit.bind(this)} block> GetPics</Button>
                       {renderPics()}
                 </div>
         );
    }
}
 
export default Landing;