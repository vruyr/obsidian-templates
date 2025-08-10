<%*
const selection = await tp.file.selection();
let trailingWS = "\n";

if(selection) {
	trailingWS = selection.match(/(\s*)$/)?.[1] || "";
}

const url = selection || (
	await tp.system.prompt(
		"Web page URL",
		(await tp.system.clipboard()),
		true,
		false,
	)
);

// https://silentvoid13.github.io/Templater/internal-functions/internal-modules/obsidian-module.html
// https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts
const html = await tp.obsidian.request({ url });

const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");
const title = doc.querySelector("title")?.textContent?.trim();

tR += "(date::" + tp.date.now("YYYY-MM-DD[T]HH:mm:ssZ") + ")\n";

if(title) {
	tR += title;
	tR += "\n";
}
tR += url;
tR += trailingWS;
-%>
