function Custom(props) {
  let { title, description } = props;

  return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
  );
}

Custom.defaultProps = {
  title: 'Breaking News',
  description: 'World in news',
}

export default Custom;
