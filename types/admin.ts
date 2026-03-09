export interface AdminStats {
  totalSiswa: number;
  totalDudi: number;
  siswaMagang: number;
  logbookHariIni: number;
}

export interface RecentMagang {
  id: string;
  namaSiswa: string;
  dudi: string;
  startDate: string;
  endDate: string;
  status: string;
}

export interface RecentLogbook {
  id: string;
  kegiatan: string;
  tanggal: string;
  kendala: string | null;
  status: string;
}

export interface ActiveDudi {
  id: string;
  namaPerusahaan: string;
  alamat: string;
  noTelp: string;
  jumlahSiswa: number;
}
