<%*
const orderNumber = (await tp.file.selection()) || (await tp.system.prompt("Order Number", null, true, false));
tR += `- (order-number::${orderNumber})`;
_%>
