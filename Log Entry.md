<%* 
	let result;
	if(/^\d{4}-\d{2}-\d{2}$/.test(tp.file.title)) {
		result = `- ${await tp.file.include("[[Templates/Naive Time]]")} `;
	} else {
		result = `- (date::${await tp.file.include("[[Templates/Timestamp]]")}) `
	}
	tR = result;
_%>
