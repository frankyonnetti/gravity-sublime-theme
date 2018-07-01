<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/icons/gravity-logo%402x.png" width="145" height="146">

### Gravity - a [Sublime Text 3](http://www.sublimetext.com/3) UI theme.

The goal of this Sublime Text UI is to make a theme that feels at home on macOS.

* Version 3.5: code / assets clean up and polish.

---

**Gravity Theme**

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/gravity-3.5.png">

---

**Gravity One Theme**

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/gravity-one-3.5.png">

---

**Reverse Gravity Theme**

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/reverse-gravity-3.5.png">


_The Gravity theme has only been tested with Sublime Text 3._

## Install using Package Control

[<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/icons/package-control-horizontal%402x.png" width="190" height="48">](https://packagecontrol.io/packages/Theme%20-%20Gravity)

You can easily install the Gravity theme by using the **Command Palette**:

* Go to `Tools > Command Palette...`
* Type `Package Control: Install Package`
* Search for `Theme - Gravity`


## Activating the theme

* Open your settings by using the menu `Preferences > Settings - User`
* Add, or replace, the **"theme:"** settings with
`"theme": "Gravity.sublime-theme"` or,
`"theme": "Gravity One.sublime-theme"` or,
`"theme": "Reverse Gravity.sublime-theme"`

**Applying the new macOS title bar in Gravity**:

* Open your settings (if not already open) by using the menu `Preferences > Settings - User`
* And add:
`"gravity_title_bar": true`

**Applying the file Tab height option:**

* Open your settings (if not already open) by using the menu `Preferences > Settings - User`
* And add:
`"gravity_tab_height_tall": true` or `"gravity_tab_height_short": true`

**Applying the blue hightlight color option:**

* Open your settings (if not already open) by using the menu `Preferences > Settings - User` and add:
`"gravity_highlight_color_blue": true`

**Applying the sidebar header option:**

* Open your settings (if not already open) by using the menu `Preferences > Settings - User` and add:
`"gravity_sidebar_header": true`


## Syntax color schemes

### Gravity

* Use the included version of **Monokai Gravity** color scheme by using the Command Palette. Search for "UI: Select Color Scheme" and select _Monokai Gravity_. Or add the following to your prefence file: `"color_scheme": "Packages/Theme - Gravity/One Dark Gravity.tmTheme",`


### Gravity One

* Use the included version of **One Dark Gravity** color scheme by using the Command Palette. Search for "UI: Select Color Scheme" and select _One Dark Gravity_. The scheme was forked from [Timothy de Jongh's Github](https://github.com/IceTimux).


### Reverse Gravity

* Using the **[One Half Light Color Scheme](https://packagecontrol.io/packages/One%20Half%20Color%20Schemes)** created by [Son A. Pham](https://github.com/sonph)


## App icon

Download the Sublime Text 3 [orange app icon](http://bit.ly/2MEfvu3) or [white app icon](http://bit.ly/2MCcwCy) replacement. Designed to fit perfectly in the macOS dock.

* :bulb: To install the orange or white app icon, select **Sublime Text** in your **Applications** folder. From the Finder menu, select `File > Get Info` and drag the .icns file on top of the default Sublime Text icon in the *Get Info window*.

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/sublimetext-3-orange.png" width="128" height="128"> <img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/sublimetext-3-white.png" width="128" height="128">

You can also download the [Sublime Text 2 versions](http://bit.ly/1s1CbKG).

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/app-icon-orange-101.png" width="64" height="64"> <img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/app-icon-white-101.png" width="64" height="64">


## Trouble shooting

**1) Font descenders are cut off in the file UI tabs**

Apply this setting to your "Settings - User" file.
`"gravity_tab_font_small": true`

**2) The "Find" feature appears to be hidden behind the status bar.**

When switching themes in Sublime Text, it will retain the height for the Find bar set in the previous theme. Sometimes this will cause the bar to appear hidden behind the status bar.

[To fix, simply grab the bar and pull-up.](https://github.com/frankyonnetti/gravity-sublime-theme/wiki/Theme-Trouble-Shooting)

**3) Missing sidebar icons.**

Installing and switching themes in Sublime Text may cause some sidebar icons to not show. Disabling installed/inactive themes via Package Control should fix the issue.


## Usage license

This work is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).


