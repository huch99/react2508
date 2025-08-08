import React from "react";

function Book(props) {    
        return( <h2>이 {props.name}책은 {props.pages}페이지입니다.</h2>)
}

// class Book extends React.Component {
//     render() {
//         return <h2>이 {props.name}책은 {props.pages}페이지입니다.</h2>
//     }
// }

export default Book;