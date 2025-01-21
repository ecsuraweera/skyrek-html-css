let studentList= [
    {
        name : "Jhon",
        maths : 50,
        eng : 65,
        parent:{
            name: "Peter",
            phone: 12345677
        }

    },
    {
        name : "Alice",
        maths : 80,
        eng : 75,
        parent:{
            name: "Anne",
            phone: 12345679
        }
    },
    {
        name : "Spoon",
        maths : 52,
        eng : 85,
        parent:{
            name: "Anne",
            phone: 12345679
        }
    }
]

console.log(studentList[2].parent.name)