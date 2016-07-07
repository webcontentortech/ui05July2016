var stationData = [{stationN0:1,name:"Vaishali"},{stationN0:2,name:"Kaushambi"},{stationN0:3,name:"Anand Vihar"},{stationN0:4,name:"Karkarduma"},{stationN0:5,name:"Preet Vihar"},{stationN0:6,name:"Nirman Vihar"},{stationN0:7,name:"Laxmi Nagar"},{stationN0:8,name:"Yamuna Bank"},{stationN0:9,name:"Indraprastha"},{stationN0:10,name:"Pragati Maidan"},{stationN0:11,name:"Mandi House"},{stationN0:12,name:"Barakhambha Road"},{stationN0:13,name:"Rajiv Chowk"},{stationN0:14,name:"Ramakrishna Ashram Marg"},{stationN0:15,name:"Jhandewalan"},{stationN0:16,name:"Karol Bagh"},{stationN0:17,name:"Rajendra Place"},{stationN0:18,name:"Patel Nagar"},{stationN0:19,name:"Shadipur"},{stationN0:20,name:"Kirti Nagar"},{stationN0:21,name:"Moti Nagar"},{stationN0:22,name:"Ramesh Nagar"},{stationN0:23,name:"Rajouri Garden"},{stationN0:24,name:"Tagore Garden"},{stationN0:25,name:"Subhash Nagar"},{stationN0:26,name:"Tilak Nagar"},{stationN0:27,name:"Janakpuri East"},{stationN0:28,name:"Janakpuri West"},{stationN0:29,name:"Uttam Nagar East"},{stationN0:30,name:"Uttam Nagar West"},{stationN0:31,name:"Nawada"},{stationN0:32,name:"Dwarka Mor"},{stationN0:33,name:"Dwarka"},{stationN0:34,name:"Dwarka Sector 14"},{stationN0:35,name:"Dwarka Sector 13"},{stationN0:36,name:"Dwarka Sector 12"},{stationN0:37,name:"Dwarka Sector 11"},{stationN0:38,name:"Dwarka Sector 10"},{stationN0:39,name:"Dwarka Sector 9"},{stationN0:40,name:"Dwarka Sector 8"},{stationN0:41,name:"Dwarka Sector 21"},{stationN0:42,name:"Dilshad Garden"},{stationN0:43,name:"Jhilmil"},{stationN0:44,name:"Mansarovar Park"},{stationN0:45,name:"Shahdara"},{stationN0:46,name:"Welcome"},{stationN0:47,name:"Seelampur"},{stationN0:48,name:"Shastri Park"},{stationN0:49,name:"Kashmere Gate"},{stationN0:50,name:"Tis Hazari"},{stationN0:51,name:"Pul Bangash"},{stationN0:52,name:"Pratap Nagar"},{stationN0:53,name:"Shastri Nagar"},{stationN0:54,name:"Inderlok"},{stationN0:55,name:"Kanhiya Nagar"},{stationN0:56,name:"Keshav Puram"},{stationN0:57,name:"Netaji Subhash Place"},{stationN0:58,name:"Kohat Enclave"},{stationN0:59,name:"Pitam Pura"},{stationN0:60,name:"Rohini East"},{stationN0:61,name:"Rohini West"},{stationN0:62,name:"Rithala"},{stationN0:63,name:"Jahangirpuri"},{stationN0:64,name:"Adarsh Nagar"},{stationN0:65,name:"Azadpur"},{stationN0:66,name:"Model Town"},{stationN0:67,name:"GTB Nagar"},{stationN0:68,name:"Vishwa Vidyalaya"},{stationN0:69,name:"Vidhan Sabha"},{stationN0:70,name:"Civil Lines"},{stationN0:71,name:"Chandni Chowk"},{stationN0:72,name:"Chawri Bazar"},{stationN0:73,name:"New Delhi"},{stationN0:74,name:"Patel Chowk"},{stationN0:75,name:"Central Secretariat"},{stationN0:76,name:"Udyog Bhawan"},{stationN0:77,name:"Race Course"},{stationN0:78,name:"Jor Bagh"},{stationN0:79,name:"INA"},{stationN0:80,name:"AIIMS"},{stationN0:81,name:"Green Park"},{stationN0:82,name:"Hauz Khas"},{stationN0:83,name:"Malviya Nagar"},{stationN0:84,name:"Saket"},{stationN0:85,name:"Qutub Minar"},{stationN0:86,name:"Chhatarpur"},{stationN0:87,name:"Sultanpur"},{stationN0:88,name:"Ghitorni"},{stationN0:89,name:"Arjan Garh"},{stationN0:90,name:"Guru Dronacharya"},{stationN0:91,name:"Sikandarpur"},{stationN0:92,name:"MG Road"},{stationN0:93,name:"IFFCO Chowk"},{stationN0:94,name:"HUDA City Centre"}]

var startStation;
var endStation;
var obj1;
var obj2;
var station1;
var station2;
var stationDifference;
var timetaken;
var farePrice;
var trainSwitch;

$(document).ready(function () {
    $("#Map").hide();
    $("#extraDetail").hide();
    $("#fullMap").click(function () {
        $("#Map").show();

    });

    $("#reset").click(function () {
        $('#boardingStation').val('');
        $('#deboardingStation').val('');
        $("#fareprice").text("0");
        $("#noofstation").text("0");
        $("#timetaken").text("0");
    });

    $("#search").click(function () {
        $("#extraDetail").show();
        getStation();
        getDetail();
        $("#fareprice").text(farePrice+"Rs");
        $("#noofstation").text(stationDifference);
        $("#timetaken").text(timetaken+"Min");
        $("#trainswitch").text(trainSwitch);
    }); 

    function getStation() {
        var e1 = document.getElementById("boardingStation");
        startStation = e1.options[e1.selectedIndex].text;
        obj1 = _.find(stationData, function(obj1) { return obj1.name == startStation });
        var e2 = document.getElementById("deboardingStation");
        endStation = e2.options[e2.selectedIndex].text;
        obj2 = _.find(stationData, function(obj2) { return obj2.name == endStation });        
    }

    function getDetail() {
        station1 = obj1.stationN0;
        station2 = obj2.stationN0;
        stationDifference = Math.abs(station2 - station1);
        timetaken = stationDifference*2;
        farePrice = stationDifference*(1.5);
        if (station1<=41) {
            if (station2>=63 && station2<=94) {
                trainSwitch="switch train to yellow line";
            }else if (station2>=42 && station2<=62) {
                trainSwitch="switch train to yellow line then to red line";
            }else{
                trainSwitch="no switch";
            }
        }else if (station1>=42 && station1<=62) {
            if (station2>=63 && station2<=94) {
                trainSwitch="switch train to yellow line";
            }else if (station2<42) {
                trainSwitch="switch train to yellow line then to blue line";
            }else{
                trainSwitch="no switch";
            }
        }else if (station1>=63 && station1<=94) {
            if (station2>=42 && station2<=62) {
                trainSwitch="switch train to red line";
            }else if (station2<42) {
                trainSwitch="switch train to blue line";
            }else{
                trainSwitch="no switch";
            }
        }
    }
});