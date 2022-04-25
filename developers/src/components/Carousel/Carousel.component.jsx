
import React, {useState, useEffect} from 'react';
import styles from './Carousel.module.css';
const photos = [
    "https://cdn.pixabay.com/photo/2020/07/11/23/36/meeting-5395615__340.jpg",
    "https://cdn.pixabay.com/photo/2019/12/06/15/50/business-4677631_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/11/24/09/56/team-5772023_960_720.jpg"
];
const text = ["We will help you","to find right person for your job","or a team of developers"]
const delay = 5500;
const Carousel = () => {
    const [index, setIndex] = useState(0);
    

    useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === photos.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {};
      }, [index]);

    return(
        <div className={styles.slideshow}>
            <div 
                className={styles.slideshowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {photos.map((photo, index) =>(
                    <div className={styles.slide} key={index}>
                        <h4 
                        className={styles.title} 
                        key={index}
                        >
                            {text[index]}
                        </h4>
                        <img 
                        className={styles.photo}
                        src={photo} alt='practice'/>
                        
                    </div>

                ))}
               
                
            </div>

        </div>
    )
}
export default Carousel;