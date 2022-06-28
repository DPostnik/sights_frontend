import {TableCol} from '@model/shared/table';

export const sightsTableColumns: TableCol[] = [
  {
    def: 'name',
    title: 'Название',
    field: 'name',
  },
  {
    def: 'founder',
    title: 'Основатель',
    field: 'founder',
  },
  {
    def: 'description',
    title: 'Описание',
    field: 'description',
  },
  {
    def: 'rating',
    title: 'Оценка',
    field: 'rating',
  }
];

export const userTableColumns: TableCol[] = [
  {
    def: 'id',
    title: 'ID',
    field: 'id',
  },
  {
    def: 'name',
    title: 'Имя пользователя',
    field: 'name',
  },
  {
    def: 'email',
    title: 'Логин',
    field: 'email',
  },
  {
    def: 'gmail',
    title: 'Почта',
    field: 'gmail',
  },
];
