import React, { useState, useEffect } from 'react';

const DummyApi = () => {
    const [dummyData, setDummyData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if(!response.ok){
            throw new Error ('Network Dead')
        }
        return response.json()
        })
      .then(json => {
        setDummyData(json) 
        setIsLoading(false)})
        .catch(error => {
            setError(error.message)
            setIsLoading(false)
        })
    }, [] )
    
    return (
        <>
            <h3>Dummy API</h3>
           {isLoading ? (
            <div className="loading-spinner">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
      ) : error ?(
            <div className="error-message">
            <p>{error}</p>
            </div>):(
        <div>
                <table border='2px' width='100%'>
                        <tr>
                            <th>Name:</th>
                            <th>Email:</th> 
                            <th>Phone:</th>
                        </tr>
                {dummyData.map((user, index) => (
                        
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                    </table>
                </div>
      )
           }
                
           
        </>
    )
} 
export default DummyApi;