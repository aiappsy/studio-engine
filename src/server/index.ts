import Fastify from 'fastify';
import structureRoute from './routes/structure.js';
import pageRoute from './routes/page.js';
import codeRoute from './routes/code.js';
import diffRoute from './routes/diff.js';
import previewRoute from './routes/preview.js';
import workspaceRoute from './routes/workspace.js';
import tenant from './middleware/tenant.js';

const app = Fastify();
app.addHook('onRequest', tenant);

app.register(structureRoute, { prefix: '/api/v1' });
app.register(pageRoute, { prefix: '/api/v1' });
app.register(codeRoute, { prefix: '/api/v1' });
app.register(diffRoute, { prefix: '/api/v1' });
app.register(previewRoute, { prefix: '/api/v1' });
app.register(workspaceRoute, { prefix: '/api/v1' });

app.get('/health', async ()=>({status:'ok'}));

app.listen({ port: 3001, host: '0.0.0.0' }).then(()=> 
  console.log('Studio Engine running on 3001')
);
