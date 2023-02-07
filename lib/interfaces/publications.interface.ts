export interface PublicationsResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  currentPage: number;
  results: Publication[];
}

export interface Publication {
  id: string;
  profile_id: string;
  title: string;
  description: string;
  content: string;
  picture: null;
  image_url: null;
  created_at: string;
  updated_at: string;
  city: City;
  publication_type: PublicationType;
  tags: Tag[];
}

export interface City {
  id: string;
  name: CityName;
  state: State;
}

export enum CityName {
  Culiacan = 'Culiacan',
}

export interface State {
  id: string;
  name: StateName;
  Country: Tag;
}

export interface Tag {
  id: string;
  name: string;
}

export enum StateName {
  Sinaloa = 'Sinaloa',
}

export interface PublicationType {
  id: string;
  name: PublicationTypeName;
  description: Description;
}

export enum Description {
  Concert = 'concert',
  MarcasYTiendas = 'Marcas y tiendas',
}

export enum PublicationTypeName {
  ArtistasYConciertos = 'Artistas y conciertos',
  MarcasYTiendas = 'Marcas y tiendas',
}
