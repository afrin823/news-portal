
const page = ({params}) => {

    const {name, email} = news.find((news) => news.id == params.id)
    return (
        <div className="h-screen">
            <h2 className="text-3xl text-center">{name}</h2>
            <h2 className="text-3xl text-center">{email}</h2>
        </div>
    );
};
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
export default page;