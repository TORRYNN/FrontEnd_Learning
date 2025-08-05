// Objects Literals:
const student ={
    name:"Pratham",
    age:23,
    mark:94.4
};

const post={
    username:"_pratham_chauhan",
    content:"",
    likes:9,
    repost:0,
    tags:15

}

console.log(post.tags);

console.log(post["tags"]);

post.likes=12;

console.log(post.likes);
post.location="Delhi";

console.log(post.location);

console.log(post) 

const student1 = {
    name:{first_name:"john", 
        last_name:"carter"
    },
    Address:{
        City:"Toronto",
        Country:"Canada"
    }

}

console.log(student1)

console.log(Math.floor(Math.random()*10)+1);

// Qs : Generate a random number between 1-100

console.log(Math.floor(Math.random()*100+1))

// Qs : Generate a random number between 1-5

console.log(Math.floor(Math.random()*5)+1);                                    