

// https://dmitripavlutin.com/javascript-fetch-async-await/

const urlBase = "https://58717807e0f449edb5fcb157313592f1.vfs.cloud9.us-east-1.amazonaws.com/"
// const urlBase = "http://localhost:8080/"

export async function getData(route) {
    const response = await fetch(urlBase + route);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const data = await response.json();
    return data;
}


export function postData(route, data) {
    fetch(urlBase + route, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            if (response.status === 409) {
                alert("Duplicated!");
            }
            else {
                throw Error(response.statusText);
            }
        }
        else {
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}

export function deleteData(route) {
    fetch(urlBase + route, {
            method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
}

export function putData(route, data) {
    fetch(urlBase + route, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
        }
        else {
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}




// async function fetchMoviesAndCategories() {
//   const [moviesResponse, categoriesResponse] = await Promise.all([
//     fetch('/movies'),
//     fetch('/categories')
//   ]);

//   const movies = await moviesResponse.json();
//   const categories = await categoriesResponse.json();

//   return {
//     movies,
//     categories
//   };
// }

// fetchMoviesAndCategories().then(({ movies, categories }) => {
//   movies;     // fetched movies
//   categories; // fetched categories
// });
