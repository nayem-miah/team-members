import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'create-block/team-member', {
	title: __( 'Team Member', 'team-members' ),
	description: __( 'A team member item', 'team-members' ),
	icon: 'admin-users',
	parent: [ 'create-block/team-members' ],
	supports: {
		reusable: false,
		html: false,
	},
	usesContext: [ 'create-block/team-members-columns' ],  // context api
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		id: {
			type: 'number',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		socialLinks: {
			type: 'array',
			default: [
				{ link: 'https:/facebook.com', icon: 'facebook' },
				{ link: 'https:/instagram.com', icon: 'instagram' },
			],
			// source: 'query',
			// selector: '.wp-block-blocks-course-team-member-social-links ul li',
			// query: {
			// 	icon: {
			// 		source: 'attribute',
			// 		attribute: 'data-icon',
			// 	},
			// 	link: {
			// 		source: 'attribute',
			// 		selector: 'a',
			// 		attribute: 'href',
			// 	},                                       //it is about social devemeter remove and improve the code, and reduce pressure on DB, I will see the code later. video no. 68
			// },
		},
	},
	edit: Edit,
	save: Save,
} );
