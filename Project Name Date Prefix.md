<%*
const nldates = await app.plugins.getPlugin("nldates-obsidian");
const theTimestamp = nldates.parseTime((await tp.file.selection()) || "now");

// https://momentjs.com/docs/#/displaying/format/
const dayByWeek = theTimestamp.moment.format("gg[W]wwdd").toUpperCase();

tR += dayByWeek;
_%>
