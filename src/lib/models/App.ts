// App model - application instance state, settings, and preferences

export interface App {
	id: number;
	theme: 'light' | 'dark'; // App theme
	version: string; // App version
	globalSettings: Record<string, any>; // Shared settings for all users
}

export function createApp(theme: 'light' | 'dark' = 'light', version: string = '1.0.0'): App {
	return {
		id: Date.now(), // Unique identifier
		theme,
		version,
		globalSettings: {}
	};
}
