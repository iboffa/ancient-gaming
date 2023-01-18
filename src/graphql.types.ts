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
}

export type WonItem = {
  id: string;
  itemVariant: ItemVariant;
}

export type BoxOpeningMutationResult = {
  openBox: {boxOpenings: WonItem[]}
}

export type User = {
  id: string;
  name: string;
  wallets: Wallet[];
}

export type Wallet = {
  id: string;
  amount: number;
  name?: string;
  currency?: string;
}

export type UserQueryResult = {
  currentUser: User;
}

export type UpdateWalletNotification = {
  updateWallet: Wallet
}
