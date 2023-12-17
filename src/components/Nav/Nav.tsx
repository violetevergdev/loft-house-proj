import { navList } from "../../data/nav.ts";

const Nav = ({ className }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav className="nav">
      <ul className={className}>
        {navList?.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
