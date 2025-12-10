import { applyDiff } from '../../lib/diff/index.js';
export default async function r(a){ a.post('/diff', async(req)=> applyDiff(req.body.tree, req.body.changes)); }