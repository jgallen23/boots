# Boots

Boots is a command line utility for Bootstrap.  It will let you build a custom instance of boostrap without leaving your terminal. 

##Installation

	npm install boots

##Usage

	Usage: boots [options]

	Options:

		-h, --help              output usage information
		-V, --version           output the version number
		-j, --js [plugins]      JS Plugins to include
		-c, --css [components]  CSS Components to include
		-o, --output [path]     Path to write files to
		-l, --list              List available plugins and components

##Examples

Lets say I just use bootstrap modal and tooltips, I can run this:

	boots --js bootstrap-modal.js,bootstrap-tooltip.js --css modals.less,tooltip.less -o public/bootstrap

and I'll get a bootstrap.js and bootstrap.css that has just what I need.

##Options

You can also run `boots --list` to get this list

	Javascript Plugins:
	bootstrap-transition.js
	bootstrap-modal.js
	bootstrap-dropdown.js
	bootstrap-scrollspy.js
	bootstrap-tab.js
	bootstrap-tooltip.js
	bootstrap-popover.js
	bootstrap-alert.js
	bootstrap-button.js
	bootstrap-collapse.js
	bootstrap-carousel.js
	bootstrap-typeahead.js

	CSS Components:
	reset.less
	scaffolding.less
	grid.less
	layouts.less
	type.less
	code.less
	labels.less
	badges.less
	tables.less
	forms.less
	buttons.less
	sprites.less
	button-groups.less
	navs.less
	navbar.less
	breadcrumbs.less
	pagination.less
	pager.less
	thumbnails.less
	alerts.less
	progress-bars.less
	hero-unit.less
	tooltip.less
	popovers.less
	modals.less
	dropdowns.less
	accordion.less
	carousel.less
	wells.less
	close.less
	utilities.less
	component-animations.less
	responsive.less

##History

####0.0.1 (04/23/2012)
- Initial release


##Future
- build entire bootstrap
- add var support
- custom output filename
- read from a config file

##Contributors
- Greg Allen ([@jgaui](http://twitter.com/jgaui)) [jga.me](http://jga.me)
