import {Meta} from '@model/shared/meta';

export function setMetaLocalStorage(meta: Meta) {
  localStorage.setItem('Meta', JSON.stringify(meta));
}

export function getMetaFromLocalStorage(): Meta | null {
  const meta = localStorage.getItem('Meta');
  if (!meta) {
    return null;
  }
  return JSON.parse(meta);
}

export function clearLocalStorage() {
  localStorage.clear();
}
