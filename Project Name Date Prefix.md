<%*

const dateutils = await tp.user.library("Views/Library/dateutils.js");
const nldates = await app.plugins.getPlugin("nldates-obsidian");

const theTimestamp = nldates.parseTime((await tp.file.selection()) || "now");

tR += dateutils.momentToYearWeekDay(theTimestamp.moment);
_%>
