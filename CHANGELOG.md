# cUI Styles CHANGELOG:
# [0.1.26] 2020-09-26
* [Fixed] Margin horizontal
* [Beta] Remove width =100% on small
# [0.1.25] 2020-08-26
* [Fixed] Margin remove class
# [0.1.24] 2020-09-26
* [Fixed] Icon bold
# [0.1.23] 2020-09-26
* [Added] Option **bold** for icon
# [0.1.22] 2020-09-26
* [Added] Support for class **fill** on path in icons
* [Added] Option to position dialog on the bottom of the window, also option **auto**
# [0.1.21] 2020-09-23
* [Changed] Input switch 
* [Changed] Form component
* [Changed] Dialog animation
# [0.1.20] 2020-09-22
* [Fixed] Dialog on small screen
# [0.1.19] 2020-09-21
* [Changed] Increase dialog responsiveness by changing position and behavior
# [0.1.18] 2020-09-21
* [Fixed] Navbar transparent in dark mode
* [Fixed] Borders in card and dialog in dark mode
* [Added] New screen size mixins which respct screen orientation
# [0.1.17] 2020-09-20
* [Fixed] - Select icon position on element resize
* [Fixed] - Fixed icon scaling
* [Changed] - dialog background in light theme
* [Added] - text truncate options
# [0.1.16] 2020-09-13
* [Added] New component - Float
# [0.1.15] 2020-09-10
* [Fixed] Reverted back changes related to icons in icon nav. List option has been fixed.
* [Changed] Tooltip size will be more flexible
# [0.1.14] 2020-09-08
* [Changed] Icon nav has been shrinked by default. To space out use **cui-space** on **cui-icon-nav**
* [Added] text-dark to bring light shade of text on darker backgorunds
* [EXPERIMENT] Remove margin top from headers which are first child in the container
# [0.1.13] 2020-08-25
* [Changed] Default font sizes
* [Changed] Card and dialog visual appearance
* [Changed] Header h1 font size
# [0.1.12] 2020-08-12
* [Fixed] Build fixes
# [0.1.11] 2020-08-12
* [Fixed] Colors in navbar
* [Fixed] Component backgrounds have now !important flag
* [Chnaged] Scrollbar customization applies only to screen sizes larger than medium
* [Added] {}-margin-remove to media queries
# [0.1.10] 2020-08-10
* [Changed] Focus on buttons

# [0.1.9] 2020-08-09
* [Fixed] Display tooltip on element that have ::before already
* [Changed] Navbar underline size on active elements
* [Added] Input flex element
* [Added] Flex grow/shrink options

# [0.1.7] 2020-08-07
* [Changed] Navbar indicator sizes
* [Changed] Added !important to paddings
* [Fixed] Removed redundant attributes from card component
* [Fixed] Force font-weight in heading children

# [0.1.6] 2020-08-06
* [Fixed] Scrollbars on dialog and offcanvas open

# [0.1.5] 2020-08-05
* [fixed] Adjustments in offcanvas
* [fixed] Adjustments in accordion

## [0.1.4] 2020-07-17
* [Fixed] Adjustements in visiblity components

## [0.1.3] 2020-07-16
* [Changed] Tabs, lists and navbar now have color themes - default indicator is of the same color as text
* [Added] Background default class for cases where transparent components need background (like default buttons)
* [Added] Media options for flex component
* [Added] New heights options and corresponding media queries
* [Added] Color themes for strokes in svg paths

## [0.1.2] 2020-07-15
* [Changed] Order 1-10 are available for all flex based components
* [Chnaged] Adjustments in tab and list components states

## [0.1.1] 2020-07-13
* [Added] Support for active state in list > a 
* [Changed] Navbar items states styling
 
## [0.1.0] 2020-07-13
* [Fix] Navbar item incorreclty displayed on --s
* [Fix] Dialog width on small devices
* [Added] Initial implementation of focus across all cUI elements

## [0.0.9] 2020-07-09
* [Fix] Dependency issues
* [Changed] Behavior of interactive components when they are focused
* [Added] Navbar space options
* [Added] Code and selection styling options

## [0.0.8] 2020-07-05
* [Fixed] Paddings in icons
* [Changed] Header have new top-and bottom margins
* [Changed] Tab indicators
* [Changed] Tooltip will show also on focus
* [Added] New CSS variables added to global scope
* [Added] New component - separator
* [Added] New drop option - drop hover
* [Added] New position - float
* [Added] Scrollbar customization

## [0.0.7] 2020-06-30 
* [Fixed] Tooltip default view not properly displayed
* [Fixed] Hints not properly displayed in dark mode
* [Fixed] Cover not behaving properly on overflow - added cover container
* [Changed] Active list item font-weight is now bold
* [Changed] Restructions on npm publish
* [Added] Themes colors in custom radio button
* [Added] New class: overflow-hidden
* [Added] Print view to breadcrumb, active and focus state
* [Added] New mode - no transitions - prevents from transitions
* [Added] Indication animations: pulse, blink, shake
* [Added] Shadow component

## [0.0.6] 2020-06-25
* [Fixed] Various fixes around framework - increased usage of global CSS variables
* [Changed] Framework refactoring - introduced flexibility in terms of custom framework build

## [0.0.5] 2020-06-24
* [Added] CSS build is now exported to Git repository and to npm

## [0.0.4] 2020-06-24
* [Changed] New color pallet for theme colors - more to come with future releases
* [Added] New shades of color theme and signals colors - very light/dark for backgrounds in containers, sections and hints 

## [0.0.3] 2020-06-18
* [Changed] CSS variables are now prefixed with the same prefix as all other components