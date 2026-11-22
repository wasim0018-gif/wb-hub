const API_ORIGIN = typeof window !== 'undefined' && typeof window.WB_EXAM_HUB_API_URL === 'string' ? window.WB_EXAM_HUB_API_URL.replace(/\/$/, '') : '';
const API_PATH = `${API_ORIGIN}/api/content`;
export const app = { name: 'wbexamhub-local-cloud' };
export async function pullContent() {
  const response = await fetch(`${API_PATH}?ts=${Date.now()}`, { cache: 'no-store', headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Sync pull failed: ${response.status}`);
  return response.json();
}
export async function pushContent(snapshot) {
  const response = await fetch(API_PATH, { method: 'PUT', cache: 'no-store', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(snapshot) });
  if (!response.ok) throw new Error(`Sync push failed: ${response.status}`);
  return response.json();
}
