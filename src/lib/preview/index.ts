export function renderPreview(tree:any){
  return `<html><body><h1>Preview</h1><pre>${JSON.stringify(tree,null,2)}</pre></body></html>`;
}