import { CSSProperties } from 'react';

const FIRST_LEVEL_BREADCRUMBS = [{ name: 'home', link: '/' }];

const NUMBER_REGEX = /[0-9]*\.?[0-9]*$/;
const PASSWORD_VALIDATOR_REGEX = /^(?=.{8,})(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+*!=]).*$/;
const EMAIL_VALIDATOR_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const DATE_AND_TIME_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])*$/;

enum HASHTAG {
	'hashtag' = 'Hashtag Name',
	'slug' = 'Slug',
	'is_active' = 'Status',
	'is_sponsored_by' = 'Sponsored by',
	'priority' = 'Priority',
	'meta_title' = 'Meta Title',
	'meta_description' = 'Meta Description'
}

const CUSTOM_STYLE: object = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		width: '100%',
		cursor: 'pointer',
		fontWeight: '600',
		fontSize: '14px',
		lineHeight: '14px',
		color: state.isSelected ? 'white' : '#464748',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		padding: '10px',
		backgroundColor: state.isSelected ? '#4cbb9b' : 'rgba(255,255,255,0.3)',
		':active': {
			backgroundColor: '#4cbb9b'
		},
		':hover': {
			backgroundColor: '#4cbb9b',
			color: 'white'
		},
		':focus': {
			backgroundColor: '#4cbb9b',
			outline: 0
		}
	}),
	menu: (base: CSSProperties) => ({
		...base,
		width: '100%',
		zIndex: 99,
		border: '0.5px solid #FFFFFF'
		// backdropFilter: 'blur(10px)'
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		paddingBottom: '0',
		paddingTop: '0',
		border: ' 0.5px solid #FFFFFF',
		'::-webkit-scrollbar': {
			width: '4px'
		},
		'::-webkit-scrollbar-track': {
			webkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.2)'
		},
		'::-webkit-scrollbar-thumb': {
			backgroundColor: '#4cbb9b',
			outline: '0'
		}
	}),
	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),
	input: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),
	placeholder: (base: CSSProperties) => ({
		...base,
		color: '#464748',
		fontWeight: 400,
		fontSize: '0.9375rem',
		innerHTML: 'Auswählen Template'
	}),
	indicatorsContainer: (base: CSSProperties) => ({
		...base,
		'&::hover': {
			color: '#464748'
		}
	}),
	valueContainer: (base: CSSProperties) => ({
		...base,
		color: '#464748',
		padding: '0px'
	}),
	indicatorSeparator: (base: CSSProperties) => ({
		...base,
		display: 'none'
	}),
	control: () => ({
		display: 'flex',
		width: '100%',
		overflow: 'none',
		marginTop: '5px',
		// backdropFilter: 'blur(15px)',
		color: '#464748',
		fontSize: '16px',
		borderRadius: '12px',
		cursor: 'pointer',
		fontWeight: '700',
		padding: '0 10px',
		outline: 'none',
		div: {
			overflowY: 'initial',
			fontSize: '20px',
			fontWeight: '400',
			color: 'white',
			'&::-webkit-scrollbar': {
				width: 0,
				height: 0
			},
			'&::hover': {
				color: '#464748'
			},
			svg: {
				fill: 'white'
			}
		}
	}),
	singleValue: (base: CSSProperties, state: any) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';

		return { ...base, opacity: opacity, transition: transition, color: '#25e0fa', fontSize: '14px' };
	}
};

export {
	FIRST_LEVEL_BREADCRUMBS,
	NUMBER_REGEX,
	PASSWORD_VALIDATOR_REGEX,
	EMAIL_VALIDATOR_REGEX,
	DATE_AND_TIME_REGEX,
	HASHTAG,
	CUSTOM_STYLE
};
