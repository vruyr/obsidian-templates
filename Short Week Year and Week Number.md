<%*
const nldates = await app.plugins.getPlugin("nldates-obsidian");
const theTimestamp = nldates.parseDate((await tp.file.selection()) || "now");
tR = `${theTimestamp.moment.format("gg[W]ww")} `;
_%>
