function Header(props) {
  return (
    <header>
      <h1><img src={props.image} alt="Logo" style={{ height: '100px' }} />{props.title}</h1>
    </header>
  );
}

export { Header }