const server = require("./server.js");

const port = process.env.PORT || 3000; // if there is no PORT env variable, 3000 will be used
server.listen(port, () => console.log(`Express is running on port ${port}`))

module.exports = server;