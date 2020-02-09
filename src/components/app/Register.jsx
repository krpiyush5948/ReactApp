import React  from 'react'



class Register extends React.Component{
    constructor(props){
        super(props)
        this.state ={name:'',
                     email:''
                    };
       
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleNameChange(event){
        this.setState({name:event.target.value});
    }
    handleEmailChange(event){
        this.setState({email:event.target.value});
    }

    handleSubmit(event){
        alert('A name is submitted'+ this.state.name);
        event.preventDefault();
        console.log("handle suibmit");
    }

    render(){
        return(
            <div className="container">
               <form onSubmit= {this.handleSubmit}>
                   <div className="col-sm-6">
                   <label>
                    Name:
                    <input type="text" value = {this.state.value} onChange={this.handleNameChange}/>
                   </label>
                   </div>
                   <div className="col-sm-6">
                   <label>
                    Email:
                    <input type="text" value = {this.state.value} onChange={this.handleEmailChange}/>
                   </label>
                   </div>
                   <div className="col-sm-6">
                   <input type ="submit" className="btn btn-primary"value = "submit"/>
                   </div>
               </form>
              
            </div>
        )
    }
}

export default Register;