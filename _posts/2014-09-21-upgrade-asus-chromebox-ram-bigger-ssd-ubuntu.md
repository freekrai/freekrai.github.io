---
layout: "post"
title: "Upgrade an ASUS Chromebox - more RAM, bigger SSD, and Ubuntu"
tags: 
- "code"
date: "2014-09-21 18:55:54"
ogtype: "article"
bodyclass: "post"
---

ASUS makes a pretty handy [Chromebox][1], and it's handy not just because it's running ChromeOS, it's handy because of everything you can do to the box itself.  
  
The ASUS Chromebox is easily upgradeable, and capable of running just about any linux distribution.  
  
The model I picked up, the [M004U][1] has the following specs:  

* Celeron 2955U (1.4GHz) 64 bit Dual core processor with 2MB L3 Cache
* 2GB DDR3 1600 RAM with 2 slots
* 16GB SSD HDD
* 802.11 b/g/n dual-band wireless, Bluetooth 4.0, and gigabit ethernet
* four USB 3.0 ports
* Intel HD Graphics with support for dual displays
* an SD/MMC card reader
  
This post will cover how to go about upgrading the hardware, and get it up and running in a dual boot mode to ChromeOS and Chrubuntu.  
  
Here are the parts I used:
  
* ASUS CHROMEBOX-M004U Desktop PC Celeron 2955U (1.4GHz) 2GB DDR3 16GB SSD HDD from [Amazon][1]
* Crucial 8GB Kit (4GBx2) DDR3/DDR3L 1600 MT/s (PC3-12800) CL11 SODIMM 204-Pin 1.35V/1.5V Memory For Mac CT2C4G3S160BM from [Amazon][2]
* MyDigitalSSD SC2 Super Cache 2 42mm SATA III 6G M.2 NGFF M2 SSD Solid State Drive (128GB) From [Amazon][3]

I also had a wireless Logitech k360 keyboard and mouse I could use, as well as a Samsung monitor for a display.  
  
### Getting into the Hardware

First off, you don't need to make any kind of system image before modifying the unit, you can simply remove the installed SSD and RAM and insert your new parts and go from there. In the instructions below, you'll make a USB stick that can be used to restore the disk to a factory fresh image of Chrome OS.  
  
To do this, first remove the four rubber feet on the bottom of the unit. You may need to use a small flat head screwdriver to help get them off. Don't place them anywhere sticky side down!  
  
You'll then find four screws underneath where the feet were, remove them. Then carefully remove the bottom of the unit. This may be a little difficult, so you may try and slip a small screwdriver in the vents to help. Don't scratch it up or use force.  
  
You should now be taking a look inside, and marvelling at the relative simplicity of the device!  
  
You'll see the RAM chip(s), which can be easily removed by opening the clips on the edges and lifting outward.  
  
<img src="http://cdn.rogerstringer.com/wp-content/uploads/2014/09/cb1.png" alt="cb1" width="183" height="244" class="alignright size-full wp-image-5896" />  
  
If you are upgrading the SSD, you'll need a tiny screwdriver to remove the screw holding in the wireless/bluetooth card, which is easily identified by the two wires that connect to it. You may remove this card entirely, or do like I did and just remove the screw holding it in and it should give you enough room to install the SSD. Underneath this is the stock Sandisk SSD, which is held in by one screw on it's far edge, so remove the screw, and pull out the SSD.  
  
Place your new SSD in the slot, and put the tiny screw back in to hold it. Now put the wireless/bluetooth card back in place, and put it's screw back in as well.  
  
Now put the bottom of the case back on, put the screws back in, and put the feet back on. You're done with the hardware upgrade!  

### Getting into ChromeOS
  
Now you'll need to install Chrome OS onto your new empty SSD. To do this, visit this page and follow the instructions for your operating system to create a USB stick;  
  
<https://chrome.google.com/webstore/detail/chromebook-recovery-utili/jndclpdbaamdhonoechobihbbiimdgai?utm_source=gmail>  
  
This tool is a chrome extension but it creates the USB stick beautifully, just choose your chromebox model and it will install the recovery disk for you.  
  
Now, to get started:  

1. Start your Chromebook.
2. When the "Chrome OS is missing or damaged" screen appears, insert the USB flash drive or SD card you created into the USB port or SD card slot on your Chrome device.
3. Wait for the Chromebook to boot up from the flash drive.
4. Follow the instructions that appear on the screen.
5. On successful installation of the Chrome operating system, you will be prompted to remove the USB flash drive or SD card.
6. Remove the USB flash drive or SD card when prompted, and your Chromebook will automatically restart.
7. You should now be able to start your Chromebook as normal.
  
Now you are ready to do the install of Ubuntu if you so desire. If you just want a fast ChromeOS box, you are done!  
  
### Getting into Chrubuntu

Make sure you have ethernet plugged in, or access to a wireless access point so you can download the necessary files.  
  
Find the developer switch on your machine (it's in a little hole on the back of the left side next to the SD slot). Very carefully press a small paper clip end into this hole and press the power button and the remove the paperclip. When it boots, press ctrl-D to turn off OS verification mode. It should prompt you to turn on Developer mode by using the paper clip again without pressing the power button. It will now boot into developer mode, and take several minutes to prepare itself.  
  
When it has booted, hit Ctrl-D and it will come up to the setup screen, make sure your correct networking is selected. Select continue and accept the agreement.  
  
At the sign in screen press Ctrl-Alt-F2 to get into a shell.  
  
Login with user `chronos` and hit enter, ...it should not ask for a password.  
  
Become root using the command;  
  
```javascript
sudo bash
```
  
Then issue the command to boot into the development bios by default;  

```javascript
chromeos-firmwareupdate --mode=todev
```
  
*(if you don't do this it will erase Ubuntu on next boot. You can undo this by booting again to the shell and issuing the command; `chromeos-firmwareupdate --mode=normal`)*
  
Now type the command;  
  
```javascript
reboot
```
  
When it has booted, hit Ctrl-D and it will come up to the login screen, and now press Ctrl-Alt-F2 to get into a shell.  
  
Login with user `chronos` again and hit enter, it should not ask for a password.  
  
At this point you can download custom update scripts that will install the appropriate kernel, and a choice of several flavours of linux.  
  
To use install Chrubuntu, type the command;  
  

```javascript
curl -L -O http://goo.gl/s9ryd > s9ryd
```

And after it has downloaded the script, type the command;  
  
```javascript
sudo bash s9ryd
```
  
It will prompt you to choose the appropriate size in Gigabytes you wish to give to ubuntu, I gave it 100  
  
Let the machine reboot (still into ChromeOS), it will say it's repairing itself and reboot. Now choose the language and networking again, and at the login prompt press Ctrl+Alt+f2 to get a shell and give the username `chronos` (no password)  
  
You'll need to run the script again, so type the command;    

```javascript
curl -L -O http://goo.gl/s9ryd > s9ryd
```
    
And after it has downloaded the script again, you can install by using parameters, where;  
  
* default (ubuntu-desktop on x86, xubuntu-desktop on arm)
* kubuntu-desktop
* lubuntu-desktop
* xubuntu-desktop
* edubuntu-desktop
* ubuntu-standard (no GUI installed)
  
So to install the default you would enter;  
  
```javascript
sudo bash s9ryd
```
    
or to install ubuntu-desktop lts, type;  
  
```javascript
sudo bash s9ryd ubuntu-desktop lts
```
  
Now it will run for quite a long time, depending on your connection speed. It will prompt you for locale and other settings, most users can just hit enter.  
  
In fact, once the download starts, I highly suggest you go grab a sandwich or something, anything is better than watching the download count slowly roll around.  
  
When it is finished, it will prompt you to reboot by hitting Enter.  
  
You should now verify that everything is as you like it. You can switch between ChromeOS and Chrubuntu by using the following commands;  
  
To make it always boot Ubuntu, go into Terminal and type;  
  
```javascript
sudo cgpt add -i 6 -P 5 -S 1 /dev/sda
```

To make boot to Chrome;  
  

```javascript
sudo cgpt add -i 6 -P 0 -S 1 /dev/sda
```
  
(if, for some reason your keyboard doesn't work on boot, try reconnecting it)  
  
The default Ubuntu user is `user` with password also set to `user`. Please change the password!  
  
You're done! You can stop here unless you need to always boot to Ubuntu, and want to write some scripts to switch envronments, or want to change the default user.  
  
### Boot to Chrubuntu, and Script switching back and forth

  
To always boot into chrubuntu, at the Google sign in screen press Ctrl-Alt-F2 to get into a shell.  
  
Login with user `chronos` and hit enter, it should not ask for a password.  
  
type the commands;  
  
```javascript
sudo cgpt add -i 6 -P 5 -S 1 /dev/sda
sudo reboot
```
    
Just wait for it to restart, and it will boot up into your alternate OS  
  
To make it boot to Chrome every time;  
  

```javascript
sudo cgpt add -i 6 -P 0 -S 1 /dev/sda
sudo reboot
```

Note: don't hit Ctrl-D anymore at the OS Security screen, just wait for it to come up... this for some reason didn't work on the next boot, it did however work from then onward. It also boots up amazingly fast.  
  
**WARNING: if you switch the developer switch back off YOU WILL LOSE YOUR UBUNTU INSTALL and go back to a completely reset ChromeBox.**  
  
You may want to do yourself a favor, and set up some scripts, so that you can boot to chrome from the terminal in Ubuntu by typing chromeos, and to Ubuntu by doing `Ctrl+Alt+F2` and typing `ubuntu`. To do this do the following steps.  
  
When booted into Ubuntu, find your `.bashrc` file for the default account user, and add this to the bottom using the vi editor; (you can look up how to use vi on the web, but to put it simply, you would type `vi .bashrc`, scroll to the bottom, and on a empty line press the "a" key to add text, type in the line below, and when done hit escape, then type `:wq` to save and exit from vi)  

```javascript  
alias chromeos='sudo cgpt add -i 6 -P 0 -S 0 /dev/sda;sudo reboot'
```
  
After you have saved the file exit the terminal by typing;  
  
```javascript
exit
```
  
now open a terminal again, and type the command;  
  
```javascript
chromeos
```
  
It should prompt for a password, you should enter user...(we'll change it later)  
  
Wait for it to boot after beeping, and do a `Ctrl+Alt+F2` to get to the chrome shell, login with user `chronos`, and enter the command;  
  
```javascript
sudo vim .profile
```  
  
And edit the file (hit the `a` key to get into insert mode just like in vi) and add:  
  

```javascript
alias ubuntu='sudo cgpt add -i 6 -P 5 -S 1 /dev/sda;sudo reboot'
```

Press esc to return to 'command mode' Press `shift + z` then `shift + z` again to save the file and return to the terminal  
  
Type `exit` and press enter.  
  
Now in Ubuntu, you can type in a terminal the command; `chromeos` ...and you will boot into chrome ...and in Chrome, you can hit `Ctrl-Alt-F2` to get the shell, login as `chronos`, and type `ubuntu` to boot into ubuntu!  
  
You won't have to do anything when the dive is rebooted or powered up, just wait a few seconds and it will beep a couple of times, and then boot up into whatever OS was running previously.  
  
**Update:** I've updated this post with a different RAM package, as the original RAM that was being sold got updated to only support 1.5V, and the Chromebox requires 1.35V, so the Crucial RAM listed here now is 1.35V, which works fine with this Chromebox :)

 [1]: http://amzn.to/1rdaB85
 [2]: http://amzn.to/1ATN7dT
 [3]: http://amzn.to/1uVvYfI