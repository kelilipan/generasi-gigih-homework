import style from "./style.module.css";
const Button = ({ leftIcon, children, variant = "default", ...props }) => {
  return (
    <button className={`${style.btn} ${style["btn-" + variant]}`} {...props}>
      {leftIcon} {children}
    </button>
  );
};

export default Button;
