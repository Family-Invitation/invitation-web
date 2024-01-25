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
}

export interface IButton {
  width?: string;
  icon?: string;
  text: string;
  isLink: boolean;
  link?: string;
  isLoading?: boolean;
  onClick?: () => void;
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
  name: string;
  wish: string;
  date: string;
}

export interface WishMessage {
  id: number;
  sender: string;
  message: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PostWishParams {
  invitation_id: number;
  sender: string;
  message: string;
}
