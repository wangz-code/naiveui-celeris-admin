export interface ColPub {
  alignment: 'center' | 'left' | 'right';
  bold: false;
  colSpan: 1;
  rowSpan: 1;
  margin: [0, 0, 0, 0];
  border: boolean[];
}
export interface TextCol extends ColPub {
  text: string;
  fontSize: 10;
}

export interface ColumnstCol extends ColPub {
  columns: Array<TextCol & SvgCol>;
}
export type OlItem = string & TextCol & QrcodeCol;
export interface OlCol extends TextCol {
  separator: string[] | string;
  ol: Array<OlItem>;
  type: '' | 'none' | 'lower-alpha' | 'upper-alpha';
}
export interface SvgCol extends ColPub {
  svg: string;
  width: number;
  height: number;
}
export interface QrcodeCol extends ColPub {
  qr: string;
  fit: number;
}
export interface ImageCol extends ColPub {
  image: string;
  src: string;
  width: 50;
  height: 50;
}
export interface TableData extends ColPub {
  tittle?: string;
  tabs?: number;
  body: any[][];
  widths: Array<string | number>;
}
export interface TableCol {
  table: TableData;
  uuid?: string;
  margin: [0, 0, 0, 0];
  layout: '' | 'noBorders' | 'lightHorizontalLines';
}
export interface DocContent {}

export interface PDFDoc {
  content: DocContent[];
  background: DocContent[];
  pageMargins: number[];
}
