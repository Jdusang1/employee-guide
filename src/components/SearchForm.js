import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">

                <input
                    onChange={e => props.searchEmployees(e)}

                    name="name"
                    className="form-control text-center"
                    type="text"
                    placeholder="Search Employee's"
                    id="search">
                </input>

            </div>
        </form>
    )
};

export default SearchForm; 