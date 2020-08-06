import "../styles/song-row.css"

const SongRow = ({ track }) => {
    return (
        <div className="songRow" >
            <img className="songRow__album"
                src={track.album.images[0]?.url}
                alt="album-art" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(",")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
};
export default SongRow;