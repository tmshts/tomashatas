const Home_picture = ({ foto }) => {

    return (
        <>
            <div className="home_picture_container">

                <div className="home_welcome_picture">
                    <img src={foto} className="foto_home" alt='main_picture_tomas_hatas'/>
                </div>

                <div className="home_welcome_text_down">
                    I am junior web/software developer
                </div>

            </div>
        </>
    )
}

export default Home_picture
