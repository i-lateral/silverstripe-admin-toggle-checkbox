# SilverStripe Admin Toggle Checkbox Fields

Simple module that re-styles all checkboxes in the admin as Toggle fields
(thanks to https://www.w3schools.com/howto/howto_css_switch.asp for the base CSS to make this work)

**NOTE:** As SilverStripe 4 uses react to generate checkboxes, as of 1.1.* this module utilises a 
JavaScript mutator to detect changes to the DOM and then restructure checkbox elements based in order
to style them (rather than utilising templates).

![Example](toggle-checkbox.gif)

## Install

Install using composer: `composer require i-lateral/silverstripe-admin-toggle-checkbox`

## Usage

Just install the module and flush the cache. All Checkbox fields in the CMS will be automatically re-styled