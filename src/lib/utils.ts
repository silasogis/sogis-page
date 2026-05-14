const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getAssetPath(path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  
  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${BASE_PATH}${normalizedPath}`;
}
