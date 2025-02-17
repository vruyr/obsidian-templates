<%*
const nldates = await app.plugins.getPlugin("nldates-obsidian");
const theInput = (await tp.file.selection()) || "now";
const theTimestamp = nldates.parseTime(theInput);

if(
	// If this is a daily journal page for the same date as the timestamp.
	/^\d{4}-\d{2}-\d{2}$/.test(tp.file.title) &&
	tp.file.title === theTimestamp.moment.format("YYYY-MM-DD") && false
) {
	tR = `(time::${theTimestamp.moment.format("HH:mm:ss")})`;
} else {
	let datetimeFormat = "YYYY-MM-DD[T]HH:mm:ssZ";
	const timePart = theTimestamp.moment.format("HH:mm:ss");
	if(
		theInput === "today" ||
		timePart === "12:00:00" ||
		timePart === "00:00:00"
	) {
		// For some reason nldates set the time to noon by default.
		datetimeFormat = "YYYY-MM-DD";
	}
	tR = `(date::${theTimestamp.moment.format(datetimeFormat)})`;
}
_%>
