import React from "react";
import EmployeeDetail from "./EmployeeDetail";

function Table({ heading, filteredEmployee, handleSort }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {heading.map(({ name, width }) => {
                            return (
                                <th className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {

                                        handleSort(name.toLowerCase())

                                    }}>
                                    <span className="pointer"></span>
                                    {name}


                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <EmployeeDetail
                    filteredEmployee={filteredEmployee} />
            </table>
        </div>
    )
}

export default Table; 