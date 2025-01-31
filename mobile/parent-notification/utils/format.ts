import { Language } from "@/contexts/i18n-context";
import {
  format,
  formatDistanceToNow,
  isToday,
  isThisWeek,
  isThisYear,
  Locale,
} from "date-fns";
import { ja, enUS, uz } from "date-fns/locale";

const formatTemplates = {
  ja: {
    today: "HH:mm",
    thisWeek: "eeee",
    thisYear: "M月d日",
    other: "yyyy年M月d日",
  },
  enUS: {
    today: "hh:mm a",
    thisWeek: "eeee",
    thisYear: "MMMM d",
    other: "MMMM d, yyyy",
  },
  uz: {
    today: "HH:mm",
    thisWeek: "eeee",
    thisYear: "d MMMM",
    other: "d MMMM yyyy",
  },
};

const localeMap: Record<Language, Locale> = {
  en: enUS,
  ja: ja,
  uz: uz,
};

type LocaleCode = keyof typeof formatTemplates;

export default function formatMessageDate(date: Date, language: Language) {
  const locale = localeMap[language];
  const templates = formatTemplates[language === "en" ? "enUS" : language]; // Get templates based on language

  if (isToday(date)) {
    return format(date, templates.today, { locale }); // Show today's time
  } else if (isThisWeek(date)) {
    return formatDistanceToNow(date, { addSuffix: true, locale }); // Show days ago
  } else if (isThisYear(date)) {
    return format(date, templates.thisYear, { locale }); // Show date in this year
  } else {
    return format(date, templates.other, { locale }); // Show full date
  }
}
