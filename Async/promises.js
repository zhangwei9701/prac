const posts = [
    {
        title: 'post one title',
        body: 'post one dody'
    },
    {
        title: 'post two title',
        body: 'post two dody'
    }
];

function getPosts(){
    setTimeout(() => {
        let output ='';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

//instead of passing a callback, we return the promise
function createPosts(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Sth was wrong');
            }
        }, 4000);
    });
}

// //most of time, we dealing how to hand response
// //But we shall know how to create Promise on our own
// createPosts({ title: 'post three title',  body: 'post three body'})
// .then(getPosts)
// .catch(err => console.log(err));
//////Promise.all
const promise1 = Promise.resolve('OK, anything is ok');
const promise2 = 3423;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, '8888'));
//Promise.all takes Array of Promises
Promise.all([promise1,promise2,promise3]).then((values)=> console.log(values));

//fetch api promise examples, 
const promiseRes = fetch('https://jsonplaceholder.typicode.com/todos/3')
.then(res => res.json())
.then((res)=>console.log(res))


////Let make Async / Await fucntion to handle Promises
////it's way of handle the response, funcation labled async
//// async function funcName(){} and await waits for an action to complete
async function itstart(){
    await createPosts({ title: 'post itstart title',  body: 'post itstart body'});
    getPosts();
}
itstart();
//more elegant way to handle promises
async function fetchTodos(){
    const resHtml = await fetch('https://jsonplaceholder.typicode.com/todos/5');
    console.log(resHtml);
    const resJson = await resHtml.json();
    console.log(resJson);
}
fetchTodos();