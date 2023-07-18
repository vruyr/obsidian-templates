```dataviewjs

/********** Data **********/

const stores = {
	"<%tp.file.cursor(0)%>": "<%tp.file.cursor()%>",
}

const priceHistory_DatePriceStoreSeller = [
	["<%tp.date.now("YYYY-MM-DD")%>", <%tp.file.cursor()%>, "<%tp.file.cursor(0)%>", null<%tp.file.cursor()%>],
]

/********** Rendering **********/

const dollarFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

dv.paragraph("Price History");
dv.table(
	["Date", "Price", "Store", "Seller"],
	priceHistory_DatePriceStoreSeller.map(([date, price, store, seller]) => (
		[dv.date(date), dollarFormatter.format(price), `[${store}](${stores[store]})`, seller]
	))
)

```<%_ "" _%>
