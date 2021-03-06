import React, {Component} from 'react';
import axios from 'axios';

class Cert extends Component{
    constructor(props){

        super(props)

        this.state={
            Certificate:[]

        }    
    }
    componentDidMount(){
        axios.get('https://dsc-adgitm.herokuapp.com/certificate/sample')
        .then(response=>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        return(
            <div>
                Certificate
            </div>
        )
    }
}
export default Cert