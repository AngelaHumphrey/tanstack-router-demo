import { NavLink } from 'react-router';

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-6 text-lg font-semibold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/test/id1">test id1</NavLink>
        </li>
        <li>
          <NavLink to="/test/id2">test id2</NavLink>
        </li>
        <li>
          <NavLink to="/badlink">bad link</NavLink>
        </li>
      </ul>
    </nav>
  );
}
