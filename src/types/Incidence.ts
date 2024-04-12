export type Incidence = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  user: string;
  status: string;
};

export type IncidencesTableProps = {
  incidences: Incidence[];
};

