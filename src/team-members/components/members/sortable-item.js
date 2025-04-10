import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';
export default function SortableItem( { id, setSelectedLink, selectedLink, index,icon } ) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable( { id } );

	const style = {
		transform: CSS.Transform.toString( transform ),
		transition,
	};
	return (
		<li
			ref={ setNodeRef }
			{ ...attributes }
			{ ...listeners }
			style={ style }
			className={ selectedLink === index ? 'is-selected' : null }
		>
			<button
				onClick={ () => {
					setSelectedLink( index );
				} }
				aria-label={ __( 'Edit Social Link', 'team-members' ) }
			>
				<Icon icon={ icon } />
			</button>
		</li>
	);
}
