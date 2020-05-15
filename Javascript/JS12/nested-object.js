const user1 = {
    id: 206,
    email: 'lana@gmail.com',
    personalInfo: {
        name: 'lana',
        address: {
            line1: 'rennbahnstr 14',
            line2: '22111',
            city: 'Hamburg'
            
        },
        hobbies : ['sport','javascript']
    }    
}

// to get the name 
//const name = user.personalInfo.name;

// user city 
const userCity = user.personalInfo.address.city;



const user1 = {
    id: 101,
    email: 'sam@gmail.com'
}
//const name = user1.personalInfo.name; //  Cannot read property 'name' of undefined

// const name = user1 && user1.personalInfo ? user1.personalInfo.name : null;

// const name = ((user1 || {}).personalInfo || {}).name;
const name1 = ((user1 || {}).personalInfo || {}).name;
console.log(name1);

