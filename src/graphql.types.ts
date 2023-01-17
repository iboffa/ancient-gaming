export type Box = {
  id: string;
  name: string;
  iconUrl: string;
  cost: number;
};

export type BoxesQueryResult = {
  boxes: { edges: { node: Box }[] };
};

export type ItemVariant = {
  id: string;
  name: string;
  value: number;
  iconUrl: string;
}

export type WonItem = {
  id: string;
  itemVariant: ItemVariant;
}

export type BoxOpeningMutationResult = {
  openBox: {boxOpenings: WonItem[]}
}
