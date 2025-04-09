import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

export default function Save( { attributes } ) {
	const { name, bio, url, alt, id, socialLinks } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			{ url && (
				<image
					src={ url }
					className={ id ? `wp-image-${ id }` : null }
					alt={ alt }
				/>
			) }
			<RichText.Content tagName="h4" value={ name } />
			<RichText.Content tagName="p" value={ bio } />
			<div className="wp-block-blocks-course-team-member-social-links">
				<ul>
					{ socialLinks.length > 0 &&
						socialLinks.map( ( item, index ) => {
							return (
								<li key={ index }>
									<a href= {item.link} target='__blank'>
										<Icon icon={ item?.icon } />
									</a>
								</li>
							);
						} ) }
				</ul>
			</div>
		</div>
	);
}
