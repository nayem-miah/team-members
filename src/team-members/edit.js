import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';

import './editor.scss';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export default function Edit( { attributes, setAttributes } ) {
	const { columns } = attributes;
	const handleComuns = ( newColumns ) => {
		setAttributes( {
			columns: newColumns,
		} );
	};
	return (
		<div {...useBlockProps({
			className: `has-${columns}-columns`
		}) }>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns', 'team-members' ) }
						min={ 1 }
						max={6}
						onChange={handleComuns}
						value={columns}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ [ 'create-block/team-member' ] }
				template={ [
					[ 'create-block/team-member' ],
					[ 'create-block/team-member' ],
				] }

				// templateLock= "all"    //cant add more templates
			/>
		</div>
	);
}
