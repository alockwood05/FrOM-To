// Waypoint Data Store Logic
import { writable } from 'svelte/store';
import type { Waypoint, Step } from '$lib/models/Waypoint';

export const waypoints = writable<Waypoint[]>([]);

// Add a new waypoint
export function addWaypoint(title: string, description: string): void {
	waypoints.update((current) => [...current, createWaypoint(title, description)]);
}

// Update the status of a waypoint
export function updateWaypointStatus(
	id: number,
	newStatus: 'incomplete' | 'in-progress' | 'complete'
): void {
	waypoints.update((current) =>
		current.map((waypoint) => (waypoint.id === id ? { ...waypoint, status: newStatus } : waypoint))
	);
}

// Add a step to a waypoint
export function addStepToWaypoint(waypointId: number, step: Step): void {
	waypoints.update((current) =>
		current.map((waypoint) =>
			waypoint.id === waypointId ? { ...waypoint, steps: [...waypoint.steps, step] } : waypoint
		)
	);
}

// Delete a waypoint
export function deleteWaypoint(id: number): void {
	waypoints.update((current) => current.filter((waypoint) => waypoint.id !== id));
}
