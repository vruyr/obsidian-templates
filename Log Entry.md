<%*
const nldates = await app.plugins.getPlugin("nldates-obsidian");
const theTimestamp = nldates.parseTime((await tp.file.selection()) || "now");

if(
	// If this is a daily journal page for the same date as the timestamp.
	/^\d{4}-\d{2}-\d{2}$/.test(tp.file.title) &&
	tp.file.title === theTimestamp.moment.format("YYYY-MM-DD")
) {
	tR = `(time::${theTimestamp.moment.format("HH:mm:ss")})`;
} else {
	let datetimeFormat = "YYYY-MM-DD[T]HH:mm:ssZ";
	const timePart = theTimestamp.moment.format("HH:mm:ss");
	if(timePart === "12:00:00" || timePart === "00:00:00") {
		// For some reason nldates set the time to noon by default.
		datetimeFormat = "YYYY-MM-DD";
	}
	tR = `(date::${theTimestamp.moment.format(datetimeFormat)})`;
}

tR += " ";

/*TODO Use tp.obsidian to inspect where the cursor is and insert the log entry in the correct place.
 *
 * https://silentvoid13.github.io/Templater/internal-functions/internal-modules/obsidian-module.html
 *
 * - If the cursor is at line with only indentation and a bullet symbol, don't add another one.
 * - If the cursor is in the middle of text, add the bullet on the next line with same indentation.
 * - If the cursor is at an empty line, insert the bullet on current line.
 */
_%>
