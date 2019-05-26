# GetOpenAPSStatus
This is javascript code that can be cut-n-paste into the IOS Scriptable app in order to have a way to get OpenAPS status (BG, direction, IOB, COB, Temp Basal, etc.) directly from rig and update calendar / watch even while internet connectivity is offline.

# Features
* This script gets the status directly from OpenAPS rig (even if the internet connection is offline).
* Updates a quick view of the latest information directly from the rig (BG, Tick, IOB, COB, Temp Basal, Duration, Battery and other status information).
* Automatically creates a calendar event in the default calendar which allows updates to the watch as well through the Calendar complication.
* Automatically creates a rich text notification for 5 minutes later that can be pressed at anytime to re-run the automation.
* Supports being called by siri. If called by siri, then it will speak back the status in human understandable language.

# Requirements
* Download IOS Scriptable app on iphone or ipad.
* Click + button to create a new script
* Cut-n-paste the javascript code into the new script.
* Name the new script "GetOpenAPSStatus" with no spaces.
* Optional Setup Below
* Click the script settings menu (icon upper left under the Done label)
* Setup Siri shortcut
* Add to Home Screen

* Optional Instructions to launch from IFTTT
* Install IFTTT app and create login if you don't have one.
* Click on My Applets
* Click the + button in the upper right to create a new applet
* Click on This
* Search and select Button Widget as trigger
* Click on That
* Search and select Notifications as action
* Select "Send a rich notification from the IFTTT app"
* For the Link URL, type in this exactly "scriptable:///run?scriptName=GetOpenAPSStatus"
* Create Action
* Edit Title and name it what you want
* Hit Finish
* Now this button shows up on iPhone and watch. You'll need to click it and then click on the Rich Notification that it generates to run the Scriptable script. That's as good as iPhone will allow for automation. 
* The script will automatically create a new rich notification for 5 minutes later that you can click at anytime to get the latest rig status and updates to the Calendar / watch complication.
* make sure you use an apple watch face that has the calendar complication to benefit from this feature.

