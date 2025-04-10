import { TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function SocialLinkForm( {
	updateSocialItem,
	removeSocialItem,
	link,
	icon,
} ) {
	return (
		<div className="wp-block-blocks-course-team-member-link-form">
			<TextControl
				label={ __( 'Icon', 'team-members' ) }
				value={ icon }
				onChange={ ( iconName ) => {
					updateSocialItem( 'icon', iconName );
				} }
			/>
			<TextControl
				label={ __( 'URL', 'team-members' ) }
				value={ link }
				onChange={ ( linkUrl ) => {
					updateSocialItem( 'link', linkUrl );
				} }
			/>
			<br />
			<Button isDestructive onClick={ removeSocialItem }>
				{ __( 'Remove Link', 'team-members' ) }
			</Button>
		</div>
	);
}
