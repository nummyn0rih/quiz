import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href="/">
        <a className="header__link logo">QUIZ</a>
      </Link>
      <Link href="/tests">
        <a className="header__link">Тесты</a>
      </Link>
      <Link href="/rating">
        <a className="header__link">Рейтинг</a>
      </Link>
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 12px;
          background: #2e2e2e;
        }
        .header__link {
          padding: 0 1em;
          text-decoration: none;
          color: #fff;
        }
        .logo {
          color: #d47e00;
        }
      `}</style>
    </div>
  );
}
