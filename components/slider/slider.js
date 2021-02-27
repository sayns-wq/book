
import Slider from '@farbenmeer/react-spring-slider';
import PropTypes from 'prop-types';
import './slider.css'
const slider_img = [<img src="img/screen.jpg" alt=""></img>, <img src="img/picture1.jpg" alt="picture1"></img>,
<img src="img/picture2.jpg" alt="picture2"></img>,<img src="img/picture3.jpg" alt="picture3"></img>]
const slider_li = slider_img.map((img) =>
<div>{img}</div>
);

function MySlider() {
    const onSlideChange = (index) => console.log(`changed to slide ${index}`);
	const setSlideCustom = () => 1;

	const BulletComponent = ({ onClick, isActive }) => (
		<li
			style={{
				width: "15px",
                height: "15px",
                borderRadius : '15px',
				backgroundColor: "gray",
				
				margin: "0 2px",
				opacity: isActive && "0.5",
			}}
			onClick={onClick}
		/>
	);

	BulletComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		isActive: PropTypes.bool.isRequired,
	};

	const ArrowComponent = ({ onClick, direction }) => {
		return (
			<div
				style={{
					opacity:0.5
				}}
				onClick={onClick}
			>
				{direction}
			</div>
		);
	};

	ArrowComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		direction: PropTypes.string.isRequired,
	};


    return (
        <div className = "Slider_wrapper">
        <Slider activeIndex={1}
			slidesAtOnce={1}
			auto = {7000}
			hasBullets = {true}
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
        </div>
 
    );
  }

  
  export default MySlider;
  