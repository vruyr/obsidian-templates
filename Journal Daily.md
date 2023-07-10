---
aliases: <%*
tR += JSON.stringify(Array.from(new Set([
	tp.date.now("MMM D, YYYY",              0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("MMMM D, YYYY",             0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("GGGG-[W]WW-E",             0, tp.file.title, "YYYY-MM-DD"),
	tp.date.now("dddd of [Week] w of gggg", 0, tp.file.title, "YYYY-MM-DD"),
]))).replaceAll('","', '", "');
%>
timecreated: "<%tp.date.now("YYYY-MM-DD[T]HH:mm:ssZ")%>"
---
**Journal USA Week Day**:: <%tp.date.now("dddd of [Week] w of gggg", 0, tp.file.title, "YYYY-MM-DD")%>
**Journal ISO Week Day**:: <%tp.date.now("GGGG-[W]WW-E", 0, tp.file.title, "YYYY-MM-DD")%>

## Plan
<%tp.file.cursor()%>

## References
```dataviewjs
await dv.view("Views/References");
```

## Notes
