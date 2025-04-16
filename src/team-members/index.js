import { registerBlockType, createBlock } from '@wordpress/blocks';

import './style.scss';
import './members';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: {
		src: 'groups',
		background: '#FFFFFF',
		foreground: '#ff6900',
	},
	edit: Edit,
	save,
	transforms: {
		from: [
			{
				type: "block",
				blocks: ['core/gallery'],
				transform: ({ images, columns }) => {
					const innerBlocks = images.map(({url,id,alt}) => {
						return createBlock('create-block/team-member', {
							alt,id,url
						} );
					})
					return createBlock('create-block/team-members', {
						columns: columns || 2

					}, innerBlocks);
				}

			}
		]
	}
} );


