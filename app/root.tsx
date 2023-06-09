import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import { DynamicLinks } from 'remix-utils'

import { useRouteData } from "./hooks/useRouteData";

import { ThemeBody, ThemeHead, ThemeProvider } from "~/utils/theme-provider";

export const links: LinksFunction = () => {
  return [
		{ rel: 'manifest', href: '/manifest.json' },
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ];
};

export const meta: MetaFunction = () => {
	return { 
		viewport: 'width=device-width, initial-scale=1',
		charset: "utf-8",
		'x-ua-compatible': 'ie=edge',
		'format-detection': 'telephone=no',
	}
}


function Root({ title }: {title?: string}) {
	const { theme, lang } = useRouteData()
	
  return (
    <ThemeProvider specifiedTheme={theme}>
			<html lang={lang}>
				<head>
					{title && <title>{title}</title>}
					<Meta />
					<Links />
					<DynamicLinks />
					<ThemeHead ssrTheme={Boolean(theme)} />
				</head>
				<body>
					<Outlet />
					<ThemeBody ssrTheme={Boolean(theme)} />
					<ScrollRestoration />
					<Scripts />
					{process.env.NODE_ENV === "development" && <LiveReload />}
					<div id="portals" className="portals" />
				</body>
			</html>
		</ThemeProvider>
  );
}

export default Root
