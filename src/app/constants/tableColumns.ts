import {TableCol} from '@model/shared/table';

export const sightsTableColumns: TableCol[] = [
  {
    def: 'id',
    title: 'ID',
    field: 'id',
  },
  {
    def: 'founder',
    title: 'Основатель',
    field: 'founder',
  },
  {
    def: 'name',
    title: 'Название',
    field: 'name',
  },
  {
    def: 'description',
    title: 'Описание',
    field: 'description',
  },
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
