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


function creatPosts(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 4000);
}
// creatPosts({ title: 'post three title',  body: 'post three body'});
// //above direct createPosts call not render out new post 
// //as it taks longer(4s) than getPosts 1s, beyond that 1 s, the DOM already render
// // this is where call back coming in to solve the problem
creatPosts({ title: 'post three title',  body: 'post three body'}, getPosts);
//key point, pass function as parameter  