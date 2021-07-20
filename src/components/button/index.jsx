import style from "./style.module.css";
const Button = ({ leftIcon, children, ...props }) => {
  return (
    <button className={style.btn} {...props}>
      {leftIcon} {children}
    </button>
  );
};

export default Button;
