import slide from '../../assets/img/slide.png';
import './style.scss';

function Carousel() {
  return (
    <div className="main__carousel">
      <img src={slide} alt="slide" />
    </div>
  );
}

export default Carousel;
