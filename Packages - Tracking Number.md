<%*
const trackingNumber = (await tp.file.selection()) || (
	await tp.system.prompt(
		"Tracking Number",              // prompt_text: string
		(await tp.system.clipboard()),  // default_value?: string
		true,                           // throw_on_cancel: boolean
		false,                          // multiline?: boolean
	)
);

const dv = await app.plugins.getPlugin("dataview").api;
const current = dv.pages(JSON.stringify(tp.file.path(true)));
const selectedItem = await tp.system.suggester(
	(i => i.text),
	current.file.lists.where(i => i["order-number"]),
	true,
	"placeholder",
	false
);

tR += `- (order-number::${selectedItem["order-number"]}) (tracking-number::${trackingNumber})\n`;

_%>
