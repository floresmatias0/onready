import React,{useState} from 'react';
import {connect} from 'react-redux';
import styles from '../styles/Home.module.css';
import Paginate from '../components/navbar/paginate';
import Catalog from '../components/navbar/catalog';

const Home = ({ANIME}) => {

    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(20)

    const indexOfLastPage = currentPage * postPerPage;
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    const currentPost = ANIME.animes.slice(indexOfFirstPage,indexOfLastPage)

    const pagination = (number) => setCurrentPage(number)

    return (
        <div className={styles.container}>
            <h1>hola soy un home</h1>
            {ANIME && ANIME.loadingAnimes ? (
                <div className={styles.contentCards}>
                    {/* {ANIME.animes.map((point,i) => {
                        return(
                            <div key={i} className={styles.card}>
                                <p>{point.name.slice(0,23)}</p>
                                <img src={point.image.tiny} alt="poster"/>
                                <p>Since: {point.origin}</p>
                                <p>Episodes: {point.totalEpisodes}</p>
                                <span>
                                 {point.idYoutube && point.idYoutube !== null ? (
                                    <p className={styles.trailer} onClick={() => popUp(`https://www.youtube.com/watch?v=${point.idYoutube}`)}>
                                        Trailer
                                    </p>
                                 ):(
                                    <p>No trailer</p>
                                 )}
                                </span>
                            </div>
                        )
                    })} */}
                    <Paginate 
                        anime={ANIME.animes.length} 
                        postPerPage={postPerPage} 
                        pagination={pagination}/>

                    <Catalog anime={currentPost} />
                </div>
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ANIME: state.animedb
    }
} 

export default connect(mapStateToProps)(Home);