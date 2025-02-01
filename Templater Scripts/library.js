async function readFile(path) {
	return await app.vault.cachedRead(app.vault.getAbstractFileByPath(path));
}


async function library(path) {
	return (new Function(await readFile(path)))();
}


module.exports = library;
