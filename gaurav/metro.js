var stationData=[{stationN0:1,name:"Vaishali",farePrice:"0rs",timeTaken:"0min"},{stationN0:2,name:"Kaushambi",farePrice:"4rs",timeTaken:"4min"},{stationN0:3,name:"Anand Vihar",farePrice:"8rs",timeTaken:"8min"},{stationN0:4,name:"Karkarduma",farePrice:"12rs",timeTaken:"12min"},{stationN0:5,name:"Preet Vihar",farePrice:"16rs",timeTaken:"16min"},{stationN0:6,name:"Nirman Vihar",farePrice:"20rs",timeTaken:"20min"},{stationN0:7,name:"Laxmi Nagar",farePrice:"24rs",timeTaken:"24min"},{stationN0:8,name:"Yamuna Bank",farePrice:"28rs",timeTaken:"28min"},{stationN0:9,name:"Indraprastha",farePrice:"32rs",timeTaken:"32min"},{stationN0:10,name:"Pragati Maidan",farePrice:"36rs",timeTaken:"36min"},{stationN0:11,name:"Mandi House",farePrice:"40rs",timeTaken:"40min"},{stationN0:12,name:"Barakhambha Road",farePrice:"44rs",timeTaken:"44min"},{stationN0:13,name:"Rajiv Chowk",farePrice:"48rs",timeTaken:"48min"},{stationN0:14,name:"Ramakrishna Ashram Marg",farePrice:"52rs",timeTaken:"52min"},{stationN0:15,name:"Jhandewalan",farePrice:"56rs",timeTaken:"56min"},{stationN0:16,name:"Karol Bagh",farePrice:"60rs",timeTaken:"60min"},{stationN0:17,name:"Rajendra Place",farePrice:"64rs",timeTaken:"64min"},{stationN0:18,name:"Patel Nagar",farePrice:"68rs",timeTaken:"68min"},{stationN0:19,name:"Shadipur",farePrice:"72rs",timeTaken:"72min"},{stationN0:20,name:"Kirti Nagar",farePrice:"76rs",timeTaken:"76min"},{stationN0:21,name:"Moti Nagar",farePrice:"80rs",timeTaken:"80min"},{stationN0:22,name:"Ramesh Nagar",farePrice:"84rs",timeTaken:"84min"},{stationN0:23,name:"Rajouri Garden",farePrice:"88rs",timeTaken:"88min"},{stationN0:24,name:"Tagore Garden",farePrice:"92rs",timeTaken:"92min"},{stationN0:25,name:"Subhash Nagar",farePrice:"96rs",timeTaken:"96min"},{stationN0:26,name:"Tilak Nagar",farePrice:"100rs",timeTaken:"100min"},{stationN0:27,name:"Janakpuri East",farePrice:"104rs",timeTaken:"104min"},{stationN0:28,name:"Janakpuri West",farePrice:"108rs",timeTaken:"108min"},{stationN0:29,name:"Uttam Nagar East",farePrice:"112rs",timeTaken:"112min"},{stationN0:30,name:"Uttam Nagar West",farePrice:"116rs",timeTaken:"116min"},{stationN0:31,name:"Nawada",farePrice:"120rs",timeTaken:"120min"},{stationN0:32,name:"Dwarka Mor",farePrice:"124rs",timeTaken:"124min"},{stationN0:33,name:"Dwarka",farePrice:"128rs",timeTaken:"128min"},{stationN0:34,name:"Dwarka Sector 14",farePrice:"132rs",timeTaken:"132min"},{stationN0:35,name:"Dwarka Sector 13",farePrice:"136rs",timeTaken:"136min"},{stationN0:36,name:"Dwarka Sector 12",farePrice:"140rs",timeTaken:"140min"},{stationN0:37,name:"Dwarka Sector 11",farePrice:"144rs",timeTaken:"144min"},{stationN0:38,name:"Dwarka Sector 10",farePrice:"148rs",timeTaken:"148min"},{stationN0:39,name:"Dwarka Sector 9",farePrice:"152rs",timeTaken:"152min"},{stationN0:40,name:"Dwarka Sector 8",farePrice:"156rs",timeTaken:"156min"},{stationN0:41,name:"Dwarka Sector 21",farePrice:"160rs",timeTaken:"160min"}]

var stationName;

$(document).ready(function () {
	$("#Map").hide();
	console.log("hi")
	$("#extraDetail").hide();

	$("#fullMap").click(function () {
		$("#Map").show();
	});	
	$("#search").click(function () {
		$("#extraDetail").show();
		var stationName=$("#deboardingStation").val();
		console.log(stationName);
	});	
});