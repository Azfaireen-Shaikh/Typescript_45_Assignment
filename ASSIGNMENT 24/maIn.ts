let name_1: string = "azfaireen "
let name_2 : string = "azfaireen shaikh"
let name_3 : string =" miss azfaireen shaikh"

if (name_1 ==name_3){
    console.log("names are equal")
}else{
    console.log("names are not equal")
}

if (name_1!=name_2){
    console.log("names are equal")
}

if (name_1!=name_3){
    console.log("names are equal")
}


let age_1 : number = 18
let age_2 : number = 22

if(age_1== 18){
    console.log("eligible for vote")
}

if(age_1== 22){
    console.log("eligible for vote in elder catogary")
}

if(age_1 != 22){
        console.log("eligible for vote in elder catogory")
    }

if(age_1 <=age_2 ){
        console.log("YOUNGER")
    }
    
    if(age_2 >=age_1 ){
        console.log("OLDER")
    }


    if(age_1==18 &&age_2== 22){
        console.log("person is eligible for vote")
    }

    if (age_1==18 && age_2 ==22){
console.log("person is eligible not for vote")
    }
    
    if (age_1 ==18 || age_2==22){
        console.log("person is eligible for vote")
    }

    if(age_1==18 ||age_2==22){
        console.log("person is eligible not for vote")
    }


    let country : string []= ["pakistan","india","america","china"]
    if (country.includes("pakistan")){
        console.log("pakistan is in country list")
    }





if (country.includes ("america")){
console.log("america is not include in an array")
}
    
    