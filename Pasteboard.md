<%*
/*TODO Detect the clipboard content and add custom formatting.
- URLs
	- Fetch the title and make it a link with the origin prepended.
	- Detect publication date and add a `published` inline field.
		- <meta property="article:published_time" content="2023-05-25T20:48:23+00:00">
	- https://devblogs.microsoft.com/commandline/shell-integration-in-the-windows-terminal/
		- <head>
			- <title>Shell integration in the Windows Terminal</title>
			- <link rel="canonical" href="https://devblogs.microsoft.com/commandline/shell-integration-in-the-windows-terminal/">
			- <meta property="og:locale" content="en_US">
			- <meta property="og:type" content="article">
			- <meta property="og:title" content="Shell integration in the Windows Terminal">
			- <meta property="og:url" content="https://devblogs.microsoft.com/commandline/shell-integration-in-the-windows-terminal/">
			- <meta property="og:site_name" content="Windows Command Line">
			- <meta property="article:published_time" content="2023-05-25T20:48:23+00:00">
			- <meta property="article:modified_time" content="2023-07-11T15:45:01+00:00">
			- <meta name="author" content="Mike Griese">
			- <link rel="shortlink" href="https://devblogs.microsoft.com/commandline/?p=8599">

			- <meta property="og:image" content="https://learn.microsoft.com/en-us/windows/terminal/images/duplicate-tab-same-cwd.gif">
			- <link rel="icon" href="https://devblogs.microsoft.com/commandline/wp-content/uploads/sites/33/2019/03/cropped-CommandLineIcon-1-32x32.png" sizes="32x32">
			- <link rel="icon" href="https://devblogs.microsoft.com/commandline/wp-content/uploads/sites/33/2019/03/cropped-CommandLineIcon-1-192x192.png" sizes="192x192">
			- <link rel="apple-touch-icon" href="https://devblogs.microsoft.com/commandline/wp-content/uploads/sites/33/2019/03/cropped-CommandLineIcon-1-180x180.png">
			- <meta name="msapplication-TileImage" content="https://devblogs.microsoft.com/commandline/wp-content/uploads/sites/33/2019/03/cropped-CommandLineIcon-1-270x270.png">
*/
//TODO Detect if the cursor is at a new bullet point (/^\s*-\s*/) and only add one if at a blank line. Combine this with the dataview inline field templates.
const bulletIfAtEmptyLine = "- ";
const added = await tp.file.include("[[Templates/Dataview Inline Field Added]]");
const content = await tp.system.clipboard();
tR = `${bulletIfAtEmptyLine}${content} ${added}`;
-%>
