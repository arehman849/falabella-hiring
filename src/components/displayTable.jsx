import React from 'react';

const DisplayTable = ({data}) => {
    console.log(data);
    return (
        <table id='directory-table'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Ratings</th>
                    <th>duration</th>
                </tr>
                {
                    data.length ? data.map((movieData, index) => (
                        <tr key={`${movieData.name}-${movieData.ratings}-${index}`}>
                            <td>{movieData.name}</td>
                            <td>{movieData.ratings}</td>
                            <td>{movieData.duration}</td>
                        </tr>

                    )) : 
                    <tr>
                        <td colSpan='3'>
                            <center>
                                <p id='no-results'>
                                    no results found
                                </p>
                            </center>
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default DisplayTable;