import style from "./style.module.css";
const Link = ({ children, isExternal = true, ...props }) => {
  return (
    <a
      className={style.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
