const express = require("express");
const app = express();
const port = 8000;
const cors=require('cors')

require("./configs/mongoose.config")

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



require("./routes/redbelt.route")(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );
