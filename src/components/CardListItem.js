export default function CardLisItem(props) {
  return (
    <li className="card-component__list__item">
      <header>
        <span>PRO</span>
        <div className="card-component__list__item__img">
          <img 
            src={props.image}
            alt={props.name + "'s Profile"} />
        </div>
        <div className="card-component__list__item__info">
          <h2>{props.name}</h2>
          <h3>{props.city}</h3>
          <p>{props.description}</p>
          <div className="card-component__list__item__info__link">
            <a 
              rel="noreferrer" 
              href="./App.js">
              Message
            </a>
            <a
              rel="noreferrer" 
              href="./App.js">
              Following
            </a>
          </div>
        </div>
      </header>
      <footer>
        <span>Skills</span>
        <ul>
          {props.skillsItem}
        </ul>
      </footer>
    </li>
  );
}
