<%*
const dv = app.plugins.plugins.dataview.api;
const lib = (new Function(
	"dv",
	//TODO Figure out how to make relative paths work for Dataview "view"s.
	await dv.io.load("Views/Book Info/lib.js"))
)(
	dv
);

const currentPage = dv.page(tp.file.path(true));
const progressLogs = lib.getProgressLogs(currentPage);
let bookTotalPages = progressLogs.last?.last?.total ?? 0;
if(!bookTotalPages) {
	bookTotalPages = await tp.system.prompt(`Number of Pages`, null, false, false);
}
const input = await tp.system.prompt(`Page ? of ${bookTotalPages}`, null, false, false);

if(input && input.trim()) {
	const match = /^(?<page>\d+)\s*(?<comment>\S.*)?$/.exec(input);
	let entryValue = input;
	if(match) {
		entryValue = `${match.groups.page}/${bookTotalPages}`;
		if(match.groups.comment) {
			entryValue += " ";
			entryValue += match.groups.comment;
		}
	}
	entryValue = entryValue.trim();
	tR += `${tp.date.now("YYYY-MM-DD-HH-mm")}:: ${entryValue}\n`;
}
_%>
