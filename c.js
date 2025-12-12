//! c.js
//! It's a complementary library to a.js and b.js
//! It provides additional functionality
//! It's open source and free to use
//! It's maintained by the same great community

const a = require('./a');
const b = require('./b');
function c() {
    return a() === b();
}
module.exports = c;