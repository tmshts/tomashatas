import main_picture from '../assets/main_picture.jpeg'


const Home_picture = () => {

    return (
        <>
            <div className="home_picture_container">

                <div className="home_welcome_text_down">
                    Hi, I am junior web/software developer
                </div>


                <div className="home_welcome_picture">
                    <img src={main_picture} className="foto_home" alt='main_picture_tomas_hatas'/>
                </div>


            </div>
        </>
    )
}

export default Home_picture
