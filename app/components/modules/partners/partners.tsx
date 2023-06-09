import React from 'react'
import { ModuleProps } from '..'

import stylesUrl from './partners.css'

import type { LinksFunction } from '@remix-run/node';
import { Link } from '~/components/core/link/link';
import { Image } from '~/components/core/image/image';

export const links: LinksFunction = () => {
  return [
		{ rel: "stylesheet", href: stylesUrl }
	];
};

const Partners = ({ data }: ModuleProps<'partners'>) => {
	return (
		<section className='partners'>
			<h2>{data.title}</h2>
			<p>{data.text}</p>
			<div>
				{data.partnerLogos.map(partner =>
					<Link key={partner._key} to={partner.href}>
						<Image image={partner.logo} lqipEnabled={false} />
					</Link>
				)}
			</div>
		</section>
	)
}

export default Partners