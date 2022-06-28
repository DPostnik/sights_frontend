export interface IFilter {
  action?: (event: any) => void;
  label: string;
  name: string;
  options?: {value: string; key: string}[];
  type: 'string' | 'select';
  value: any;
}
