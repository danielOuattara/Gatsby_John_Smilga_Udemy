import Airtable from "airtable";

export default new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE_ID);

/* 


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('app01mKSn0aOKJAPW');

base('survey').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

Output

Retrieved kitchen

Retrieved bathroom

Retrieved bedroom

Fetch first page

// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('survey').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
});

Fetch additional record metadata

// If you want to fetch the number of comments for each record,
// include the `recordMetadata` param.
base('survey').select({
    recordMetadata: ['commentCount']
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved a record with', record.commentCount, 'comments');
    });
});

*/
