export interface MyResponseType<T = any> {
  code: number;
  msg: string;
  data: T;
}

export interface LoginInfo {
  token: string;
}

export interface PicCode {
  code: string;
  url: string;
}

export interface AnnounCement {
  announcementId: number | null;
  announcementTitle: string;
  announcementContent: string;
}

export interface Book {
  bookId: number | null;
  bookName: string;
  bookAuthor: string;
  bookPublish: string;
  bookPrice: number | null;
  bookType: string;
  bookLocation: string;
  bookState: number | null;
  isbn: string;
}
