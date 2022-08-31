use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "John Maclean",
        Email: "tribute2johnny@gmail.com",
        status: true
    },
    {
        name: "Chris Christianson",
        Email: "ChrissyC@gmail.com",
        status: false
    },
    {
        name: "Maggie Magson",
        Email: "BigMags@gmail.com",
        status: true
    }
]);