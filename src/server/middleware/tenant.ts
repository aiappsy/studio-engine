export default async function tenant(req:any, res:any){
  const t = req.headers['x-tenant-id'];
  if(!t) throw new Error("Missing x-tenant-id header.");
  req.tenant = t;
}