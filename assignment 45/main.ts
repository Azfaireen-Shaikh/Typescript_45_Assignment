//Task 45
export type car = {
    manyfacture : string
    model : string
    [key : string] : any ;
}
function careatecar(manyfacture : string , model : string , optional : Record<string,any>) : car {
    return{
        manyfacture,
        model,
        ...optional
    }
}

const mycar : car = careatecar ("toyota","corolla",{color :"silver", year : "2024"})
console.log(mycar)