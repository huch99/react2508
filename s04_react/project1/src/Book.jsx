function Book(props) {
    return (
        <div>
            <h1>이 책 이름은 {props.name}</h1>
            <h2>이 책은 {props.total}페이지로 이루어져 있다.</h2>
        </div>
    );
}

export default Book;