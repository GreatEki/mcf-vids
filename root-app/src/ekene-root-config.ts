import { registerApplication, start } from 'single-spa';

registerApplication({
	name: '@ekene/camera-app',
	app: () => System.import('@ekene/camera-app'),
	activeWhen: ['/'],
});

start({
	urlRerouteOnly: true,
});
