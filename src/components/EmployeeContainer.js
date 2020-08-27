import React, { Component } from "react";
import Container from "./Container";
import Table from "./Table";


import SearchForm from "./SearchForm";
import TitleCard from "./TitleCard";
import API from "../utils/API";



class EmployeeContainer extends Component {
    state = {
        result: [{}],
        name: "",
        filteredEmployee: [{}],
        order: "descend"
    };


    // whenever this component loads the search employees is called
    componentDidMount() {
        API.search()
            .then(res => this.setState({ result: res.data.results, filteredEmployee: res.data.results }))
            .catch(err => console.log(err));
    }

    heading = [
        {
            name: "image",
            width: "20%",

        },
        {
            name: "name",
            width: "20%",

        },
        {
            name: "email",
            width: "20%",

        }, {
            name: "phone",
            width: "20%",

        }, {
            name: "dob",
            width: "20%",

        },
    ]

    handleInputChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSort = heading => {
        if (this.state.order === "descend") {
            this.setState({ order: "ascend" })
        } else {
            this.setState({ order: "descend" })
        }
        const compare = (a, b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first)

                } else {
                    return a[heading] - b[heading];
                }
            } else {
                if (this.state.order === "ascend") {
                    if (a[heading] === undefined) {
                        return 1;
                    } else if (b[heading] === undefined) {
                        return -1;
                    }
                    else if (heading === "name") {
                        return b[heading].first.localeCompare(a[heading].first)

                    } else {
                        return b[heading] - a[heading];
                    }
                }
            }
            const sorted = this.state.filteredEmployee.sort(compare)
            this.setState({ filteredEmployee: sorted })
        }
    };


    searchEmployees = event => {
        const search = event.target.value
        const filter = this.state.result.filter(data => {
            let values = Object.values(data).join("").toLowerCase()
            return values.indexOf(search.toLowerCase()) !== -1
        })
        this.setState({
            filteredEmployee: filter
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees()
    }




    render() {
        return (
            <Container>
                <TitleCard />
                <SearchForm
                    searchEmployees={this.searchEmployees}

                    handleInputChange={this.handleInputChange}


                />
                <Table
                    heading={this.heading}
                    filteredEmployee={this.state.filteredEmployee}
                    handleSort={this.handleSort}
                />
            </Container>

        );
    }

}





export default EmployeeContainer; 