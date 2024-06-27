export enum LangType {
  RU = 'ru',
}

export interface ILang {
  title: string;
  engTitle: string;
  lang: LangType;
}

export type DateTranslationType = {
  [key: string]: string;
};
