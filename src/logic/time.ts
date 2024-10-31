import { tz, TZDateMini } from "@date-fns/tz";
import { format } from "date-fns";

export const aoe = tz("-12:00");
export const aoeDate = (date: string) => new TZDateMini(date, "-12:00");

export const utc = tz("Utc");

export function formatAoe(
  date: Parameters<typeof format>[0],
  formatStr: Parameters<typeof format>[1],
  options?: Parameters<typeof format>[2],
) {
  return format(date, formatStr, { in: utc, ...options });
}
