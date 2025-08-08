import React from "react";

function Library() {
    const books = [
        { names: 'javascript', pages: '100' },
        { names: 'html', pages: '200' },
        { names: 'css', pages: '300' },
        { names: 'react', pages: '400' }
    ];

    return (
        <div>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        {book.names}책은 {book.pages}페이지 입니다.
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Library;