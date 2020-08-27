// import React from "react"


// function SearchResultsContainer() {





//     return (
//         <tbody>
//             {/* is there a better way to write this?  */}
//             {props.developerState.filteredUsers[0] !== undefined && props.developerState.filteredUsers[0].name !== undefined ? (
//                 props.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
//                     return (
//                         <tr key={login.uuid}>
//                             <td data-th="Image" className="align-middle">
//                                 <img
//                                     src={picture.large}
//                                     alt={`Face of ${name.first} ${name.last}`}
//                                     className="img-responsive"
//                                 />
//                             </td>
//                             <td data-th="Name" className="name-cell align-middle">
//                                 {name.first} {name.last}
//                             </td>
//                             <td data-th="Phone" className="align-middle">
//                                 {phone}
//                             </td>
//                             <td data-th="Email" className="align-middle">
//                                 <a href={"mailto:" + email} target="__blank">
//                                     {email}
//                                 </a>
//                             </td>
//                             <td data-th="DOB" className="align-middle">
//                                 {formatDate(dob.date)}
//                             </td>
//                         </tr>
//                     );
//                 })
//             ) : (
//                     <></>
//                 )}
//         </tbody>
//     );
// }