import { runProvider } from './provider.js';

export async function generateStructure(desc:string){
  const prompt = `Generate website structure JSON for: ${desc}`;
  const out = await runProvider(prompt);
  try { return JSON.parse(out); }
  catch { return { error:true, raw: out }; }
}