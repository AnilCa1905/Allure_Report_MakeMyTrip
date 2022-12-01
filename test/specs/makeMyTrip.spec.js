const { homePage } = require("../pageobjects/home_page"); //Importing Homepage object
const { flightsPage } = require("../pageobjects/flightsPage");//Importing Flights page object
const { completeBookingPage } = require("../pageobjects/completeBookPage");




describe('Work flow for Make my trip', () => {
	it('User should be able to load url', async () => {
		await homePage.openUrl();
		await expect(browser).toHaveUrl('https://www.makemytrip.com/');
		expect(await homePage.$homePageHeader().isDisplayed()).toBe(true, 'Expect homepage header to be displayed');
		await browser.pause(500);
	});
// it('user should be able to select for hotels', async () => {
// 		await homePage.selectHotels();
// 		expect(await homePage.$homePageHeader().isDisplayed()).toBe(true, 'Expect homepage header to be displayed');
// 	});
// 	it('user should be able to select for Holiday Packages', async () => {
// 		await homePage.holidayPackages();
// 		expect(await homePage.$homePageHeader().isDisplayed()).toBe(true, 'Expect homepage header to be displayed');
// 		expect(await homePage.$homePageHeader().isDisplayed()).toBe(true, 'Expect homepage header to be displayed');

// 	});

	// it('user should be able to search for flights', async () => {
	// 	await homePage.selectLocation();
	// 	expect(await homePage.$homePageHeader().isDisplayed()).toBe(true, 'Expect homepage header to be displayed');
	// });

	// it('user should be able to search for flights', async () => {
	// 	await homePage.searchFlights();
	// 	expect(await flightsPage.$flightsPageHeader().isDisplayed()).toBe(true, 'Expect Flight page header to be displayed');
	// 	await expect(browser).toHaveUrlContaining('flight');
	// });

	// it('user should be able to sort price', async () => {
	// 	await flightsPage.sortPrice();
	// 	expect(await flightsPage.$sortIcon().isDisplayed()).toBe(true, 'Expect highest price should be displayed');
	// 	// let cost = [];
	// 	// for (let item of await flightsPage.$$priceToBeSorted()) {
	// 	// 	cost.push(await item.getText())
	// 	// 	//console.log(item);
	// 	// }
	// 	// console.log(cost)
	// 	// //For Sorting
	// 	// console.log(cost.sort());
	// 	// //For reversing
	// 	// let desc = cost.reverse();
	// 	// console.log(desc);
	// 	 //Sorting array without using inbuilt method
	// 	// console.log("Sorting array without in-built function");
	// 	// console.log("unsorted Price", cost)
	// 	// for (let i = 0; i < cost.length; i++) {
	// 	// 	for (let j = i + 1; j < cost.length; j++) {
	// 	// 		if (cost[i] > cost[j]) {
	// 	// 			temp = cost[i];
	// 	// 			cost[i] = cost[j];
	// 	// 			cost[j] = temp;
	// 	// 		}
	// 	// 	}
	// 	// }
	// 	// console.log("Sorted Price=>", cost);
	// });
	// it('user should be able to navigate to the complete booking page', async () => {
	// 	await completeBookingPage.bookFlight();
	// 	await browser.navigateTo('https://www.makemytrip.com/flight/reviewDetails/?itineraryId=cbe37114459e5c14b6daff9e49a7ccf853cd25af&crId=fd892d08-0a05-422f-9ce5-744ad85cb914&cur=INR&xflt=eyJjIjoiRSIsInAiOiJBLTFfQy0wX0ktMCIsInQiOiIiLCJzIjoiQ09LLUdPSS0yMDIzMDEwMSJ9&rKey=RKEY:8421d0e8-e675-4128-a2c2-405ae8ecd2fd:10_1&ccde=IN');
	// 	let Price = await completeBookingPage.$price().getText();
	// 	console.log(Price);

	// });
});