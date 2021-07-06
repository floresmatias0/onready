import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/Home.module.css'

const Home = ({ANIME}) => {
    console.log(ANIME.animes)

    const popUp = (URL) => {
        window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=640,height=400,left = 50,top = 50');
    }

    return (
        <div className={styles.container}>
            <h1>hola soy un home</h1>
            {ANIME && ANIME.loadingAnimes ? (
                <div className={styles.contentCards}>
                    {ANIME.animes.map((point,i) => {
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
                    })}
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