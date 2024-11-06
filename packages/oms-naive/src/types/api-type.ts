export type Status = 'success' | 'failure';
export type Message = {
  code: string;
  info: string;
};
export type ListQuery<T extends any> = {
  offset?: number;
  limit?: number;
  fuzzy?: string;
  filter: T;
};

export type ListRes<T extends any> = {
  status: Status;
  data: {
    list: T[];
    count: string;
  };
  message: Message;
};

export type SubmitRes<T extends any> = {
  status: Status;
  data: T;
  message: Message;
};

export type DelRes = {
  status: Status;
  message: Message;
};

export type Uri = {
  functionCaption: string;
  auth: string;
  moduleNo: string;
  functionPath: string;
};

export type AuthData = {
  moduleNo: string;
  title: string;
  functionPath?: string;
  functionList: Uri[];
  child: AuthData[];
};

export type RecordID = number | null | string; // 方便处理 正常应该只有number

export type AuthModule = {
  moduleNo: string;
  title: string;
};

export type AuthModuleParams = {
  custId: number | RecordID;
  modules: AuthModule[];
};

export type OrginAuthData = {
  auth: '0' | '1';
  moduleNo: string;
  parents: string[];
  title: string;
  child: OrginAuthData[];
  children: OrginAuthData[];
};
