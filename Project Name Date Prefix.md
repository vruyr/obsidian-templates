<%*
//See also: 09C21192-BFBC-4E19-943E-BC961D492D5E
function momentToYearWeekDay(m) {
	// https://momentjs.com/docs/#/displaying/format/
	let result = m.format("gg[W]ww[D]").toUpperCase();
	// https://momentjs.com/docs/#/get-set/weekday/
	result += (m.isoWeekday() % 7 + 1).toString();

	return result;
}

const nldates = await app.plugins.getPlugin("nldates-obsidian");
const theTimestamp = nldates.parseTime((await tp.file.selection()) || "now");

tR += momentToYearWeekDay(theTimestamp.moment);
_%>
