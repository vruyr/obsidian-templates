```dataviewjs
let out = dv.current();
function replacer(key, value) {
	if(key === "settings" && typeof value === "object") {
		return {}
	}
	if(Array.isArray(value)) {
		return Array.from(value);
	}
	return value;
}
out = JSON.stringify(out, replacer, "\t");
dv.paragraph("```json\n" + out + "\n```\n");
```
<% "" _%>
