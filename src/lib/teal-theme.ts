import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'teal-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #76d6b6
		'--color-primary-50': '234 249 244', // #eaf9f4
		'--color-primary-100': '228 247 240', // #e4f7f0
		'--color-primary-200': '221 245 237', // #ddf5ed
		'--color-primary-300': '200 239 226', // #c8efe2
		'--color-primary-400': '159 226 204', // #9fe2cc
		'--color-primary-500': '118 214 182', // #76d6b6
		'--color-primary-600': '106 193 164', // #6ac1a4
		'--color-primary-700': '89 161 137', // #59a189
		'--color-primary-800': '71 128 109', // #47806d
		'--color-primary-900': '58 105 89', // #3a6959
		// secondary | #476d76
		'--color-secondary-50': '227 233 234', // #e3e9ea
		'--color-secondary-100': '218 226 228', // #dae2e4
		'--color-secondary-200': '209 219 221', // #d1dbdd
		'--color-secondary-300': '181 197 200', // #b5c5c8
		'--color-secondary-400': '126 153 159', // #7e999f
		'--color-secondary-500': '71 109 118', // #476d76
		'--color-secondary-600': '64 98 106', // #40626a
		'--color-secondary-700': '53 82 89', // #355259
		'--color-secondary-800': '43 65 71', // #2b4147
		'--color-secondary-900': '35 53 58', // #23353a
		// tertiary | #6375a1
		'--color-tertiary-50': '232 234 241', // #e8eaf1
		'--color-tertiary-100': '224 227 236', // #e0e3ec
		'--color-tertiary-200': '216 221 232', // #d8dde8
		'--color-tertiary-300': '193 200 217', // #c1c8d9
		'--color-tertiary-400': '146 158 189', // #929ebd
		'--color-tertiary-500': '99 117 161', // #6375a1
		'--color-tertiary-600': '89 105 145', // #596991
		'--color-tertiary-700': '74 88 121', // #4a5879
		'--color-tertiary-800': '59 70 97', // #3b4661
		'--color-tertiary-900': '49 57 79', // #31394f
		// success | #bcff85
		'--color-success-50': '245 255 237', // #f5ffed
		'--color-success-100': '242 255 231', // #f2ffe7
		'--color-success-200': '238 255 225', // #eeffe1
		'--color-success-300': '228 255 206', // #e4ffce
		'--color-success-400': '208 255 170', // #d0ffaa
		'--color-success-500': '188 255 133', // #bcff85
		'--color-success-600': '169 230 120', // #a9e678
		'--color-success-700': '141 191 100', // #8dbf64
		'--color-success-800': '113 153 80', // #719950
		'--color-success-900': '92 125 65', // #5c7d41
		// warning | #f2bd73
		'--color-warning-50': '253 245 234', // #fdf5ea
		'--color-warning-100': '252 242 227', // #fcf2e3
		'--color-warning-200': '252 239 220', // #fcefdc
		'--color-warning-300': '250 229 199', // #fae5c7
		'--color-warning-400': '246 209 157', // #f6d19d
		'--color-warning-500': '242 189 115', // #f2bd73
		'--color-warning-600': '218 170 104', // #daaa68
		'--color-warning-700': '182 142 86', // #b68e56
		'--color-warning-800': '145 113 69', // #917145
		'--color-warning-900': '119 93 56', // #775d38
		// error | #ec838d
		'--color-error-50': '252 236 238', // #fcecee
		'--color-error-100': '251 230 232', // #fbe6e8
		'--color-error-200': '250 224 227', // #fae0e3
		'--color-error-300': '247 205 209', // #f7cdd1
		'--color-error-400': '242 168 175', // #f2a8af
		'--color-error-500': '236 131 141', // #ec838d
		'--color-error-600': '212 118 127', // #d4767f
		'--color-error-700': '177 98 106', // #b1626a
		'--color-error-800': '142 79 85', // #8e4f55
		'--color-error-900': '116 64 69', // #744045
		// surface | #544f50
		'--color-surface-50': '229 229 229', // #e5e5e5
		'--color-surface-100': '221 220 220', // #dddcdc
		'--color-surface-200': '212 211 211', // #d4d3d3
		'--color-surface-300': '187 185 185', // #bbb9b9
		'--color-surface-400': '135 132 133', // #878485
		'--color-surface-500': '84 79 80', // #544f50
		'--color-surface-600': '76 71 72', // #4c4748
		'--color-surface-700': '63 59 60', // #3f3b3c
		'--color-surface-800': '50 47 48', // #322f30
		'--color-surface-900': '41 39 39' // #292727
	}
};
