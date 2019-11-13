<?php

use SilverStripe\View\SSViewer;
use SilverStripe\Admin\LeftAndMain;

// Force use of custom admin theme
LeftAndMain::config()->set(
    'admin_themes',
    [
        'i-lateral/silverstripe-admin-toggle-checkbox:cms-forms',
        'silverstripe/admin:cms-forms',
        SSViewer::DEFAULT_THEME
    ]
);
