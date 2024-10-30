import ISO6391 from 'iso-639-1';

type Local = {
  code: string;
  nativeName: string;
  name: string;
};
export const languagesNameList: Local[] = ISO6391.getAllCodes().map((code) => ({
  code,
  nativeName: ISO6391.getNativeName(code),
  name: ISO6391.getName(code),
}));
