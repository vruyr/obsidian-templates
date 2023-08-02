<%*
const content = await tp.system.clipboard();
/*TODO Detect the clipboard content and add custom formatting.
- URLs
	- Fetch the title and make it a link with the origin prepended.
	- Detect publication date and add a `published` inline field.
*/
const added = await tp.file.include("[[Templates/Dataview Inline Field Added]]");
//TODO Detect if the cursor is at a new bullet point (/^\s*-\s*/) and only add one if at a blank line.
tR = `- ${content} ${added}`
-%>
