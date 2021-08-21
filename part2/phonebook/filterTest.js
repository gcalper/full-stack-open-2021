const objArray = [
    {
        name: "Cagri",
        number: "123"
    },
    {
        name: "Hasan",
        number: "545"
    }
]

const normalArray = ["asd", "zxc"]

/* const filteredNormal = normalArray.filter(word => word === "asd")
console.log(filteredNormal); */

const filteredArray = objArray.filter(obj => obj.name === "Cagri")
console.log(filteredArray)