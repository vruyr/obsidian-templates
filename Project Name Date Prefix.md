<%*
const nldates = await app.plugins.getPlugin("nldates-obsidian");
const theTimestamp = nldates.parseTime((await tp.file.selection()) || "now");

// https://momentjs.com/docs/#/displaying/format/
let dayByWeek = theTimestamp.moment.format("gg[W]ww[D]").toUpperCase();
// https://momentjs.com/docs/#/get-set/weekday/
dayByWeek += (theTimestamp.moment.isoWeekday() % 7 + 1).toString();

tR += dayByWeek;
_%>
