import { API_BASE } from './config';

export async function getLoads() {
  try {
    const res = await fetch(`${API_BASE}/api/posts/loads`);
    if (!res.ok) throw new Error('Failed to fetch loads');
    return await res.json();
  } catch (e) {
    console.warn('Loads fetch failed, returning sample:', e.message);
    return [
      { origin: 'Los Angeles, CA', destination: 'Chicago, IL', equipment: 'Dry Van', weight: '20,000', date: '2025-07-01', rate: '$2,500', contact: 'sample@broker.com' }
    ];
  }
}

export async function getTrucks() {
  try {
    const res = await fetch(`${API_BASE}/api/posts/trucks`);
    if (!res.ok) throw new Error('Failed to fetch trucks');
    return await res.json();
  } catch (e) {
    console.warn('Trucks fetch failed, returning sample:', e.message);
    return [
      { location: 'Dallas, TX', equipment: 'Flatbed', date: '2025-07-02', contact: 'sample@carrier.com' }
    ];
  }
}

export async function postLoad(payload) {
  const res = await fetch(`${API_BASE}/api/posts/load`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return await res.json();
}

export async function postTruck(payload) {
  const res = await fetch(`${API_BASE}/api/posts/truck`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return await res.json();
}
