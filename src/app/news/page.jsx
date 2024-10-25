import Link from 'next/link';
import React from 'react';

const Newspage = () => {


    
    const news = [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "age": 29,
          "address": {
            "street": "123 Maple Street",
            "city": "Springfield",
            "state": "IL"
          }
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "age": 34,
          "address": {
            "street": "456 Oak Avenue",
            "city": "New York",
            "state": "NY"
          }
        },
        {
          "id": 3,
          "name": "Mike Johnson",
          "email": "mike.johnson@example.com",
          "age": 41,
          "address": {
            "street": "789 Pine Road",
            "city": "Los Angeles",
            "state": "CA"
          }
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "email": "emily.davis@example.com",
          "age": 22,
          "address": {
            "street": "101 Elm Street",
            "city": "Chicago",
            "state": "IL"
          }
        },
        {
          "id": 5,
          "name": "Robert Wilson",
          "email": "robert.wilson@example.com",
          "age": 37,
          "address": {
            "street": "202 Birch Boulevard",
            "city": "Miami",
            "state": "FL"
          }
        }
      ]
      
    return (
        <div>
       <div className='grid grid-cols-3 gap-4'>
       {
            news.map(news => <div key={news.id} > 
             <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{news.name}</h2>
                    <p>{news.email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            <Link href={`/news/${news.id}`}>View Address</Link>
                        </button>
                    </div>
                </div>
            </div>
            </div>)
           }
       </div>
        </div>
    );
};

export default Newspage;