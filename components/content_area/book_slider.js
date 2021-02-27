import Slider from '@farbenmeer/react-spring-slider';


function Book_slider() {
    return(
        <Slider activeIndex={1}
        slidesAtOnce={5}
        auto = {0}
        hasBullets = {false}
        hasArrows = {true}
        BulletComponent={BulletComponent}
        //ArrowComponent={ArrowComponent}
        //onSlideChange={onSlideChange}
        //setSlideCustom={setSlideCustom}
        >
        <img src="https://img-gorod.ru/uf/24/287/24287.jpg" alt="picture1"></img>
        <img src="https://img-gorod.ru/uf/24/133/24133.jpg" alt="picture2"></img>
        <img src="https://img-gorod.ru/uf/24/043/24043.jpg" alt="picture3"></img>
    </Slider>
    )
}
export default Book_slider