export interface TableCol {
  def: string;
  title: string;
  field: string;
}

export interface ContextMenuActions {
  name: string;
  action: (id: number) => void;
}
