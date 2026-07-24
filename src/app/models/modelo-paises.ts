export interface ModeloPaises {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  cca3: string;
  maps: {
    googleMaps: string;
  };
  timezones: string[];
  continents: string[];
}
