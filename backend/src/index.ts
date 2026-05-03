import express from 'express';
import userRoutes from './routes/users.ts';
import gameRoutes from './routes/game.ts';
import airoutes from './routes/ai.ts';
import db from './config/db.ts';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/ai', airoutes);

app.get('/', (req, res) => {
  res.send('Ludo Server is running');
});

app.listen(port, async () => {
  await db.connect();
  console.log(`Server listening at http://localhost:${port}`);
});