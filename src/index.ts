import FastifyView from '@fastify/view';
import ejs from 'ejs';
import Fastify from 'fastify';
import { appName } from './constants';

const app = Fastify();

console.log(`Starting ${appName}...`);

app.register(FastifyView, {
  engine: { ejs },
  root: `${import.meta.dirname}/views`,
});

// APIエンドポイント
// TODO: ここにAPIエンドポイントを追加する

// フロントエンド。基本的に全エンドポイントに対して同じHTMLを返す
app.get('/*', async (request, reply) => {
  return reply.viewAsync('index.ejs', { title: appName });
});

app.listen({ host: '0.0.0.0', port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const info = app.server.address();
  if (info === null || typeof info !== 'object') {
    console.log(`Server is ready: ${info}`);
    return;
  }

  console.log(`Server is ready: http://${info.address}:${info.port}`);
});
