export interface ListItem {
  id: number;
  name: string;
  children: ListItem[];
  isNew: boolean;
}

export const initialList: ListItem = {
  id: 1,
  name: "Root",
  children: [],
  isNew: false,
};
