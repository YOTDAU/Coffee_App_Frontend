import React from "react"
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";



const CategoryCard =({ id, name, selectCategory, image}) => {

    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
      }));

      const bind = useScroll(event => {
        set({
          transform: `perspective(500px) rotateY(${
            event.scrolling ? event.delta[0] : 0
          }deg)`
        });
      });
    

    return(
        <animated.div className='cardCat' {...bind()} style={{...style}} varianet="outlined" onClick={ () => selectCategory(id)}>
            <h3>{name}</h3>
            <img src={image} />
            
        </animated.div>    
    )
}

export default CategoryCard