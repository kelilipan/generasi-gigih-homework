import Spinner from "../spinner";
import style from "./style.module.css";
const Button = ({
  leftIcon,
  children,
  variant = "default",
  isLoading,
  ...props
}) => {
  return (
    <button className={`${style.btn} ${style["btn-" + variant]}`} {...props}>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          {leftIcon} {children}
        </>
      )}
    </button>
  );
};

export default Button;
