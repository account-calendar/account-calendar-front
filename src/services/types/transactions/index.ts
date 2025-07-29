export type TransactionDateDTO = {
  income: number;
  expense: number;
};

export type TransactionsDTO = {
  total: TransactionDateDTO;
  dates: Record<string, TransactionDateDTO>;
};

export type TransactionInfoDTO = {
  id: number;
  price: number;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  registrationAt: string;
  memo?: string;
  majorCategory: string | null;
  middleCategory: string | null;
};
