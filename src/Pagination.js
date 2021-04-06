import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++ ){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button className="pagebutton" onClick={() => paginate(number)} href="#">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination