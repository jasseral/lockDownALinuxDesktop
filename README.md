# lockDownALinuxDesktop

This Gnome extension lock a ubuntu desktop 18.04 , final user only can execute programs  that exits in the
desktop (example : you can left , a navigator or network configuration shortcut) ; this was created for second milestone requirement in a upwork contract.

This extension was created for running in Ubuntu 18.04

# Previous requirements
1) sudo add-apt-repository universe
2) sudo apt install gnome-tweak-tool


# How to install
1) Clone the respository 

2) Just run the script `sh install.sh system` (as root). this copy the extension to /usr/share/gnome-shell/extensions , once installed, you may need to restart your Gnome Shell. Use `ALT + F2` and indicate `r` or `restart`. and this extension will be avaliable in Tweaks->Extensions "lockDownALinuxDesktop" and enable.

3) Press the key "Súper" ![Image description](https://sleewee.com/wp-content/uploads/2019/01/windows-key-standard-location.png)

# Important notes
I left the search options available for test properties (for example : open "tweaks" and enable or disable extension) , for production use the functionality "search" will be desactivated,