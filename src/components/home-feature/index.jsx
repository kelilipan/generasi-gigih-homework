import { Heading, SimpleGrid } from "@chakra-ui/react";
import style from "./style.module.css";

const Feature = () => {
  return (
    <div className={style.container}>
      <Heading as="h2" fontSize="3xl" textAlign="center" mb="4">
        Maw maw maw?
      </Heading>
      <SimpleGrid columns={[2, 2, 4]}>
        <div className={style.cardContainer}>
          <img src="https://placekitten.com/g/200/200" alt="meong meong meng" />
          <p>
            Meow meow meow meow meow meow meow meow meow meow meow meow meow
            meow meow
          </p>
        </div>
        <div className={style.cardContainer}>
          <img src="https://placekitten.com/g/200/200" alt="meong meong meng" />
          <p>
            Meow meow meow meow meow meow meow meow meow meow meow meow meow
            meow meow
          </p>
        </div>
        <div className={style.cardContainer}>
          <img src="https://placekitten.com/g/200/200" alt="meong meong meng" />
          <p>
            Meow meow meow meow meow meow meow meow meow meow meow meow meow
            meow meow
          </p>
        </div>
        <div className={style.cardContainer}>
          <img src="https://placekitten.com/g/200/200" alt="meong meong meng" />
          <p>
            Meow meow meow meow meow meow meow meow meow meow meow meow meow
            meow meow
          </p>
        </div>
      </SimpleGrid>
    </div>
  );
};

export default Feature;
