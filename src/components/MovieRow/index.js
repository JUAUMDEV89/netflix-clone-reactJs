import React, {useState} from 'react';

import './style.css';

function MovieRow ({ title, items }){

    const [scrollX, setscrollX] = useState(-400);

    function handleLeftArrow(){
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setscrollX(x);
    } 

    function handleRightArrow(){
       let x = scrollX - Math.round(window.innerWidth / 2); 
       let listW = items.results.length * 150;
       if((window.innerWidth - listW) > x){
           x = (window.innerWidth - listW) - 60; 
       }
       setscrollX(x);
    }

    return(
       <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--left" style={{color:'white'}} onClick={handleLeftArrow}>
                    <i class="material-icons">chevron_left</i>
                </div>
                <div className="movieRow--right" style={{color:'white'}} onClick={handleRightArrow}>
                    <i class="material-icons">chevron_right</i>
                </div>
                <div className="movieRow--list" style={{
                    marginLeft:scrollX,
                    width:items.results.length * 150
                }}>  
                    {items.results.length > 0 && items.results.map((items, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={items.original_title}/>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default MovieRow;