export default function CardComponent(props) {
  return (
    <section className="card-component">
      <ul className="card-component__list">{props.children}</ul>
    </section>
  );
}
