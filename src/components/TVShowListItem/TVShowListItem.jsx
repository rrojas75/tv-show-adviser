import { IMAGE_THUMBNAIL_BASE_URL } from "../../config";
import s from "./style.module.css";

const MAX_TITLE_CHAR = 20;

export function TVShowListItem({ tvShow, onClickImage }) {
  const onClick = () => {
    onClickImage(tvShow);
  };
  const tvShowNameDisplay =
    tvShow.name.length > MAX_TITLE_CHAR
      ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
      : tvShow.name;
  return (
    <div onClick={onClick} className={s.container}>
      <img
        src={`${IMAGE_THUMBNAIL_BASE_URL}${tvShow.backdrop_path}`}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>{tvShowNameDisplay}</div>
    </div>
  );
}
