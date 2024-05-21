import { parseISO, format } from "date-fns";
import { id } from "date-fns/locale";

export const formatDate = (dateString: string) => {
  if (!dateString) return null;
  const date = parseISO(dateString);
  return format(date, "EEEE, dd MMMM yyyy", { locale: id });
};
