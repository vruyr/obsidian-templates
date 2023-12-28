<%* 
let result;
if(
	/^\d{4}-\d{2}-\d{2}$/.test(tp.file.title) && 
	tp.file.title === tp.date.now("YYYY-MM-DD")
) {
	result = `(time::${await tp.file.include("[[Templates/Naive Time]]")}) `;
} else {
	result = `(date::${await tp.file.include("[[Templates/Timestamp]]")}) `
}
tR = result;

/*TODO Use tp.obsidian to inspect where the cursor is and insert the log entry in the correct place.
 *
 * https://silentvoid13.github.io/Templater/internal-functions/internal-modules/obsidian-module.html
 *
 * - If the cursor is at line with only indentation and a bullet symbol, don't add another one.
 * - If the cursor is in the middle of text, add the bullet on the next line with same indentation.
 * - If the cursor is at an empty line, insert the bullet on current line.
 * - If the current file is a Daily Journal file, prepend with time.
 * - If the current file is not a Daily Journal file, prepend with a (date::)
 */
_%>
