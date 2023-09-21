import { Link } from "react-router-dom";
import {AiFillHome as H} from "react-icons/ai";

export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React / Coded By - RM551754, RM550989, RM550769, RM551154 and RM98903</h1>
        <ul>
          <li>
            <Link to="/">HOME - <H/></Link>
          </li>
          <li>
            <Link to="/produtos">PRODUTOS</Link>
          </li>

        </ul>
      </header>
    </>
  );
}