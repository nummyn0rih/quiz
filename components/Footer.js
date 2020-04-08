import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__socials">
        <Socials />
      </div>
      <div className="footer__email">
        <Link href="mailto:quiz@quiz.com">
          <a className="email">quiz@quiz.com</a>
        </Link>
      </div>
      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1em;
          background: #f7f8fa;
        }
        .footer__socials {
          display: flex;
          justify-content: space-between;
          width: 210px;
          margin-top: 1em;
        }
        .footer__email {
          margin-top: 1em;
          color: #4b4b4b;
        }
        .email {
          text-decoration: none;
          color: #4b4b4b;
        }
      `}</style>
    </div>
  );
}
