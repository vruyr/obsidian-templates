<%*
// https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html
// https://momentjs.com/docs/#/displaying/format/
tR += "---\n";
tR += `aliases: ${JSON.stringify(Array.from(new Set([
	tp.date.now("MMM D, YYYY",              0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("MMMM D, YYYY",             0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("[ISO-]GGGG-[W]WW-E",       0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("gg[W]wwdd",                0, tp.file.title, "YYYY-MM-DD").toUpperCase(),
	tp.date.now("dddd of [Week] w of gggg", 0, tp.file.title, "YYYY-MM-DD"),
]))).replaceAll('","', '", "')}\n`;
tR += `timecreated: ${JSON.stringify(tp.date.now("YYYY-MM-DD[T]HH:mm:ssZ"))}\n`;
tR += "---";
// https://momentjs.com/docs/#/i18n/locale-data/
// https://momentjs.com/docs/#/customization/dow-doy/
// moment.localeData("en-us").firstDayOfWeek();
// moment.localeData("en-us").firstDayOfYear();
%>

```dataviewjs
await dv.view("Views/Views in Daily Notes");
```

## Notes

<%_ "\n\n" _%>
