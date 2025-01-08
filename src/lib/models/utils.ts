import { getContext, hasContext, setContext } from 'svelte';
import { readable, writable } from 'svelte/store';

//==============================================================================
// useSharedStore, useWritable, useReadable
//  - https://dev.to/jdgamble555/the-correct-way-to-use-stores-in-sveltekit-3h6i
//==============================================================================

// This file is a utility to create a shared store context in Svelte.
// This is important so that we can share usage of the stores across components,
// and not worry about duplicating stores.
// context for any type of store
const useSharedStore = <T, A>(name: string, fn: (value?: A) => T, defaultValue?: A) => {
	if (hasContext(name)) {
		return getContext<T>(name);
	}
	const _value = fn(defaultValue);
	setContext(name, _value);
	return _value;
};
export const useWritable = <T>(name: string, value: T) => useSharedStore(name, writable, value);
export const useReadable = <T>(name: string, value: T) => useSharedStore(name, readable, value);
