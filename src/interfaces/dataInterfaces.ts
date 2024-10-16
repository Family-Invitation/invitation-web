// src/interfaces/dataInterfaces.ts
export interface OrangTua {
  bapak: string;
  ibu: string;
}

export interface Mempelai {
  namaLengkap: string;
  namaPanggilan: string;
  anakKe: number;
  namaOrangTua: OrangTua;
  nomorRekening: string;
  nomorWA: string;
  namaBank: string;
}

export interface AkadNikah {
  hariTanggal: string;
  jamPukul: string;
  alamatLengkap: string;
}

export interface Resepsi {
  hariTanggal: string;
  jamPukul: string;
  alamatLengkap: string;
  tempatResepsi: string;
}

export interface Data {
  data: {
    namaAkunPemesan: string;
    noPesanan: string;
    jumlahDanSeri: number;
    checkOutDi: string;
    mempelaiWanita: Mempelai;
    mempelaiPria: Mempelai;
    akadNikah: AkadNikah;
    resepsi: Resepsi;
    turutMengundang: string[];
    fotoMempelai: string;
    denahLokasi: string;
    hiburan: string;
    lokasiAkad: string;
    lokasiResepsi: string;
  };
}

export interface IGiftCard {
  isGift: boolean;
  bank?: string;
  rekName?: string;
  rekNumber?: string;
  recipientName?: string;
  address?: string;
  nomorWa?: string;
  copyText?: string;
}

export interface IButton {
  width?: string;
  icon?: string;
  text: string;
  isLink: boolean;
  link?: string;
  isLoading?: boolean;
  onClick?: () => void;
  bgColor?: string;
}

export interface IMenu {
  to: string;
  children: React.ReactNode;
}

export interface ICarouselItem {
  id: number;
  imageUrl: string;
  year: number;
  label: string;
}

export interface IWishItem {
  id: number;
  name: string;
  wish: string;
  date: string;
  likeCount: number;
  isLiked: boolean;
  user: string;
  key: number;
  index?: number;
  wishesLength?: number;
}

export interface WishMessage {
  id: number;
  sender: string;
  message: string;
  like_count: number;
  is_liked: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PostWishParams {
  invitation_id: string;
  sender: string;
  message: string;
}

export interface PostLikeParams {
  wish_id: number;
  user: string;
  liked: boolean;
}
