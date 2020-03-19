const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Lang = imports.lang;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const panel = Main.panel.actor;
const panel_box = panel.get_parent();
let panel_y = panel.get_y();
let panel_height = panel.get_height();
let show_event = false;
let hide_event = false;
let ANIMATION_SPEED = 0.45;


function hide_panel() {
  Tweener.addTween(panel, {
translation_y: 0,
      time: ANIMATION_SPEED
  });
}

function show_panel() {
  Tweener.addTween(panel, {
      translation_y: panel_height,
      time: ANIMATION_SPEED
  });
}


const init = function() {
	return new dashVisible();
}

const dashVisible = new Lang.Class({
	Name: 'hideDash.dashVisible',

	_init: function() {
		this.observer = null;
		this.old_x = Main.overview.viewSelector.actor.x;
		this.old_width = Main.overview.viewSelector.actor.get_width();
	},

	enable: function() {
		
    this.observer = Main.overview.connect("showing", Lang.bind(this, this._hide));    
    show_event = Main.overview.connect('showing', show_panel);
    hide_event = Main.overview.connect('hiding', hide_panel);
    panel_box.set_position(0, panel_y - panel_height);
    hide_panel();
	},

	disable: function() {
		
		Main.overview.disconnect(this.observer);
    this._show();
    
    if(show_event) Main.overview.disconnect(show_event);
    if(hide_event) Main.overview.disconnect(hide_event);
    panel_box.set_position(0, panel_y);
    panel.translation_y = 0;
	},

	_hide: function() {
		
		Main.overview._dash.actor.hide();
		Main.overview.viewSelector.actor.set_x(0);
		Main.overview.viewSelector.actor.set_width(0);
		Main.overview.viewSelector.actor.queue_redraw();
	},

	_show: function() {
		
		Main.overview._dash.actor.show();
		Main.overview.viewSelector.actor.set_x(this.old_x);
		Main.overview.viewSelector.actor.set_width(this.old_width);
		Main.overview.viewSelector.actor.queue_redraw();
	}
});