<%*
// https://github.com/SilentVoid13/Templater/discussions/1270

new Notice("Templater startup is now complete!");

// https://docs.obsidian.md/Reference/TypeScript+API/Vault/on('create')
app.vault.on("create", (file) => {
	new Notice(`A file was created at '${file.path}'`);
});
-%>
