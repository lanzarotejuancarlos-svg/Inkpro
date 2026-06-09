export interface GalleryItem {
  id: number;
  src?: string;
  bgColor: string;
  style: string;
  name: string;
}

export interface AppCtx {
  screen: string;
  setScreen: (s: string) => void;
  credits: number;
  image: string | null;
  setImage: (s: string | null) => void;
  gallery: GalleryItem[];
  onExit: () => void;
  startProcessing: (src: string) => void;
  finishProcessing: () => void;
  removeItem: (id: number) => void;
}
