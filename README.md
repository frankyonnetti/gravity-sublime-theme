<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/icons/gravity-logo%402x.png" width="145" height="146">

## Gravity - a [Sublime Text 3](http://www.sublimetext.com/3) UI theme.

The goal of this Sublime Text UI is to make a theme that feels right at home on macOS.

`Version 3.5 - Theme code and assets clean up and a little polish`

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">


### Gravity

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/gravity-3.5.jpg">

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">


### Gravity One

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/gravity-one-3.5.jpg">

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">


### Reverse Gravity

<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/screen-shots/reverse-gravity-3.5.jpg">

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">


## Install using Package Control

[<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/icons/package-control-horizontal%402x.png" width="190" height="48">](https://packagecontrol.io/packages/Theme%20-%20Gravity)

You can easily install the Gravity theme by using **Package Control** from the **Command Palette**:

1. Enter `Package Control: Install Package`
2. Search for `Theme - Gravity`

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">

## Appling Gravity theme


**Activating the theme**

Using the Command Palette, search for **UI: Select Theme** and select one of the following:

- **Gravity**.sublime-theme
- **Gravity One**.sublime-theme
- **Reverse Gravity**.sublime-theme

To use any of the following, open your settings from the menu `Preferences > Settings - User`

**Apply the macOS title bar** _(new featured added to Sublime Text 3)_:

```
"gravity_title_bar": true
```

**Apply one of the two UI Tab height options:**

```
"gravity_tab_height_tall": true
"gravity_tab_height_short": true
```

**Apply the blue hightlight color:**

```
"gravity_highlight_color_blue": true
```

**Apply the sidebar header (padding):**

```
"gravity_sidebar_header": true
```

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">

## Syntax color schemes

### Monokai Gravity

Shown in the **Gravity** screen-shot above.

1. To apply, search for `UI: Select Color Scheme` using the **Command Palette**
2. Select `Monokai Gravity`


### One Dark Gravity

This scheme was forked from [Timothy de Jongh's Github](https://github.com/IceTimux/one-dark-sublime-text-3-color-scheme) and is shown in the **Gravity One** screen-shot above.

1. To apply, search for `UI: Select Color Scheme` using the **Command Palette**
2. Select `One Dark Gravity`


### OneHalfLight

Shown in the **Reverse Gravity** screen-shot above, it is one of the **[One Half Color Schemes](https://packagecontrol.io/packages/One%20Half%20Color%20Schemes)** created by [Son A. Pham](https://github.com/sonph)

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">

## App icon

Sublime Text 3 app icon replacements designed to fit perfectly in the macOS dock.

Download the **[orange](http://bit.ly/2MEfvu3)** or **[white](http://bit.ly/2MCcwCy)** app icon.

[<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/sublimetext-3-orange.png" width="128" height="128">](http://bit.ly/2MEfvu3)
[<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/sublimetext-3-white.png" width="128" height="128">](http://bit.ly/2MCcwCy)

Download the **[orange](http://bit.ly/2lPe8gN)** or **[white](http://bit.ly/2tQ0aQp)** app icon with outset outlines.

[<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/sublimetext-3-orange-outline.png" width="128" height="128">](http://bit.ly/2lPe8gN)
[<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/sublimetext-3-white-outline.png" width="128" height="128">](http://bit.ly/2tQ0aQp)

You can also download the **[Sublime Text 2](http://bit.ly/1s1CbKG)** versions.

[<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/app-icon-orange-101.png" width="84" height="84">](http://bit.ly/1s1CbKG)
[<img src="https://s3.amazonaws.com/yonnetti-sublime/gravity/icons/app-icon-white-101.png" width="84" height="84">](http://bit.ly/1s1CbKG)

To install the app icon:

1. Select **Sublime Text** in your **Applications** folder.
2. From the Finder menu, select `File > Get Info`
3. Drag the .icns file on top of the default Sublime Text icon in the _Get Info_ window.

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">

## Trouble shooting

**1) Font descenders are cut off in the file UI tabs**

Apply this setting to your `Settings - User` file.

```
"gravity_tab_font_small": true
```

**2) The "Find" feature appears to be hidden behind the status bar.**

When switching themes in Sublime Text, it will retain the height for the Find bar set in the previous theme. Sometimes this will cause the bar to appear hidden behind the status bar.

[To fix, simply grab the bar and pull-up.](https://github.com/frankyonnetti/gravity-sublime-theme/wiki/Theme-Trouble-Shooting)

**3) Missing sidebar icons.**

Installing and switching themes in Sublime Text may cause some sidebar icons to not show. Disabling installed/inactive themes via Package Control should fix the issue.

<img src="https://yonnetti-sublime.s3.amazonaws.com/gravity/spacer.png" width="1" height="1">

## Usage license

This work is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).


