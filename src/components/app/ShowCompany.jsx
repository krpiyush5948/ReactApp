import React from 'react'
import axios from 'axios'


class ShowCompany extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            companies: [],
            isLoaded: false,
            companyName: ''

        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/getCompany')
            .then(res => {
                console.log(res);
                this.setState({ companies: res.data })
            })
            .catch(error => { console.log("error in fetching list of company") })



    }


    render() {
        const { companies } = this.state
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            fontFamily: "Arial"
        };

        return (
            <div>
                <table>
                    <tr>
                        <th> ComapnyNAme</th>
                        <th style={mystyle}>Company Address</th>
                    </tr>
                </table>
                {
                    companies.map(company =>
                        <>
                            <tr>
                                <th>{company.companyName}</th>
                                <th>{company.companyAddress}</th>
                            </tr>
                        </>)
                }
            </div>
        )
    }


}


export default ShowCompany;