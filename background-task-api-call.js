"use strict";
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    console.log(request)
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.status}`)
    }
}

//fetching  api using fetch 

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
    });

//second approach of fetching API
async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
}
getUsers().then(response => {
    console.log(response)
})

//using axios third party js library
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        // console.log(response.data);
    }, err => {
        console.log(err)
    })

//fetching api using JQUERY
let data = $(document).ready(function() {
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users",
        type:"GET",
        success:function(result) {
            console.log(result)
        },
        error:function(err) {
            console.log(err);
        }
    })
})