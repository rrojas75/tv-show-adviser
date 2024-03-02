import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You'll probably like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShow, i) => {
          return (
            <TVShowListItem
              key={tvShow.id}
              tvShow={tvShow}
              onClickImage={onClickItem}
            />
          );
        })}
      </div>
    </div>
  );
}
