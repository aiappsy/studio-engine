import { renderPreview } from '../../lib/preview/index.js';
export default async function r(a){ a.post('/preview', async(req)=> renderPreview(req.body.tree)); }