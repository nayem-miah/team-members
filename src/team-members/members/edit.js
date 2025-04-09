import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	// store as blockEditorStore,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import {
	Spinner,
	withNotices,
	ToolbarButton,
	PanelBody,
	TextareaControl,
	Icon,
	Tooltip,
} from '@wordpress/components';
import { useEffect, useState, useRef } from '@wordpress/element';

function Edit( {
	attributes,
	setAttributes,
	noticeOperations,
	noticeUI,
	isSelected,
} ) {
	const { name, bio, url, alt, id, socialLinks } = attributes;

	const [ blobURL, setBlobURL ] = useState();
	const [ selectedLink, setSelectedLink ] = useState();

	const titleRef = useRef();

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

	const handleURLImage = ( newUrl ) => {
		setAttributes( {
			url: newUrl,
			id: undefined,
			alt: '',
		} );
	};

	const onUploadError = ( message ) => {
		noticeOperations.removeAllNotices(); // that will help us to remove older error notices
		noticeOperations.createErrorNotice( message );
	};

	const handleRemoveImage = () => {
		setAttributes( {
			url: undefined,
			alt: '',
			id: undefined,
		} );
	};

	const handleChangeAlt = ( newAlt ) => {
		setAttributes( {
			alt: newAlt,
		} );
	};

	const addNewSocialIcon = () => {
		setAttributes( {
			socialLinks: [
				...socialLinks,
				{
					icon: 'wordpress',
					link: '',
				},
			],
		});
		
		setSelectedLink(socialLinks.length)
	};

	useEffect( () => {
		if ( ! id && isBlobURL( url ) ) {
			setAttributes( {
				url: undefined,
				alt: '',
			} );
		}
	}, [] );
	//This useEffect will wait for mounting the component then it will save setAttributes kay value
	// that means before uploading the image url is undefined.
	// if we dont write the code code image blob url will be saved and it will only spanning

	useEffect( () => {
		if ( isBlobURL( url ) ) {
			setBlobURL( url );
		} else {
			revokeBlobURL( blobURL );
			setBlobURL();
		}
	}, [ url ] );

	// when our image uploading there will be a blob url in url
	// when ulpoading completed, blob url become real url. blob url causes some memory leack
	//this useEffect is about when image uploading is completed blob url will be revoke or deleted.

	useEffect( () => {
		titleRef.current.focus();
	}, [ url ] );
	return (
		<>
			{ url && ! isBlobURL( url ) && (
				<InspectorControls>
					<PanelBody title={ __( 'Image Settings', 'team-memebrs' ) }>
						<TextareaControl
							label={ __( 'Alt Text', 'team-members' ) }
							value={ alt }
							onChange={ handleChangeAlt }
							help={ __(
								"Alternative text describes your image to people can't see it",
								'team-members'
							) }
						/>
					</PanelBody>
				</InspectorControls>
			) }

			{ url && (
				<BlockControls group="inline">
					<ToolbarButton
						icon="cover-image"
						label={ __( 'Replace image', 'team-members' ) }
					>
						<MediaReplaceFlow
							name={ __( 'Replace image', 'team-members' ) }
							onSelect={ handleImage }
							onSelectURL={ handleURLImage }
							onError={ onUploadError }
							allowedTypes={ [ 'image' ] }
							mediaId={ id }
							mediaURL={ url }
						/>
					</ToolbarButton>
					<ToolbarButton
						onClick={ handleRemoveImage }
						icon="format-image"
					>
						{ __( 'Remove Image', 'team-members' ) }
					</ToolbarButton>
				</BlockControls>
			) }

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
					onSelectURL={ handleURLImage }
					onError={ onUploadError }
					// accept="image/*" // from local divice to add
					allowedTypes={ [ 'image' ] } //from media to select
					disableMediaButtons={ url }
					notices={ noticeUI }
				/>
				<RichText
					placeholder={ __( 'Member Name', 'team-member' ) }
					tagName="h4"
					onChange={ handleName }
					value={ name }
					ref={ titleRef }
				/>
				<RichText
					placeholder={ __( 'Member Bio', 'team-member' ) }
					tagName="p"
					onChange={ handleBio }
					value={ bio }
				/>

				<div className="wp-block-blocks-course-team-member-social-links">
					<ul>
						{ socialLinks.map( ( item, index ) => {
							return (
								<li
									key={ index }
									className={
										selectedLink === index
											? 'is-selected'
											: null
									}
								>
									<button
										onClick={ () =>
											setSelectedLink( index )
										}
										aria-label={ __(
											'Edit Social Link',
											'team-members'
										) }
									>
										<Icon icon={ item?.icon } />
									</button>
								</li>
							);
						} ) }

						{ isSelected && (
							<li className="wp-block-blocks-course-team-member-add-icon-li">
								<Tooltip
									text={ __(
										'Add Social Link',
										'team-members'
									) }
								>
									<button
										aria-label={ __(
											'Add Social Link',
											'team-members'
										) }
										onClick={ addNewSocialIcon }
									>
										<Icon icon="plus" />
									</button>
								</Tooltip>
							</li>
						) }
					</ul>
				</div>
			</div>
		</>
	);
}

export default withNotices( Edit );
