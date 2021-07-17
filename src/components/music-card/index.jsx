import Button from "../button";
import Link from "../link";
import style from "./style.module.css";
const MusicCard = ({ data }) => {
  const { album, artists, external_urls, name } = data;

  //notice that one music can have more than 1 artist
  const artistText = artists.map((artist, idx) => {
    const isLast = idx === artists.length - 1;
    const text = isLast ? artist.name : artist.name + ",";
    return (
      <Link href={artist.external_urls.spotify} key={artist.id}>
        {text}
      </Link>
    );
  });
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Link href={album.external_urls.spotify}>
          <img
            className={style.albumArt}
            src={album.images[0].url}
            alt={album.name}
          />
        </Link>
      </div>
      <div className={style.description}>
        <div>
          <h4 className={style.title}>
            <Link href={external_urls.spotify}>{name}</Link> - {artistText}
          </h4>
          <h5 className={style.albumText}>
            <Link href={album.external_urls.spotify}>{album.name}</Link>
          </h5>
        </div>
        <div>
          <Button
            onClick={() => {
              alert(data.id);
            }}
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
