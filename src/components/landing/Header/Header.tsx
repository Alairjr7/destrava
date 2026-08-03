export function Header() {
  return (
    <header>
      <h1>
        <a href="#">DESTRAVA</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#como-funciona">Como funciona</a>
          </li>
          <li>
            <a href="#beneficios">Benefícios</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
        </ul>
      </nav>
      <div>
        <button type="button" className="bg-brand">
          Entrar
        </button>
        <button type="button">Começar agora</button>
      </div>
    </header>
  );
}
