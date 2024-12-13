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
  columns: Array<TextCol & SvgCol & CanvasCol>;
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
  tabs?: number;
  body: any[][];
  widths: Array<string | number>;
}
export interface TableCol {
  tittle?: string;
  table: TableData;
  uuid?: string;
  margin: [0, 0, 0, 0];
  layout: '' | 'noBorders' | 'lightHorizontalLines';
}

export interface CanvasLine {
  dash: { length: number; space: number } | undefined;
  lineColor: string;
  lineWidth: number;
  type: 'line' | 'rect';
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface CanvasRect {
  x: number;
  y: number;
  w: number;
  h: number;
  lineColor: string;
  lineWidth: number;
  type: 'rect';
}
export interface CanvasCol {
  tittle?: string;
  canvas: Array<CanvasRect | CanvasLine>;
  uuid?: string;
  margin: [0, 0, 0, 0];
}
export interface DocContent {}

export interface PDFDoc {
  content: DocContent[];
  background: DocContent[];
  pageMargins: number[];
}
