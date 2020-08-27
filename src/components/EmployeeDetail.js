import React from "react";



function EmployeeDetail({ filteredEmployee }) {
    return (
        <tbody>
            {
                filteredEmployee[0] !== undefined && filteredEmployee[0].name !== undefined ? (
                    filteredEmployee.map(({
                        login, name, picture, phone, email, dob
                    }) => {
                        return (
                            <tr key={login.uuid}>
                                <td data-th="image">
                                    <img src={picture.medium}></img>

                                </td>
                                <td data-th="name">
                                    {name.first} {name.last}</td>
                                <td data-th="phone">
                                    {phone}

                                </td>
                                <td data-th="email">
                                    {email}

                                </td>
                                <td data-th="dob">
                                    {dob.date}

                                </td>
                            </tr>
                        )
                    })
                ) : (
                        <>
                        </>
                    )
            }

        </tbody>
    );
}

export default EmployeeDetail; 