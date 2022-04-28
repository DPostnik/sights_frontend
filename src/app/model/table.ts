export interface TableCol {
  def: string;
  title: string;
  field: string;
}

export interface ContextMenuActions {
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}
