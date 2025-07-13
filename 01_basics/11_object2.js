//__________________________________________how to declare object using constructor_______________________________________

//const tinderUser = new Object();//singleton object
//console.log(tinderUser);//{}
//or
const tinderUser = {};//non singleton object
tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedin = false;
//console.log(tinderUser);//{ id: '123abc', name: 'sam', isLoggedin: false }

const regularuser = {
    email: "spme@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prince",
            lastname:"upadhyay"
        }
    }
}
//console.log(regularuser);
/*output:
{
  email: 'spme@gmail.com',
  fullname: { userfullname: { firstname: 'prince', lastname: 'upadhyay' } }
}
 */
//console.log(regularuser.fullname);//{ userfullname: { firstname: 'prince', lastname: 'upadhyay' } }
//console.log(regularuser.fullname.userfullname);//{ firstname: 'prince', lastname: 'upadhyay' }

//_____________________________________concat two objects________________________________________________________
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

//const obj3 = { obj1,obj2 };//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj3 = { ...obj1, ...obj2 };//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }//spread operator
//or
const obj3 = Object.assign({}, obj1, obj2);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj3);

const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    }
]
//console.log(users[1].email);//h@gmail.com

//console.log(tinderUser);

//1.keys():Returns the names of the enumerable string properties and methods of an object.
//console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedin' ]//its output is array data type

//2.values():Returns an array of values of the enumerable own properties of an object
//console.log(Object.values(tinderUser));

//3.entries():Returns an array of key/values of the enumerable own properties of an object
//console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedin', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedin'));//true

//#######################################################################destructure of object################################################################################################

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
//course.courseInstructor//avoid this
//## destructure of object
const { courseInstructor: instructor } = course;
console.log(instructor);//hitesh



