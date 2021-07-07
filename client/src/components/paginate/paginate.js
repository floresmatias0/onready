import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../../styles/Paginate.module.css';

const Paginate = (props) => {

    var pageNumber = []

    for(var i = 0; i <= Math.ceil(props.anime/props.postPerPage);i++){
        pageNumber.push(i)
    }

    return (
        <div className={styles.container}>
            <ul className={styles.cuantity}>
            {pageNumber.map(elem =>{
                return ( 
                    <li>
                        <Link 
                            onClick={() => props.pagination(elem)} 
                            href='!#'
                        >
                            {elem} 
                        </Link>
                    </li>   
                )
            })}
            </ul>
        </div> 
    )
}

export default Paginate;