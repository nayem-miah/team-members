import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import { Spinner } from '@wordpress/components';
export default function Edit( { attributes, setAttributes } ) {
	const { name, bio, url, alt } = attributes;

	const handleName = ( newName ) => {
		setAttributes( { name: newName } );
	};

	const handleBio = ( newBio ) => {
		setAttributes( { bio: newBio } );
	};

	const handleImage = ( image ) => {
		if ( ! image || ! image.url ) {
			setAttributes( {
				url: undefined,
				id: undefined,
				alt: image.alt,
			} );
			return;
		}
		setAttributes( {
			url: image.url,
			id: image.id,
			alt: image.alt,
		} );
	};

	return (
		<div { ...useBlockProps() }>
			{ url && (
				<div
					className={ `wp-block-blocks-course-team-member-img${
						isBlobURL( url ) ? ' is-loading' : ''
					}` }
				>
					<img src={ url } alt={ alt } />
					{ isBlobURL( url ) && <Spinner /> }
				</div>
			) }

			<MediaPlaceholder
				icon="admin-users"
				onSelect={ handleImage }
				onSelectURL={ ( va ) => console.log( 'url..', va ) }
				onError={ ( e ) => console.log( e ) }
				accept="image/*" // from local divice to add
				allowedTypes={ [ 'image' ] } //from media to select
				disableMediaButtons={ url }
			/>
			<RichText
				placeholder={ __( 'Member Name', 'team-member' ) }
				tagName="h4"
				onChange={ handleName }
				value={ name }
			/>
			<RichText
				placeholder={ __( 'Member Bio', 'team-member' ) }
				tagName="p"
				onChange={ handleBio }
				value={ bio }
			/>
		</div>
	);
}
