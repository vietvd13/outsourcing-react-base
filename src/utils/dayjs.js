import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import i18n from "@/locales/i18n";

// kích hoạt plugin
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

dayjs.locale(i18n.language);
i18n.on("languageChanged", (lng) => {
  dayjs.locale(lng);
});

export default dayjs;
