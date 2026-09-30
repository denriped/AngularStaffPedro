export interface Task {
  id: number;
  userId: number;
  titulo: string;
  completado: boolean;
  descripcion: string;
  fechaCreacion: Date;
  fechaCierre: Date;
}