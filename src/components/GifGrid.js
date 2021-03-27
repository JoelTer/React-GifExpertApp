import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const { gifs, loading } = useFetchGifs(category);

    console.log(gifs, loading)

    return (
        <> 
            <h2 className="animate__animated animate__fadeIn">{category}</h2>
            { loading && <h3 className="animate__animated animate__flash">Loading...</h3>}
            <div className='card-grid'>
                <ol>
                    {gifs.map( (img) => <GifGridItem key={img.id} {...img} /> )} 
                </ol> 
            </div>
        </>
    )
}

export default GifGrid;
