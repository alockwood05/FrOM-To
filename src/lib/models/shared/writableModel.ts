// writableModel - model store factory ========================================
import { onMount } from 'svelte';
import { getContext, hasContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

//==============================================================================
// useSharedStore, useWritable, useReadable
//  - https://dev.to/jdgamble555/the-correct-way-to-use-stores-in-sveltekit-3h6i
//==============================================================================

// This file is a utility to create a shared store context in Svelte.
// This is important so that we can share usage of the stores across components,
// and not worry about duplicating stores.
const useSharedStore = <T, A>(name: string, fn: (value?: A) => T, defaultValue?: A) => {
	if (hasContext(name)) {
		return getContext<T>(name);
	}
	const _value = fn(defaultValue);
	setContext(name, _value);
	return _value;
};
export const useWritable = <T>(name: string, value: T) => useSharedStore(name, writable, value);
// export const useReadable = <T>(name: string, value: T) => useSharedStore(name, readable, value);

// Implementation for a model store.
function fetchFromLocalStorage(namespace: string) {
	const storedData = localStorage.getItem(namespace);
	return storedData ? JSON.parse(storedData) : [];
}

function initializeWritableModel<T>(namespace: string) {
	const localData = fetchFromLocalStorage(namespace);
	const writableStore = useWritable<T | null>(namespace, localData);
	onMount(() => {
		// returning a cleanup function, which is will in this case be the unsubscribe function returned from subscribe
		return writableStore.subscribe((data) => {
			localStorage.setItem(namespace, JSON.stringify(data));
		});
	});
	return writableStore;
}
// Method to setup an initializer for the store
// Used first in a Model e.g. Alignment.ts where `alignmentStore = writableModel(NAMESPACE)`
// Then used in a component e.g. Alignment.svelte where `const alignments = alignmentStore()`
export function writableModel<T>(namespace: string) {
	return () => initializeWritableModel<T>(namespace);
}
