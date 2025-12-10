import fetch from 'node-fetch';

export async function runProvider(prompt:string){
  return `{"site":"demo","prompt":"${prompt}"}`;
}