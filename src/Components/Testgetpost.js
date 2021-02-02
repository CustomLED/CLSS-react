import React, { Component } from "react";

// componentDidMount() {
//     // Simple GET request using fetch
//     fetch('https://api.npms.io/v2/search?q=react')
//         .then(response => response.json())
//         .then(data => this.setState({ totalReactPackages: data.total }));
// }

// class Testgetpost extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     error: null,
    //     isLoaded: false,
    //     items: []
    //   };
    // }
  
//     componentDidMount() {
//         // Simple GET request using fetch
//         fetch('http://localhost:3000/api/posts')
//             .then(response => response.json())
//             .then(console.log);
//     }
// // //     componentDidMount() {
// //       fetch("http://localhost:3000/api/posts")
// //         .then(res => res.json())
// //         .then(
// //           (result) => {
// //             this.setState({
// //               isLoaded: true,
// //               items: result.items
// //             });
// //           },
// //           // Note: it's important to handle errors here
// //           // instead of a catch() block so that we don't swallow
// //           // exceptions from actual bugs in components.
// //           (error) => {
// //             this.setState({
// //               isLoaded: true,
// //               error
// //             });
// //           }
// //         )
// //     }
  
// //     render() {
// //       const { error, isLoaded, items } = this.state;
// //       if (error) {
// //         return <div>Error: {error.message}</div>;
// //       } else if (!isLoaded) {
// //         return <div>Loading...</div>;
// //       } else {
// //         return (
// //           <ul>
// //             {items.map(item => (
// //               <li key={item.id}>
// //                 {item.name} {item.price}
// //               </li>
// //             ))}
// //           </ul>
// //         );
// //       }
// //     }
// //   }
  
// export default Testgetpost;

// function getPost() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200)
//     let container = document.getElementById("container");
//     let responses = JSON.parse(this.responseText)
//     console.log(this.responseText);
//     window.responseText = this.responseText;
//     }
// };
//     xhttp.open("GET", "http://localhost:3000/api/posts", true)
//     xhttp.send();
// }

// getPost();

//Get request teachers example XML

// function getUserPost() {
//     console.log("starting request");

//     let request = new XMLHttpRequest();
//     request.open('GET', 'http://localhost:3000/api/posts', true);
//     request.onload =() => {
//         if (request.status >= 200 && request.status < 400) {
//             console.log(request.responseText);
//         } else {
//             console.log("Error");
//             console.log(request);
//         }
//     };
//     request.onerror =() => {
//         console.log("Connection Error");
//     };
//     request.send();
// }

// getuserPost

//Ajax query example

// function getUserPost() {
//     console.log("starting request");
//     $.ajax({
//         url: 'http://localhost:3000/api/posts',
//         type: 'GET',success: (data) => {
//             console.log(data);
//         }
//         error: (error) => {
//             console.log("Error: " + error)
//             console.log(error);
//         }
//     });
// }

// // fetch example
// postapilink = "http://localhost:3000/api/posts"
// let postFetch = fetch(postapilink)
// .then((response) => response.json()) //returns a promise
// .then((data) => {console.log(data)}) // handles the data and runs a function
// .catch((error) => {console.log("error: " + error)}) // handles the errors 
