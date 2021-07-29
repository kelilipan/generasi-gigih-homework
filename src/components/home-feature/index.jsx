import style from "./style.module.css";

const Feature = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Maw maw maw?</h2>
      <div className={style.imageContainer}>
        <div className={style.cardContainer}>
          <img src="http://placekitten.com/g/200/200" alt="meong meong meng" />
          <p>
            Meow meow meow meow meow meow meow meow meow meow meow meow meow
            meow meow
          </p>
        </div>
        <div className={style.cardContainer}>
          <img src="http://placekitten.com/g/200/200" alt="meong meong meng" />
          <p>
            Meow meow meow meow meow meow meow meow meow meow meow meow meow
            meow meow
          </p>
        </div>
        <div className={style.cardContainer}>
          <img src="http://placekitten.com/g/200/200" alt="meong meong meng" />
          <p>
            Meow meow meow meow meow meow meow meow meow meow meow meow meow
            meow meow
          </p>
        </div>
        <div className={style.cardContainer}>
          <img src="http://placekitten.com/g/200/200" alt="meong meong meng" />
          <p>
            Meow meow meow meow meow meow meow meow meow meow meow meow meow
            meow meow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
