```dataviewjs

/********** Data **********/

const stores = {
	"<%tp.file.cursor(0)%>": "<%tp.file.cursor()%>",
}

const priceHistory_DatePriceStoreSellerComment = [
	["<%tp.date.now("YYYY-MM-DD")%>", <%tp.file.cursor()%>, "<%tp.file.cursor(0)%>", null, null],
]

/********** Rendering **********/

const _dollarFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});
function dollarFormatter(n) {
	if(n == null) {
		return null;
	}
	return _dollarFormatter.format(n);
}

dv.paragraph("Price History");
dv.table(
	["Date", "Price", "Store", "Seller", "Comment"],
	priceHistory_DatePriceStoreSellerComment.map(([date, price, store, seller, comment]) => (
		[dv.date(date), dollarFormatter(price), `[${store}](${stores[store]})`, seller, comment]
	))
)

```<%_ "" _%>
