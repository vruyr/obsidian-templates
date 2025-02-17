<%*
const orderNumber = (await tp.file.selection()) || (
	await tp.system.prompt(
		"Order Number",                 // prompt_text: string
		(await tp.system.clipboard()),  // default_value?: string
		true,                           // throw_on_cancel: boolean
		false,                          // multiline?: boolean
	)
);
tR += `- (order-number::${orderNumber})`;
_%>
