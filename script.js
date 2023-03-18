const startBTn = document.getElementById("btn");

function fetchApi(url, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
        }, time);
    });
}

function promiseAPI1() {
    return fetchApi("https://dummyjson.com/posts", 1000);
}
function promiseAPI2() {
    return fetchApi("https://dummyjson.com/products", 2000);
}
function promiseAPI3() {
    return fetchApi("https://dummyjson.com/todos", 3000);
}


startBTn.addEventListener("click", () => {
    promiseAPI1()
        .then((data) => {
            console.log(data);
            // const myHTML = 
            
            });

        })
        // .then