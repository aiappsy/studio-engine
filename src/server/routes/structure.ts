import { generateStructure } from '../../lib/ai-builder/generateStructure.js';

export default async function route(app:any){
  app.post('/structure', async (req:any)=> {
    return await generateStructure(req.body.description || '');
  });
}