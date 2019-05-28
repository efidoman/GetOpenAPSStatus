// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: notes-medical;

let baseUrl = "http://192.168.86.52"

let tempBasalJSON = await getJSON(baseUrl + "/temp_basal")
let tempRate = getValue(tempBasalJSON, "rate")
let tempDuration = getValue(tempBasalJSON, "duration")

let edisonBatteryJSON = await getJSON(baseUrl + "/edison_battery")
let batteryPercentage = getValue(edisonBatteryJSON, "battery")

let enactedJSON = await getJSON(baseUrl + "/enacted")
let cob = getValue(enactedJSON, "COB")
let tick = getValue(enactedJSON, "tick")

let iobJSON = await getJSON(baseUrl + "/iob")
let iob = getValue(iobJSON[0],"iob")

let glucoseJSON = await getJSON(baseUrl + "/sgv.json")
let glucose = getValue(glucoseJSON[0],"glucose")
let direction = getValue(glucoseJSON[0],"direction")
let dateString = getValue(glucoseJSON[0],"dateString")

let bgDate = new Date(dateString)



let openapsStatus = bgDate.toLocaleString() + " BG=" + glucose + " Direction=" + direction + " IOB=" + iob + " COB=" + cob + " Tick=" + tick + " Temp Rate=" + tempRate + " for " + tempDuration + " minutes battery = " + batteryPercentage + " date = " + bgDate.toLocaleString()

let openapsStatusSpeach = "At " + dateString + " glucose is at " + glucose + " changed " + tick + " from last reading. The direction is " + direction + ". Carbs on board is " + cob + ". Insulin on board is " + iob + ". Temp basal of " + tempRate + " set for " + tempDuration + " minutes." + "Rig Battery is at " + batteryPercentage + " percent."

let cal = await Calendar.defaultForEvents()
let evt = new CalendarEvent()

evt.title = "bg" + glucose + " " + tick
evt.location = "iob " + iob + " cob " + cob
evt.notes = openapsStatus
evt.calendar = cal
var dtNow = new Date()
var dt15 = new Date()
dt15.setMinutes(dt15.getMinutes() + 15)
var dt5 = new Date()
dt5.setMinutes(dt15.getMinutes() + 5)

evt.startDate = bgDate
evt.endDate = dt15
evt.save()

let x = new Notification()
x.scriptName = "GetOpenAPSStatus"
x.title = "touch to run " + x.scriptName
x.openURL = "scriptable:///run?scriptName=GetOpenAPSStatus"

x.setTriggerDate(dt5)
x.schedule()


if(config.runsWithSiri){
Speech.speak(openapsStatusSpeach)
QuickLook.present(openapsStatus)
}
console.log(openapsStatus)

async function getJSON(url) {
  let req = new Request(url);
  let json = await req.loadJSON().catch((e) => {});
  return json
}

function getValue(json, key) {
	if (json === void(0)) {
		 return "-"
	} else {
		return json[key]
	}
}
