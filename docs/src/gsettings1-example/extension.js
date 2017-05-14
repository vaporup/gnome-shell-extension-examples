const St        = imports.gi.St;
const Main      = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const Gio       = imports.gi.Gio;

// Settings
const SETTINGS_SCHEMA = 'org.gnome.shell.extensions.examples.gsettings';
const GSETTINGS1_KEY = 'gsettings1';

let button, settings;

function getSettings(schema) {
	if (Gio.Settings.list_schemas().indexOf(schema) == -1)
        	throw _("Schema \"%s\" not found.").format(schema);
	return new Gio.Settings({ schema: schema });
}

function _showMenu() {
	button.menu.removeAll();
	let toggle_label = "log-integer";
	let toggle_switch = new PopupMenu.PopupSwitchMenuItem(toggle_label, false);
	toggle_switch.connect('activate', _logToggleActivated);
	button.menu.addMenuItem(toggle_switch);
}

function _logToggleActivated() {
	log("===== gsettings1 Example =====");
        let gsettings1  = settings.get_int(GSETTINGS1_KEY);
	log(gsettings1);
}

function init() {
	settings = getSettings(SETTINGS_SCHEMA);
	settings.connect('changed::' + GSETTINGS1_KEY, _logToggleActivated);
}

function enable() {
	button = new PanelMenu.Button(0.0);
	let label = new St.Label({text: "gsettings1"});
	button.actor.add_actor(label);
	button.actor.connect('button-press-event', _showMenu);
	Main.panel.addToStatusArea('services', button);
}

function disable() {
	button.destroy();
}
