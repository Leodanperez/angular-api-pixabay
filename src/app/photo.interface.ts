import {ICarouselItem} from "./shared/carousel/Icarousel-interface";

export interface Hit {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export interface Photo {
  total: number;
  totalHits: number;
  hits: Hit[];
}

export interface SearchForm {
  q: string
}

export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
  {
    id: 1,
    title: {
      first: 'TITULO',
      second: 'Principal'
    },
    subtitle: 'Esto es una gran descripción',
    link: '/',
    image: 'assets/images/1.jpg'
  },
  {
    id: 2,
    title: {
      first: 'TITULO',
      second: 'Segundo'
    },
    subtitle: 'Esto es una gran descripción',
    link: '/',
    image: 'assets/images/2.jpg'
  },
  {
    id: 3,
    title: {
      first: 'TITULO',
      second: 'Tercero'
    },
    subtitle: 'Esto es una gran descripción',
    link: '/',
    image: 'assets/images/3.jpg'
  },
  {
    id: 4,
    title: {
      first: 'TITULO',
      second: 'Cuarto'
    },
    subtitle: 'Esto es una gran descripción',
    link: '/',
    image: 'assets/images/4.jpg'
  },
  {
    id: 5,
    title: {
      first: 'TITULO',
      second: 'Quinto'
    },
    subtitle: 'Esto es una gran descripción',
    link: '/',
    image: 'assets/images/5.jpg'
  }
];
