import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { name, bio, url, alt,id } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && <image src={url} className={id ? `wp-image-${id}`: null}  alt={alt} />}
			<RichText.Content tagName="h4" value={ name } />
			<RichText.Content tagName="p" value={ bio } />
		</div>
	);
}
