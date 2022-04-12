import {delay, Observable, of} from 'rxjs';
import {Sight} from '@store/models/sights.model';
import {PaginatedList} from '@model/pagination';

export const getSight = (): Observable<Sight> => {
  return of({
    name: 'mac',
    description: '123123',
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
      region: 'Гродненская область',
      city: 'Гродно',
    },
    coordinates: {
      longitude: 53.669376,
      latitude: 23.821614,
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

export const getSights = (): Observable<PaginatedList<Sight>> => {
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
        location: {
          country: 'Беларусь',
          region: 'Регион',
          city: 'Гродно',
        },
        rating: 0,
        coordinates: {
          longitude: 53.669532,
          latitude: 23.820628,
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
