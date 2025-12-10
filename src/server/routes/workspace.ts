import { saveFile, readFile } from '../../lib/workspace/index.js';

export default async function route(app:any){
  app.post('/workspace/write', async (req:any)=> {
    return saveFile(req.tenant, req.body.project, req.body.path, req.body.content);
  });

  app.post('/workspace/read', async (req:any)=> {
    return readFile(req.tenant, req.body.project, req.body.path);
  });
}