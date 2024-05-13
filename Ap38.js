"use strict";
function describe_city(City, country = "default country") {
    console.log(`${City} is in ${country}`);
}
;
// three cities
describe_city("karachi", "Pakistan");
describe_city("istambol", "Turkey");
describe_city("mumbai", "India");
describe_city("dubai");
