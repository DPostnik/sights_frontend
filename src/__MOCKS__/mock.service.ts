import {SightsStateModel} from '../app/store/models/sights.model';
import {PlaceMark} from '../app/model/placeMark';
import {Observable, of} from 'rxjs';

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

export const getSights = (): Observable<SightsStateModel> => {
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
        country: 'Беларусь',
        region: 'Регион',
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        city: 'Гродно',
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
        country: 'Беларусь',
        region: 'Регион',
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        city: 'Гродно',
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
        country: 'Беларусь',
        region: 'Регион',
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        city: 'Гродно',
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
        country: 'Беларусь',
        region: 'Регион',
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        city: 'Гродно',
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
        country: 'Беларусь',
        region: 'Регион',
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        city: 'Гродно',
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
        country: 'Беларусь',
        region: 'Регион',
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        city: 'Гродно',
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
        country: 'Беларусь',
        region: 'Регион',
        coordinates: {
          longitude: 17.1,
          latitude: 18.1,
        },
        city: 'Гродно',
        categories: ['Нормаль'],
      },
    ],
  });
};
