export interface ITrack {
    trackNumber: number;
    trackName: string;
    trackLength: number;
    trackPrice: number;
};

export interface IAlbumInfo {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: ITrack[];
};

export interface Album {
    id: number;
    artist: string;
    album: IAlbumInfo;
};
