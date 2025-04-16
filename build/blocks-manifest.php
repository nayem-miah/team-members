<?php
// This file is generated. Do not modify it manually.
return array(
	'team-members' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/team-members',
		'version' => '0.1.0',
		'title' => 'Team Members',
		'category' => 'text',
		'icon' => 'groups',
		'keywords' => array(
			'groups',
			'team',
			'teams',
			'group',
			'grid',
			'members'
		),
		'description' => 'A team member grid.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'full',
				'wide'
			)
		),
		'textdomain' => 'team-members',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'providesContext' => array(
			'create-block/team-members-columns' => 'columns'
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 2
			)
		),
		'example' => array(
			'attributes' => array(
				'columns' => 2
			),
			'innerBlocks' => array(
				array(
					'name' => 'create-block/team-member',
					'attributes' => array(
						'name' => 'Nayem Miah',
						'bio' => 'Full-Stack Developer',
						'url' => 'https://picsum.photos/id/1012/300/200',
						'socialLinks' => array(
							array(
								'icon' => 'facebook'
							),
							array(
								'icon' => 'twitter'
							),
							array(
								'icon' => 'instagram'
							)
						)
					)
				),
				array(
					'name' => 'create-block/team-member',
					'attributes' => array(
						'name' => 'Shakib Islam',
						'bio' => 'Front-end Deeloper',
						'url' => 'https://picsum.photos/id/1011/300/200',
						'socialLinks' => array(
							array(
								'icon' => 'facebook'
							),
							array(
								'icon' => 'twitter'
							),
							array(
								'icon' => 'instagram'
							)
						)
					)
				)
			)
		)
	)
);
