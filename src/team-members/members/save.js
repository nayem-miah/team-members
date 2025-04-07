import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Save( { attributes, setAttributes } ) {
	const { name, bio } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content tagName="h4" value={ name } />
			<RichText.Content tagName="p" value={ bio } />
		</div>
	);
}
