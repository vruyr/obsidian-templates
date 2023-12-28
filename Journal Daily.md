<%*
tR += "---\n";
tR += `aliases: ${JSON.stringify(Array.from(new Set([
	tp.date.now("MMM D, YYYY",              0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("MMMM D, YYYY",             0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("GGGG-[W]WW-E",             0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("dddd of [Week] w of gggg", 0, tp.file.title, "YYYY-MM-DD"),
]))).replaceAll('","', '", "')}\n`;
tR += "Journal Day:\n";
tR += `  - ${JSON.stringify("USA: " + tp.date.now("dddd of [Week] w of gggg", 0, tp.file.title, "YYYY-MM-DD"))}\n`;
tR += `  - ${JSON.stringify("ISO: " + tp.date.now("GGGG-[W]WW-E", 0, tp.file.title, "YYYY-MM-DD"))}\n`;
tR += `timecreated: ${tp.date.now("YYYY-MM-DD[T]HH:mm:ssZ")}\n`;
tR += "---";
%>

```dataviewjs
await dv.view("Views/Views in Daily Notes");
```

## Objectives

<%tp.file.cursor()%>

## Notes

<%_ "\n\n" _%>
