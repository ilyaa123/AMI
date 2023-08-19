import path from 'path';
import { app, BrowserWindow } from 'electron';

process.env.ROOT = path.join(__dirname, '..');
process.env.DIST = path.join(process.env.ROOT, 'dist-electron');
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
	? path.join(process.env.ROOT, 'public')
	: path.join(process.env.ROOT, '.output/public');

// eslint-disable-next-line
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

// let win: BrowserWindow;

function init() {
	const win: BrowserWindow = new BrowserWindow({
		frame: true,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegrationInWorker: true,
			contextIsolation: false,
			nodeIntegration: true,
			webSecurity: false
		}
	});

	if (process.env.VITE_DEV_SERVER_URL) {
		win.loadURL(process.env.VITE_DEV_SERVER_URL);
	} else {
		win.loadFile(path.join(process.env.VITE_PUBLIC!, 'index.html'));
	}
}

app.whenReady().then(init);
