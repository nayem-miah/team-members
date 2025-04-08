import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { name, bio } = attributes;

	const handleName = ( newName ) => {
		setAttributes( { name: newName } );
	};

	const handleBio = ( newBio ) => {
		setAttributes( { bio: newBio } );
	};

	return (
		<div { ...useBlockProps() }>
			<MediaPlaceholder
				icon="admin-users"
				onSelect={ ( v ) => console.log( 'v....', v ) }
				onSelectURL={(va) => console.log('url..', va)}
				onError={(e) => console.log(e)}
				accept='image/*'   // from local divice to add
				allowedTypes={['image']}  //from media to select
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
