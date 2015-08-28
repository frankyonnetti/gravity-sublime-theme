# Gravity Theme

### A [Sublime Text 3](http://www.sublimetext.com/3) UI theme. 

Created this UI theme using a port of the Default theme that comes with ST3. The goal was to make a dark and light theme that feels at home on OS X Yosemite & El Capitan.

* Version 2.5 introduces OS X blue highlight color and cleaned up UI.
* Version 2.0 introduces the **Reverse Gravity** light theme.

---

**Gravity Theme**

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/gravity_2.5.png">

**Gravity Theme with Blue Highlight Color**

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/gravity_blue_2.5.png">

---

**Reverse Gravity Theme**

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/reverse_gravity_2.5.png">

**Reverse Gravity Theme with Blue Highlight Color**

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/reverse_gravity_blue_2.5.png">


_The Gravity theme only works with Sublime Text 3 and hasn't been tested on earlier versions._

## Install using Package Control

If you're using [Package Control](https://sublime.wbond.net), you can easily install the Gravity theme by using the **Command Palette**:

* Go to `Tools > Command Palette...`
* Type `Package Control: Install Package`
* Search for `Theme - Gravity`


## Install using GIT

* Locate your Sublime Text **"Packages"** directory by using the menu item `Preferences > Browse Packages...`
* Load up that directory in Terminal app; for example: `cd /Users/Library/Application Support/Sublime Text 3/Packages`
* Next, run this GIT command: `git clone git@github.com:frankyonnetti/gravity-sublime-theme.git"`
* Rename the folder to `Theme - Gravity`


## Install manually

* Use the [Download ZIP](https://github.com/frankyonnetti/gravity-sublime-theme/archive/master.zip) button from GitHub.
* Locate your Sublime Text **"Packages"** directory by using the menu item `Preferences > Browse Packages...`
* Unzip the archive and rename the folder `Theme - Gravity` and place it in the **"Packages"** directory.


## Activating the theme

* Open your settings by using the menu `Preferences > Settings - User`
* Add, or replace, the **"theme:"** settings with 
`"theme": "Gravity.sublime-theme"` or, 
`"theme": "Reverse Gravity.sublime-theme"`


**Applying the file Tab height option:**

* Open your settings (if not already open) by using the menu `Preferences > Settings - User`
* Add **one** of the two options:
`"tab_height_short": true` or, 
`"tab_height_tall": true`

**Applying the blue hightlight color option:**

* Open your settings (if not already open) by using the menu `Preferences > Settings - User` and add:
`"highlight_color_blue": true`

## Replacing the default "fold" icon

Currently the only way to override the default *code folding icon* with the one for Gravity, you have to place the `Theme - Default` directory in the **"Packages"** directory. The Gravity fold icon looks like: 

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/fold%402x.png" width="16" height="16">

* Download the [directory with icon](https://s3.amazonaws.com/yonnetti-sublime/gravity/Theme-Default.zip) separately and place it in the **"Packages"** directory.
* You can get there by using the menu item `Preferences > Browse Packages...`


## Syntax color scheme

The syntax color scheme in each screenshot is a port of the **Monokai-Sublime scheme** created for Gravity. Used the [TmTheme scheme editor](http://tmtheme-editor.herokuapp.com) to create it.

Once you have Gravity installed, you can select the scheme by using the menu item `Preferences > Color Scheme > Theme - Gravity > Monokai Gravity (SL)`

The font used for the syntax shown in the screenshot is `"font_face": "Monaco"` and `"font_size": 14`


## App icon

Download the [white and orange app icons](https://s3.amazonaws.com/yonnetti-sublime/gravity/Gravity-App-Icons-101.zip) (v.1.0.1) designed to fit in Yosemite's dock along with the other OSX (10.10) icons.

To install the white or orange app icon, select **Sublime Text** in your **Applications** folder. From the Finder menu, select `File > Get Info` and drag the .icns file on top of the default Sublime Text icon in the *Get Info window*.

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/app-icon-white-101.png" width="128" height="128"> <img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/app-icon-orange-101.png" width="128" height="128">


## Trouble shooting

**1) Font descenders are cut off in the file UI tabs**

Apply this setting to your "Settings - User" file.
`"tab_font_small": true`

**2) The "Find" feature appears to be hidden behind the status bar.**

When switching themes in Sublime Text, it will retain the height for the Find bar set in the previous theme. Sometimes this will cause the bar to appear hidden behind the status bar.

[To fix, simply grab the bar and pull-up.](https://github.com/frankyonnetti/gravity-sublime-theme/wiki/Theme-Trouble-Shooting)


## Usage license

This work is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).


