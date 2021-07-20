const Main = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        paddingTop: "50px",
        padding: "1em",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Main;
