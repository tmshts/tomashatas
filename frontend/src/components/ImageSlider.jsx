import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom'

// credit to monsterlessonsacademy (GitHub Account) with the ImageSlider

const ImageSlider = ({ projects_fotos, parentWidth }) => {

    const timeRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };

    
    const slidesContainerStyles = {
        display: 'flex',
        height: '100%',
        transition: 'transform ease-out 1s',
    }

    
    const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: parentWidth * projects_fotos.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`
    })
    

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundImage: `url(${projects_fotos[currentIndex]})`,
    };

    const getSlidesStylesWithBackground = (slideIndex) => ({
        ...slideStyles,
        //backgroundImage: `url(${projects_fotos[slideIndex]})`,
    });

    
    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#A52A2A',
        zIndex: 1,
        cursor: 'pointer'
    };
    
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#A52A2A',
        zIndex: 1,
        cursor: 'pointer'
    };
    

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projects_fotos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === projects_fotos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, projects_fotos]);
    

    
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        transform: 'translate(0, -100%)',
        marginTop: '35px'
    };
    
    const dotStyles = {
        margin: '5px 3px',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#A52A2A',
    };
    
    const padding_link = {
        fontSize: 20,
        textDecoration: "none",
        fontWeight: 'bold',
    }

    const view_project_style = {
        position: 'absolute',
        padding: '7px',
        transform: 'translate(0, -35%)',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer',
        border: 'solid white 2px',
        borderRadius: '10px',
        backgroundColor: '#A52A2A',
        width: '100px'

    };

    const center_view_project_style = {
        display: 'flex',
        justifyContent: 'center',
        //position: 'absolute',
        //left: '45%',
        marginTop: '-35px',
        textAlign: 'center',
      }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    };
    

    const slidesContainerOverflowStyles = {
        overflow: 'hidden',
        height: '100%'
    }

    
    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            goToNext();
        }, 5000);

        return () => clearTimeout(timeRef.current)
    }, [goToNext]);
    

    return (


        <div style={sliderStyles}>

            <div style={leftArrowStyles} onClick={goToPrevious}> ❮ </div>
            <div style={rightArrowStyles} onClick={goToNext}> ❯ </div>

            <div style={slidesContainerOverflowStyles}>

            <Link style={padding_link} to={`/projects/${currentIndex + 1}`}>

                <div style={getSlidesContainerStylesWithWidth()}>
                    {projects_fotos.map((_, slideIndex) => (
                        <div key={slideIndex} style={getSlidesStylesWithBackground(slideIndex)}> </div>
                    ))}
                </div>

                <div style={center_view_project_style}>
                    <div style={view_project_style}>
                        More info
                    </div>
                </div>

            </Link>

            </div>

            <div style={dotsContainerStyles}>
                {projects_fotos.map((slide, slideIndex) => (
                <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)} >⬤</div> 
                )
                )}
            </div>

        </div>
    )

}

export default ImageSlider