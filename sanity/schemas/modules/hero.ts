import { SquareHalf } from "phosphor-react";
import { defineType } from "sanity";
import { customImage } from "sanity/lib/custom-image";

export const hero = defineType({
	type: 'object',
	name: 'hero',
	title: 'Hero',
  icon: SquareHalf,
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Title',
		},
		{
			type: 'text',
			title: 'Text',
			name: 'text',
		},
		customImage({
			name: 'image',
			title: 'Image',
		}),
		{
			type: 'string',
			name: 'theme',
			title: 'Theme',
			description: 'Background image theme; Text color will be highest contrast',
			options: {
				list: [
					{title: 'Light', value: 'light'},
					{title: 'Dark', value: 'dark'}
				],
				layout: 'radio'
			}
		},
		{
			type: 'string',
			name: 'contentPlacement',
			title: 'Content placement',
			options: {
				list: [
					{title: 'Left', value: 'left'},
					{title: 'Right', value: 'right'}
				],
				layout: 'radio'
			}
		}
	]
})
