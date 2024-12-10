export interface ColPub {
  alignment: 'center' | 'left' | 'right';
  bold: false;
  colSpan: 1;
  rowSpan: 1;
  margin: [0, 0, 0, 0];
  border: boolean[];
}
export interface TextCol extends ColPub {
  fontSize: 10;
}
export interface ImageCol extends ColPub {
  image: 'logo';
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
