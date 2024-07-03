import React from 'react'

const AllPkis = () => {

    let pkis = [
        {
            "public":"1234324",
            "private":"asdjhbd",
            "date" : new Date().toLocaleDateString()
        },
        {
            "public":"1234324",
            "private":"asdjhbd",
            "date" : new Date().toLocaleDateString()
        },
        {
            "public":"1234324",
            "private":"asdjhbd",
            "date" : new Date().toLocaleDateString()
        },
        {
            "public":"1234324",
            "private":"asdjhbd",
            "date" : new Date().toLocaleDateString()
        },
        {
            "public":"1234324",
            "private":"asdjhbd",
            "date" : new Date().toLocaleDateString()
        },
        {
            "public":"1234324",
            "private":"asdjhbd",
            "date" : new Date().toLocaleDateString()
        },
        {
            "public":"1234324",
            "private":"asdjhbd",
            "date" : new Date().toLocaleDateString()
        },
        {
            "public":"1234324",
            "private":"asdjhbd",
            "date" : new Date().toLocaleDateString()
        },
        
    ]
  return (
    <div className='w-100 text-center'>
        <h2 >List Of All Your Keys</h2>
        <div className="list my-4 w-100 " >
            <div className="header w-100 border d-flex justify-content-around align-items-center ">
                <h4>Public</h4>
                <h4>Private</h4>
                <h4>Date</h4>
            </div>
            {pkis.map((pki, index) =>  {
                return <div key={index} className='my-1 d-flex justify-content-around align-items-center'>
                    <p> {pki.public}</p>
                    <p>{pki.private}</p>
                    <p>{pki.date}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default AllPkis