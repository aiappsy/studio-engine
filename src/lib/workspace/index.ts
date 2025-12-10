import fs from 'fs';
import path from 'path';

const root = '/data/workspaces';

export function saveFile(tenant:string, project:string, filepath:string, content:string){
  const dir = path.join(root, tenant, project);
  fs.mkdirSync(dir, { recursive:true });
  fs.writeFileSync(path.join(dir, filepath), content);
  return true;
}

export function readFile(tenant:string, project:string, filepath:string){
  const full = path.join(root, tenant, project, filepath);
  if(!fs.existsSync(full)) return null;
  return fs.readFileSync(full, 'utf8');
}