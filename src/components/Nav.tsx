import { Link } from "@tanstack/react-router";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-6 text-lg font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/test/$id" params={{id: "id1"}} search={{page: 2}}>test id1</Link>
        </li>
        <li>
          <Link to="/test/$id" params={{id: "id2"}} search={{page: 4}}>test id2</Link>
        </li>
        {/* <li>
          <Link to="/badlink">bad link</Link>
        </li> */}
      </ul>
    </nav>
  );
}
