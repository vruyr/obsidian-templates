<%*
const searchQuery = await tp.system.prompt("Search Query", null, true, false);
const searchUrl = `https://www.google.com/search?hl=en&q=${encodeURIComponent(searchQuery).replaceAll("%20", "+")}&t=osx&ia=web`;
-%>- Google Search: [<%tp.file.cursor(1)%><%searchQuery%>](<%searchUrl%>) [added::<% tp.date.now("YYYY-MM-DD[T]HH:mm:ssZ") %>]