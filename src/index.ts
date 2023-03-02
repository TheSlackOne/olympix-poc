import express from 'express';
import report from "../routes/route-reports"

const app = express();
app.set('port', 8080);
app.use(express.json());

// Routes.
app.use(report);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
