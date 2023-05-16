import { Link } from 'react-router-dom';
import './style.scss';

function Empty({ img, title, text }) {
  return (
    <div className="empty">
      <div className="empty__wrapper">
        <img className="empty__emoji" src={img} alt="emoji" />
        <h3 className="empty__title">{title}</h3>
        <p className="empty__text">{text}</p>
        <Link to="/" className="empty__card btn">
          Повернутись назад
        </Link>
      </div>
    </div>
  );
}

export default Empty;
