import Loading from "./loading";
import { useGlobalContext } from "./context";

const Result = () => {
  const { isLoading, searchData } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loading />;
      </div>
    );
  } else {
    return (
      <div>
        {!searchData ? (
          <p>song not found</p>
        ) : (
          searchData.map((song, index) => {
            const { data } = song;
            const { name, artists, album, id, albumOfTrack, duration } = data;
            const { items } = artists;
            const { profile } = items[0];

            const { coverArt } = albumOfTrack;
            const { sources } = coverArt;
            const { url } = sources[0];
            return (
              <div className="result-item" key={index}>
                <div className="img-container">
                  <img src={url} alt="music-img" />
                </div>
                <div className="desc-container">
                  <p>{name}</p>
                  <p>{profile.name}</p>
                  <p>{albumOfTrack.name}</p>
                  <p>{duration.totalMilliseconds / 60000}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
};

export default Result;
