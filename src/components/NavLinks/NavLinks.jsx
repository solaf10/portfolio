import "./NavLinks.css";

const NavLinks = ({ className, scroll, links }) => {
  return (
    <ul className={className ? className : ""}>
      {links.map((link) => (
        <li key={link.id} className={scroll === link.id ? "active" : ""}>
          {link.icon && (
            <a title={link.text} onClick={() => link.handler(link.id)}>
              {link.icon}
            </a>
          )}
          <a className="text" onClick={() => link.handler(link.id)}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
