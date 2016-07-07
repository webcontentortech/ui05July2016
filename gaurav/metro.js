
var stationData=[{stationN0:1,name:"Vaishali",farePrice:"0",timeTaken:"0"},{stationN0:2,name:"Kaushambi",farePrice:"4",timeTaken:"4"},{stationN0:3,name:"Anand Vihar",farePrice:"8",timeTaken:"8"},{stationN0:4,name:"Karkarduma",farePrice:"12",timeTaken:"12"},{stationN0:5,name:"Preet Vihar",farePrice:"16",timeTaken:"16"},{stationN0:6,name:"Nirman Vihar",farePrice:"20",timeTaken:"20"},{stationN0:7,name:"Laxmi Nagar",farePrice:"24",timeTaken:"24"},{stationN0:8,name:"Yamuna Bank",farePrice:"28",timeTaken:"28"},{stationN0:9,name:"Indraprastha",farePrice:"32",timeTaken:"32"},{stationN0:10,name:"Pragati Maidan",farePrice:"36",timeTaken:"36"},{stationN0:11,name:"Mandi House",farePrice:"40",timeTaken:"40"},{stationN0:12,name:"Barakhambha Road",farePrice:"44",timeTaken:"44"},{stationN0:13,name:"Rajiv Chowk",farePrice:"48",timeTaken:"48"},{stationN0:14,name:"Ramakrishna Ashram Marg",farePrice:"52",timeTaken:"52"},{stationN0:15,name:"Jhandewalan",farePrice:"56",timeTaken:"56"},{stationN0:16,name:"Karol Bagh",farePrice:"60",timeTaken:"60"},{stationN0:17,name:"Rajendra Place",farePrice:"64",timeTaken:"64"},{stationN0:18,name:"Patel Nagar",farePrice:"68",timeTaken:"68"},{stationN0:19,name:"Shadipur",farePrice:"72",timeTaken:"72"},{stationN0:20,name:"Kirti Nagar",farePrice:"76",timeTaken:"76"},{stationN0:21,name:"Moti Nagar",farePrice:"80",timeTaken:"80"},{stationN0:22,name:"Ramesh Nagar",farePrice:"84",timeTaken:"84"},{stationN0:23,name:"Rajouri Garden",farePrice:"88",timeTaken:"88"},{stationN0:24,name:"Tagore Garden",farePrice:"92",timeTaken:"92"},{stationN0:25,name:"Subhash Nagar",farePrice:"96",timeTaken:"96"},{stationN0:26,name:"Tilak Nagar",farePrice:"100",timeTaken:"100"},{stationN0:27,name:"Janakpuri East",farePrice:"104",timeTaken:"104"},{stationN0:28,name:"Janakpuri West",farePrice:"108",timeTaken:"108"},{stationN0:29,name:"Uttam Nagar East",farePrice:"112",timeTaken:"112"},{stationN0:30,name:"Uttam Nagar West",farePrice:"116",timeTaken:"116"},{stationN0:31,name:"Nawada",farePrice:"120",timeTaken:"120"},{stationN0:32,name:"Dwarka Mor",farePrice:"124",timeTaken:"124"},{stationN0:33,name:"Dwarka",farePrice:"128",timeTaken:"128"},{stationN0:34,name:"Dwarka Sector 14",farePrice:"132",timeTaken:"132"},{stationN0:35,name:"Dwarka Sector 13",farePrice:"136",timeTaken:"136"},{stationN0:36,name:"Dwarka Sector 12",farePrice:"140",timeTaken:"140"},{stationN0:37,name:"Dwarka Sector 11",farePrice:"144",timeTaken:"144"},{stationN0:38,name:"Dwarka Sector 10",farePrice:"148",timeTaken:"148"},{stationN0:39,name:"Dwarka Sector 9",farePrice:"152",timeTaken:"152"},{stationN0:40,name:"Dwarka Sector 8",farePrice:"156",timeTaken:"156"},{stationN0:41,name:"Dwarka Sector 21",farePrice:"160",timeTaken:"160"}]

var startStation;
var endStation;
var obj1;
var obj2;
var station1;
var station2;
var stationDifference;
var timetaken1;
var timetaken2;
var timeDifference;
var farePrice1;
var farePrice2;
var farePriceDiffrence;

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
		$("#fareprice").text(farePriceDiffrence);
		$("#noofstation").text(stationDifference);
		$("#timetaken").text(timeDifference);
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
		timetaken1 = obj1.timeTaken;
		timetaken2 = obj2.timeTaken;
		timeDifference = Math.abs(timetaken2 - timetaken1);
		farePrice1 = obj1.farePrice;
		farePrice2 = obj2.farePrice;
		farePriceDiffrence = Math.abs(farePrice2 - farePrice1);
	}
});