import {ISight} from '../app/store/models/sights.model';
import {PlaceMark} from '../app/model/placeMark';
import {delay, Observable, of} from 'rxjs';
import {PaginatedList} from '../app/model/pagination';

export const getPlaceMarks = (): PlaceMark[] => [
  {
    longitude: 53.669376,
    latitude: 23.821614,
    iconColor: '#ffb452',
  },
  {
    longitude: 53.669532,
    latitude: 23.820628,
    iconColor: '#ffb452',
  },
];

export const getSight = (): Observable<ISight> => {
  return of({
    name: 'mac',
    description: '',
    date: new Date(),
    founder: 'Иванушка Пудель',
    mainImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
    ],
    id: 0,
    rating: 0,
    location: {
      country: 'Беларусь',
      region: 'Регион',
      city: 'Гродно',
    },
    coordinates: {
      longitude: 17.1,
      latitude: 18.1,
    },
    categories: [
      'Норма1ль',
      'Норм2аль',
      'Но3рмаль',
      'Нор4маль',
      'Норма5ль',
      'Н66ормаль',
    ],
  }).pipe(delay(1000));
};

export const getSights = (): Observable<PaginatedList<ISight>> => {
  return of({
    total: 1,
    data: [
      {
        name: 'mac',
        description: '',
        date: new Date(),
        founder: '',
        mainImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        ],
        id: 0,
        rating: 0,
        location: {
          country: 'Беларусь',
          region: 'Регион',
          city: 'Гродно',
        },
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        categories: ['Нормаль'],
      },
      {
        name: 'mac',
        description: '',
        date: new Date(),
        founder: '',
        mainImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        ],
        id: 0,
        rating: 0,
        location: {
          country: 'Беларусь',
          region: 'Регион',
          city: 'Гродно',
        },
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        categories: ['Нормаль'],
      },
      {
        name: 'mac',
        description: '',
        date: new Date(),
        founder: '',
        mainImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        ],
        id: 0,
        rating: 0,
        location: {
          country: 'Беларусь',
          region: 'Регион',
          city: 'Гродно',
        },
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        categories: ['Нормаль'],
      },
      {
        name: 'mac',
        description: '',
        date: new Date(),
        founder: '',
        mainImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        ],
        id: 0,
        rating: 0,
        location: {
          country: 'Беларусь',
          region: 'Регион',
          city: 'Гродно',
        },
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        categories: ['Нормаль'],
      },
      {
        name: 'mac',
        description: '',
        date: new Date(),
        founder: '',
        mainImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        ],
        id: 0,
        rating: 0,
        location: {
          country: 'Беларусь',
          region: 'Регион',
          city: 'Гродно',
        },
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        categories: ['Нормаль'],
      },
      {
        name: 'mac',
        description: '',
        date: new Date(),
        founder: '',
        mainImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        ],
        id: 0,
        rating: 0,
        location: {
          country: 'Беларусь',
          region: 'Регион',
          city: 'Гродно',
        },
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        categories: ['Нормаль'],
      },
      {
        name: 'mac',
        description: '',
        date: new Date(),
        founder: '',
        mainImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
        ],
        id: 0,
        rating: 0,
        location: {
          country: 'Беларусь',
          region: 'Регион',
          city: 'Гродно',
        },
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        categories: ['Нормаль'],
      },
    ],
  }).pipe(delay(1000));
};
