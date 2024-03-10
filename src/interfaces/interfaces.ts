export interface IUser {
  id?: string; // uuid v4
  login: string;
  password?: string;
  version: number;
  createdAt: number;
  updatedAt: number;
}

export interface IArtist {
  id?: string;
  name: string;
  grammy: boolean;
}

export interface ITrack {
  id?: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

export interface IAlbum {
  id?: string;
  name: string;
  year: number;
  artistId: string | null;
}

export interface IFavorites {
  artists: string[];
  albums: string[];
  tracks: string[];
}

export interface ICreateUserDto {
  login: string;
  password: string;
}

export interface IUpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export interface IFavoritesResponse {
  artists: IArtist[];
  albums: IAlbum[];
  tracks: ITrack[];
}
