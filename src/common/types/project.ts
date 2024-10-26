export interface Project {
  name?: string;
  description?: string;
  photoUrl?: string;
  photoStyle: PhotoStyle;
}

export enum PhotoStyle {
  InScreen,
  Bg,
}
