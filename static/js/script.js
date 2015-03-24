
var colors = function(i) {
	var colors = {
		0: '#3182bd',
		1:'#6baed6',
		2:'#9ecae1',
		3:'#c6dbef',
		4:'#e6550d',
		5:'#fd8d3c',
		6:'#fdae6b',
		7:'#fdd0a2',
		8:'#31a354',
		9:'#74c476',
		10:'#a1d99b',
		11:'#c7e9c0',
		12:'#756bb1',
		13:'#9e9ac8',
		14:'#bcbddc',
		15:'#dadaeb',
		16:'#636363',
		17:'#969696',
		18:'#bdbdbd',
		20:'#d9d9d9'
	}
	return colors[i];
}

var disciplines = ["Archives", "Business", "Cognitive Science", "Computing", "IA", "Law", "Linguistics", "LIS", "Museums", "Philosophy", "Web"];

var disciplineSelections= [];
var chapterSelections = [];

var hue = function (i) {
	var hues = {
		0: "#E3E5E8",
		1: "#C7CAD1",
		2: "#ABB0BA",
		3: "#8F96A3",
		4: "#737B8C",
		5: "#5973A6",
		6: "#3366CC",
		7: "#5281E0",
		8: "#759EF0",
		9: "#6699FF",
		10: "#99BBFF",
		11: "#CCDDFF"
	}

	return hues[i];
}

var chapterPercentages  = [{
    'chapter': 1,
    'totalLength': 19342,
    'notesLength': 3344,
    'contentLength': 15998,
    'notes%': 17.29,
    'content%': 82.71,
    'lengths': [{
        'cat': 'Content',
        'percentage': 82.71,
        'value': 15998,
        'y0': 0,
        'y1': 15998
    }, {
        'cat': 'Notes',
        'percentage': 17.29,
        'value': 3344,
        'y0': 15998,
        'y1': 19342
    }]
}, {
    'chapter': 2,
    'totalLength': 15772,
    'notesLength': 2120,
    'contentLength': 13652,
    'notes%': 13.44,
    'content%': 86.56,
    'lengths': [{
        'cat': 'Content',
        'percentage': 86.56,
        'value': 13652,
        'y0': 0,
        'y1': 13652
    }, {
        'cat': 'Notes',
        'percentage': 13.44,
        'value': 2120,
        'y0': 13652,
        'y1': 15772
    }]
}, {
    'chapter': 3,
    'totalLength': 21010,
    'notesLength': 3267,
    'contentLength': 17743,
    'notes%': 15.55,
    'content%': 84.45,
    'lengths': [{
        'cat': 'Content',
        'percentage': 84.45,
        'value': 17743,
        'y0': 0,
        'y1': 17743
    }, {
        'cat': 'Notes',
        'percentage': 15.55,
        'value': 3267,
        'y0': 17743,
        'y1': 21010
    }]
}, {
    'chapter': 4,
    'totalLength': 17654,
    'notesLength': 1450,
    'contentLength': 16204,
    'notes%': 8.21,
    'content%': 91.79,
    'lengths': [{
        'cat': 'Content',
        'percentage': 91.79,
        'value': 16204,
        'y0': 0,
        'y1': 16204
    }, {
        'cat': 'Notes',
        'percentage': 8.21,
        'value': 1450,
        'y0': 16204,
        'y1': 17654
    }]
}, {
    'chapter': 5,
    'totalLength': 22765,
    'notesLength': 3450,
    'contentLength': 19315,
    'notes%': 15.15,
    'content%': 84.85,
    'lengths': [{
        'cat': 'Content',
        'percentage': 84.85,
        'value': 19315,
        'y0': 0,
        'y1': 19315
    }, {
        'cat': 'Notes',
        'percentage': 15.15,
        'value': 3450,
        'y0': 19315,
        'y1': 22765
    }]
}, {
    'chapter': 6,
    'totalLength': 18096,
    'notesLength': 4563,
    'contentLength': 13533,
    'notes%': 25.22,
    'content%': 74.78,
    'lengths': [{
        'cat': 'Content',
        'percentage': 74.78,
        'value': 13533,
        'y0': 0,
        'y1': 13533
    }, {
        'cat': 'Notes',
        'percentage': 25.22,
        'value': 4563,
        'y0': 13533,
        'y1': 18096
    }]
}, {
    'chapter': 7,
    'totalLength': 19763,
    'notesLength': 2897,
    'contentLength': 16866,
    'notes%': 14.66,
    'content%': 85.34,
    'lengths': [{
        'cat': 'Content',
        'percentage': 85.34,
        'value': 16866,
        'y0': 0,
        'y1': 16866
    }, {
        'cat': 'Notes',
        'percentage': 14.66,
        'value': 2897,
        'y0': 16866,
        'y1': 19763
    }]
}, {
    'chapter': 8,
    'totalLength': 18290,
    'notesLength': 3003,
    'contentLength': 15287,
    'notes%': 16.42,
    'content%': 83.58,
    'lengths': [{
        'cat': 'Content',
        'percentage': 83.58,
        'value': 15287,
        'y0': 0,
        'y1': 15287
    }, {
        'cat': 'Notes',
        'percentage': 16.42,
        'value': 3003,
        'y0': 15287,
        'y1': 18290
    }]
}, {
    'chapter': 9,
    'totalLength': 21543,
    'notesLength': 2104,
    'contentLength': 19439,
    'notes%': 9.77,
    'content%': 90.23,
    'lengths': [{
        'cat': 'Content',
        'percentage': 90.23,
        'value': 19439,
        'y0': 0,
        'y1': 19439
    }, {
        'cat': 'Notes',
        'percentage': 9.77,
        'value': 2104,
        'y0': 19439,
        'y1': 21543
    }]
}, {
    'chapter': 10,
    'totalLength': 25094,
    'notesLength': 6024,
    'contentLength': 19070,
    'notes%': 24.01,
    'content%': 75.99,
    'lengths': [{
        'cat': 'Content',
        'percentage': 75.99,
        'value': 19070,
        'y0': 0,
        'y1': 19070
    }, {
        'cat': 'Notes',
        'percentage': 24.01,
        'value': 6024,
        'y0': 19070,
        'y1': 25094
    }]
}, {
    'chapter': 11,
    'totalLength': 17908,
    'notesLength': 1402,
    'contentLength': 16506,
    'notes%': 7.83,
    'content%': 92.17,
    'lengths': [{
        'cat': 'Content',
        'percentage': 92.17,
        'value': 16506,
        'y0': 0,
        'y1': 16506
    }, {
        'cat': 'Notes',
        'percentage': 7.83,
        'value': 1402,
        'y0': 16506,
        'y1': 17908
    }]
}]

var disciplineTotals = [
		 {
	        name: "Archives",
	        data: [{
	            cat: "TDO",
	            percentage: 2.65,
	            notes: 15
	        }]
	    },{
	        name: "Business",
	        data: [{
	            cat: "TDO",
	            percentage: 12.90,
	            notes: 73
	        }]
	    },{
	        name: "Cognitive Science",
	        data: [{
	            cat: "TDO",
	            percentage: 11.31,
	            notes: 64
	        }]
	    },{
	        name: "Computing",
	        data: [{
	            cat: "TDO",
	            percentage: 30.92,
	            notes: 175
	        }]
	    },{
	        name: "IA",
	        data: [{
	            cat: "TDO",
	            percentage: 1.77,
	            notes: 10
	        }]
	    },{
	        name: "Law",
	        data: [{
	            cat: "TDO",
	            percentage: 4.59,
	            notes: 26
	        }]
	    },{
	        name: "Linguistics",
	        data: [{
	            cat: "TDO",
	            percentage: 6.18,
	            notes: 35
	        }]
	    },{
	        name: "LIS",
	        data: [{
	            cat: "TDO",
	            percentage: 19.43,
	            notes: 110
	        }]
	    },{
	        name: "Museums",
	        data: [{
	            cat: "TDO",
	            percentage: 3.71,
	            notes: 21
	        }]
	    },{
	        name: "Philosophy",
	        data: [{
	            cat: "TDO",
	            percentage: 1.77,
	            notes: 10
	        }]
	    },
	    {
	        name: "Web",
	        data: [{
	            cat: "TDO",
	            percentage: 10.78,
	            notes: 61
	        }]
	    }
	];

var disciplinesBreakdown = {
		'LIS' : [
	        {
	            notes: 14,
	            chapter: 1
	        },
	        {
	            notes: 13,
	            chapter: 2
	        },
	        {
	            notes: 13,
	            chapter: 3
	        },
	        {
	            notes: 17,
	            chapter: 4
	        },
	        {
	            notes: 11,
	            chapter: 5
	        },
	        {
	            notes: 2,
	            chapter: 6
	        },
	        {
	            notes: 25,
	            chapter: 7
	        },
	        {
	            notes: 3,
	            chapter: 8
	        },
	        {
	            notes: 8,
	            chapter: 9
	        },
	        {
	            notes: 3,
	            chapter: 10
	        },
	        {
	            notes: 1,
	            chapter: 11
	        }],
	    'Archives': [
	        {
	            notes: 1,
	            chapter: 1
	        },
	        {
	            notes: 8,
	            chapter: 2
	        },
	        {
	            notes: 2,
	            chapter: 3
	        },
	        {
	            notes: 0,
	            chapter: 4
	        },
	        {
	            notes: 0,
	            chapter: 5
	        },
	        {
	            notes: 0,
	            chapter: 6
	        },
	        {
	            notes: 0,
	            chapter: 7
	        },
	        {
	            notes: 0,
	            chapter: 8
	        },
	        {
	            notes: 0,
	            chapter: 9
	        },
	        {
	            notes: 0,
	            chapter: 10
	        },
	        {
	            notes: 3,
	            chapter: 11
	        }],
	    'Business': [
	        {
	            notes: 3,
	            chapter: 1
	        },
	        {
	            notes: 11,
	            chapter: 2
	        },
	        {
	            notes: 7,
	            chapter: 3
	        },
	        {
	            notes: 8,
	            chapter: 4
	        },
	        {
	            notes: 3,
	            chapter: 5
	        },
	        {
	            notes: 4,
	            chapter: 6
	        },
	        {
	            notes: 16,
	            chapter: 7
	        },
	        {
	            notes: 1,
	            chapter: 8
	        },
	        {
	            notes: 8,
	            chapter: 9
	        },
	        {
	            notes: 5,
	            chapter: 10
	        },
	        {
	            notes: 7,
	            chapter: 11
	        }],
	    'Cognitive Science': [
	            {
	                notes: 2,
	                chapter: 1
	            },
	            {
	                notes: 6,
	                chapter: 2
	            },
	            {
	                notes: 4,
	                chapter: 3
	            },
	            {
	                notes: 5,
	                chapter: 4
	            },
	            {
	                notes: 12,
	                chapter: 5
	            },
	            {
	                notes: 24,
	                chapter: 6
	            },
	            {
	                notes: 7,
	                chapter: 7
	            },
	            {
	                notes: 2,
	                chapter: 8
	            },
	            {
	                notes: 1,
	                chapter: 9
	            },
	            {
	                notes: 0,
	                chapter: 10
	            },
	            {
	                notes: 1,
	                chapter: 11
	            }],
	    'Computing': [
	            {
	                notes: 5,
	                chapter: 1
	            },
	            {
	                notes: 18,
	                chapter: 2
	            },
	            {
	                notes: 23,
	                chapter: 3
	            },
	            {
	                notes: 17,
	                chapter: 4
	            },
	            {
	                notes: 22,
	                chapter: 5
	            },
	            {
	                notes: 7,
	                chapter: 6
	            },
	            {
	                notes: 6,
	                chapter: 7
	            },
	            {
	                notes: 36,
	                chapter: 8
	            },
	            {
	                notes: 23,
	                chapter: 9
	            },
	            {
	                notes: 12,
	                chapter: 10
	            },
	            {
	                notes: 6,
	                chapter: 11
	            }
	        ],
	    'IA': [
	            {
	                notes: 1,
	                chapter: 1
	            },
	            {
	                notes: 2,
	                chapter: 2
	            },
	            {
	                notes: 1,
	                chapter: 3
	            },
	            {
	                notes: 2,
	                chapter: 4 
	            },
	            {
	                notes: 1,
	                chapter: 5
	            },
	            {
	                notes: 0,
	                chapter: 6
	            },
	            {
	                notes: 2,
	                chapter: 7
	            },
	            {
	                notes: 0,
	                chapter: 8
	            },
	            {
	                notes: 1,
	                chapter: 9
	            },
	            {
	                notes: 0,
	                chapter: 10
	            },
	            {
	                notes: 0,
	                chapter: 11
	            }
	        ],
	 	'Law': [
	            {
	                notes: 3,
	                chapter: 1
	            },
	            {
	                notes: 7,
	                chapter: 2
	            },
	            {
	                notes: 6,
	                chapter: 3
	            },
	            {
	                notes: 1,
	                chapter: 4
	            },
	            {
	                notes: 2,
	                chapter: 5
	            },
	            {
	                notes: 2,
	                chapter: 6
	            },
	            {
	                notes: 2,
	                chapter: 7
	            },
	            {
	                notes: 0,
	                chapter: 8
	            },
	            {
	                notes: 0,
	                chapter: 9
	            },
	            {
	                notes: 1,
	                chapter: 10
	            },
	            {
	                notes: 2,
	                chapter: 11
	            }
	        ],
	    'Linguistics': [
	            {
	                notes: 0,
	                chapter: 1
	            },
	            {
	                notes: 0,
	                chapter: 2
	            },
	            {
	                notes: 4,
	                chapter: 3
	            },
	            {
	                notes: 4,
	                chapter: 4
	            },
	            {
	                notes: 14,
	                chapter: 5
	            },
	            {
	                notes: 3,
	                chapter: 6
	            },
	            {
	                notes: 1,
	                chapter: 7
	            },
	            {
	                notes: 8,
	                chapter: 8
	            },
	            {
	                notes: 0,
	                chapter: 9
	            },
	            {
	                notes: 0,
	                chapter: 10
	            },
	            {
	                notes: 1,
	                chapter: 11
	            }
	        ],
	    'Museums': [
	            {
	                notes: 0,
	                chapter: 1
	            },
	            {
	                notes: 6,
	                chapter: 2
	            },
	            {
	                notes: 1,
	                chapter: 3
	            },
	            {
	                notes: 3,
	                chapter: 4
	            },
	            {
	                notes: 0,
	                chapter: 5
	            },
	            {
	                notes: 0,
	                chapter: 6
	            },
	            {
	                notes: 2,
	                chapter: 7
	            },
	            {
	                notes: 0,
	                chapter: 8
	            },
	            {
	                notes: 5,
	                chapter: 9
	            },
	            {
	                notes: 1,
	                chapter: 10
	            },
	            {
	                notes: 3,
	                chapter: 11
	            }
	        ],
	    'Philosophy': [
	            {
	                notes: 0,
	                chapter: 1
	            },
	            {
	                notes: 0,
	                chapter: 2
	            },
	            {
	                notes: 2,
	                chapter: 3
	            },
	            {
	                notes: 0,
	                chapter: 4
	            },
	            {
	                notes: 1,
	                chapter: 5
	            },
	            {
	                notes: 5,
	                chapter: 6
	            },
	            {
	                notes: 0,
	                chapter: 7
	            },
	            {
	                notes: 0,
	                chapter: 8
	            },
	            {
	                notes: 0,
	                chapter: 9
	            },
	            {
	                notes: 0,
	                chapter: 10
	            },
	            {
	                notes: 2,
	                chapter: 11
	            }
	        ],
	    'Web': [
	            {
	                notes: 8,
	                chapter: 1
	            },
	            {
	                notes: 19,
	                chapter: 2
	            },
	            {
	                notes: 4,
	                chapter: 3
	            },
	            {
	                notes: 7,
	                chapter: 4
	            },
	            {
	                notes: 10,
	                chapter: 5
	            },
	            {
	                notes: 0,
	                chapter: 6
	            },
	            {
	                notes: 3,
	                chapter: 7
	            },
	            {
	                notes: 6,
	                chapter: 8
	            },
	            {
	                notes: 3,
	                chapter: 9
	            },
	            {
	                notes: 0,
	                chapter: 10
	            },
	            {
	                notes: 1,
	                chapter: 11
	            }
	        ]
	}

var chaptersBreakdown = [{
            'chapter': 1,
            'title': 'Foundations of Organizing Systems',
            'LIS': {
                notes: 14,
                percentage: 40,
                length: 1196, 
                lenpercent: 35.77,
                notesData: [
                    { section: 1.1, category: 'LIS', length: 78, percentage: 2.33 },
                    { section: 1.1, category: 'LIS', length: 89, percentage: 2.66 },
                    { section: 1.1, category: 'LIS', length: 46, percentage: 1.38 },
                    { section: 1.1, category: 'LIS', length: 157, percentage: 4.69 },
                    { section: 1.1, category: 'LIS', length: 119, percentage: 3.56 },
                    { section: 1.1, category: 'LIS', length: 101, percentage: 3.02 },
                    { section: 1.1, category: 'LIS', length: 116, percentage: 3.47 },
                    { section: 1.2, category: 'LIS', length: 50, percentage: 1.5 },
                    { section: 1.3, category: 'LIS', length: 92, percentage: 2.75 },
                    { section: 1.3, category: 'LIS', length: 53, percentage: 1.58 },
                    { section: 1.3, category: 'LIS', length: 39, percentage: 1.17 },
                    { section: 1.3, category: 'LIS', length: 77, percentage: 2.3 },
                    { section: 1.3, category: 'LIS', length: 92, percentage: 2.75 },
                    { section: 1.3, category: 'LIS', length: 87, percentage: 2.6 }
                ]
            },
            'Archives': {
                notes: 1,
                percentage: 2.85714285714286,
                length: 65, 
                lenpercent: 1.94, 
                notesData : [
                    { section: 1.3, category: 'ARCHIVES', length: 65, percentage: 1.94 }
                ]
            },
            'Business': {
                notes: 3,
                percentage: 8.57142857142857,
                length: 237, 
                lenpercent: 7.09, 
                notesData : [
                    { section: 1.2, category: 'BUSINESS', length: 95, percentage: 2.84 },
                    { section: 1.3, category: 'BUSINESS', length: 105, percentage: 3.14 },
                    { section: 1.3, category: 'BUSINESS', length: 37, percentage: 1.11 }
                ]
            },
            'Cognitive Science': {
                notes: 2,
                percentage: 5.71428571428571,
                length: 125, 
                lenpercent: 3.74, 
                notesData : [
                    { section: 1.3, category: 'COGNITIVE SCIENCE', length: 97, percentage: 2.9 },
                    { section: 1.3, category: 'COGNITIVE SCIENCE', length: 28, percentage: 0.84 }
                ]
            },
            'Computing': {
                notes: 5,
                percentage: 14.2857142857143,
                length: 451, 
                lenpercent: 13.49, 
                notesData : [
                    { section: 1.2, category: 'COMPUTING', length: 101, percentage: 3.02 },
                    { section: 1.2, category: 'COMPUTING', length: 92, percentage: 2.75 },
                    { section: 1.2, category: 'COMPUTING', length: 119, percentage: 3.56 },
                    { section: 1.3, category: 'COMPUTING', length: 47, percentage: 1.41 },
                    { section: 1.3, category: 'COMPUTING', length: 92, percentage: 2.75 }
                ]
            },
            'IA': {
                notes: 1,
                percentage: 2.85714285714286,
                length: 40, 
                lenpercent: 1.2, 
                notesData : [
                    { section: 1.2, category: 'IA', length: 40, percentage: 1.2 }
                ]
            },
            'Law': {
                notes: 3,
                percentage: 8.57142857142857,
                length: 547, 
                lenpercent: 16.36, 
                notesData : [
                    { section: 1.1, category: 'LAW', length: 157, percentage: 4.69 },
                    { section: 1.2, category: 'LAW', length: 58, percentage: 1.73 },
                    { section: 1.3, category: 'LAW', length: 332, percentage: 9.93 }
                ]
            },
            'Linguistics': {
                notes: 0,
                percentage: 0,
                length: 0, 
                lenpercent: 0, 
                notesData : []
            },
            'Museums': {
                notes: 0,
                percentage: 0,
                length: 0, 
                lenpercent: 0, 
                notesData : []
            },
            'Philosophy': {
                notes: 0,
                percentage: 0,
                length: 0, 
                lenpercent: 0, 
                notesData : []
            },
            'Web': {
                notes: 8,
                percentage: 22.8571428571429,
                length: 683, 
                lenpercent: 20.42, 
                notesData : [
                    { section: 1.2, category: 'WEB', length: 103, percentage: 3.08 },
                    { section: 1.2, category: 'WEB', length: 196, percentage: 5.86 },
                    { section: 1.2, category: 'WEB', length: 66, percentage: 1.97 },
                    { section: 1.2, category: 'WEB', length: 65, percentage: 1.94 },
                    { section: 1.2, category: 'WEB', length: 56, percentage: 1.67 },
                    { section: 1.3, category: 'WEB', length: 106, percentage: 3.17 },
                    { section: 1.3, category: 'WEB', length: 12, percentage: 0.36 },
                    { section: 1.3, category: 'WEB', length: 23, percentage: 0.69 },
                    { section: 1.3, category: 'WEB', length: 56, percentage: 1.67 }
                ]
            },
            'TOTAL': {
                notes: 35,
                percentage: 5.97,
                length: 3344, 
                lenpercent: 100, 
                notesData : [
                    { section: 1.1, category: 'LIS', length: 78, percentage: 2.33 },
                    { section: 1.1, category: 'LIS', length: 89, percentage: 2.66 },
                    { section: 1.1, category: 'LIS', length: 46, percentage: 1.38 },
                    { section: 1.1, category: 'LIS', length: 157, percentage: 4.69 },
                    { section: 1.1, category: 'LAW', length: 157, percentage: 4.69 },
                    { section: 1.1, category: 'LIS', length: 119, percentage: 3.56 },
                    { section: 1.1, category: 'LIS', length: 101, percentage: 3.02 },
                    { section: 1.1, category: 'LIS', length: 116, percentage: 3.47 },
                    { section: 1.2, category: 'COMPUTING', length: 101, percentage: 3.02 },
                    { section: 1.2, category: 'WEB', length: 103, percentage: 3.08 },
                    { section: 1.2, category: 'COMPUTING', length: 92, percentage: 2.75 },
                    { section: 1.2, category: 'WEB', length: 196, percentage: 5.86 },
                    { section: 1.2, category: 'WEB', length: 66, percentage: 1.97 },
                    { section: 1.2, category: 'BUSINESS', length: 95, percentage: 2.84 },
                    { section: 1.2, category: 'IA', length: 40, percentage: 1.2 },
                    { section: 1.2, category: 'WEB', length: 65, percentage: 1.94 },
                    { section: 1.2, category: 'WEB', length: 56, percentage: 1.67 },
                    { section: 1.2, category: 'COMPUTING', length: 119, percentage: 3.56 },
                    { section: 1.2, category: 'LIS', length: 50, percentage: 1.5 },
                    { section: 1.2, category: 'LAW', length: 58, percentage: 1.73 },
                    { section: 1.3, category: 'LIS', length: 92, percentage: 2.75 },
                    { section: 1.3, category: 'LIS', length: 53, percentage: 1.58 },
                    { section: 1.3, category: 'COMPUTING', length: 47, percentage: 1.41 },
                    { section: 1.3, category: 'LAW', length: 332, percentage: 9.93 },
                    { section: 1.3, category: 'LIS', length: 39, percentage: 1.17 },
                    { section: 1.3, category: 'LIS', length: 77, percentage: 2.3 },
                    { section: 1.3, category: 'ARCHIVES', length: 65, percentage: 1.94 },
                    { section: 1.3, category: 'COGNITIVE SCIENCE', length: 97, percentage: 2.9 },
                    { section: 1.3, category: 'WEB', length: 106, percentage: 3.17 },
                    { section: 1.3, category: 'COGNITIVE SCIENCE', length: 28, percentage: 0.84 },
                    { section: 1.3, category: 'LIS', length: 92, percentage: 2.75 },
                    { section: 1.3, category: 'BUSINESS', length: 105, percentage: 3.14 },
                    { section: 1.3, category: 'COMPUTING', length: 92, percentage: 2.75 },
                    { section: 1.3, category: 'LIS', length: 87, percentage: 2.6 },
                    { section: 1.3, category: 'BUSINESS', length: 37, percentage: 1.11 },
                    { section: 1.3, category: 'WEB', length: 12, percentage: 0.36 },
                    { section: 1.3, category: 'WEB', length: 23, percentage: 0.69 },
                    { section: 1.3, category: 'WEB', length: 56, percentage: 1.67 }
                ]
            }
        }, {
            'chapter': 2,
            'title': 'Activities in Organizing Systems',
            'LIS': {
                notes: 13,
                percentage: 14.7727272727273
            },
            'Archives': {
                notes: 8,
                percentage: 9.09090909090909
            },
            'Business': {
                notes: 11,
                percentage: 12.5
            },
            'Cognitive Science': {
                notes: 6,
                percentage: 6.81818181818182
            },
            'Computing': {
                notes: 18,
                percentage: 20.4545454545455
            },
            'IA': {
                notes: 2,
                percentage: 2.27272727272727
            },
            'Law': {
                notes: 7,
                percentage: 7.95454545454545
            },
            'Linguistics': {
                notes: 0,
                percentage: 0
            },
            'Museums': {
                notes: 6,
                percentage: 6.81818181818182
            },
            'Philosophy': {
                notes: 0,
                percentage: 0
            },
            'Web': {
                notes: 19,
                percentage: 21.5909090909091
            },
            'TOTAL': {
                notes: 88,
                percentage: 15.01
            }
        }, {
            'chapter': 3,
            'title': 'Resources in Organizing Systems',
            'LIS': {
                notes: 13,
                percentage: 19.6969696969697
            },
            'Archives': {
                notes: 2,
                percentage: 3.03030303030303
            },
            'Business': {
                notes: 7,
                percentage: 10.6060606060606
            },
            'Cognitive Science': {
                notes: 4,
                percentage: 6.06060606060606
            },
            'Computing': {
                notes: 23,
                percentage: 34.8484848484849
            },
            'IA': {
                notes: 1,
                percentage: 1.51515151515152
            },
            'Law': {
                notes: 6,
                percentage: 9.09090909090909
            },
            'Linguistics': {
                notes: 4,
                percentage: 6.06060606060606
            },
            'Museums': {
                notes: 1,
                percentage: 1.51515151515152
            },
            'Philosophy': {
                notes: 2,
                percentage: 3.03030303030303
            },
            'Web': {
                notes: 4,
                percentage: 6.06060606060606
            },
            'TOTAL': {
                notes: 66,
                percentage: 11.26
            }
        }, {
            'chapter': 4,
            'title': 'Resource Description and Metadata',
            'LIS': {
                notes: 17,
                percentage: 26.5625
            },
            'Archives': {
                notes: 0,
                percentage: 0
            },
            'Business': {
                notes: 8,
                percentage: 12.5
            },
            'Cognitive Science': {
                notes: 5,
                percentage: 7.8125
            },
            'Computing': {
                notes: 17,
                percentage: 26.5625
            },
            'IA': {
                notes: 2,
                percentage: 3.125
            },
            'Law': {
                notes: 1,
                percentage: 1.5625
            },
            'Linguistics': {
                notes: 4,
                percentage: 6.25
            },
            'Museums': {
                notes: 3,
                percentage: 4.6875
            },
            'Philosophy': {
                notes: 0,
                percentage: 0
            },
            'Web': {
                notes: 7,
                percentage: 10.9375
            },
            'TOTAL': {
                notes: 64,
                percentage: 10.92
            }
        }, {
            'chapter': 5,
            'title': 'Describing Relationships and Structures',
            'LIS': {
                notes: 11,
                percentage: 14.6666666666667
            },
            'Archives': {
                notes: 0,
                percentage: 0
            },
            'Business': {
                notes: 3,
                percentage: 4
            },
            'Cognitive Science': {
                notes: 12,
                percentage: 16
            },
            'Computing': {
                notes: 22,
                percentage: 29.3333333333333
            },
            'IA': {
                notes: 1,
                percentage: 1.33333333333333
            },
            'Law': {
                notes: 2,
                percentage: 2.66666666666667
            },
            'Linguistics': {
                notes: 14,
                percentage: 18.6666666666667
            },
            'Museums': {
                notes: 0,
                percentage: 0
            },
            'Philosophy': {
                notes: 1,
                percentage: 1.33333333333333
            },
            'Web': {
                notes: 10,
                percentage: 13.3333333333333
            },
            'TOTAL': {
                notes: 75,
                percentage: 12.79
            }
        }, {
            'chapter': 6,
            'title':'Categorization: Describing Resource Classes and Types',
            'LIS': {
                notes: 2,
                percentage: 4.16666666666667
            },
            'Archives': {
                notes: 1,
                percentage: 2.08333333333333
            },
            'Business': {
                notes: 4,
                percentage: 8.33333333333333
            },
            'Cognitive Science': {
                notes: 24,
                percentage: 50
            },
            'Computing': {
                notes: 7,
                percentage: 14.5833333333333
            },
            'IA': {
                notes: 0,
                percentage: 0
            },
            'Law': {
                notes: 2,
                percentage: 4.16666666666667
            },
            'Linguistics': {
                notes: 3,
                percentage: 6.25
            },
            'Museums': {
                notes: 0,
                percentage: 0
            },
            'Philosophy': {
                notes: 5,
                percentage: 10.4166666666667
            },
            'Web': {
                notes: 0,
                percentage: 0
            },
            'TOTAL': {
                notes: 48,
                percentage: 8.19
            }
        }, {
            'chapter': 7,
            'title': 'Classification: Assigning Resources to Categories',
            'LIS': {
                notes: 25,
                percentage: 39.0625
            },
            'Archives': {
                notes: 0,
                percentage: 0
            },
            'Business': {
                notes: 16,
                percentage: 25
            },
            'Cognitive Science': {
                notes: 7,
                percentage: 10.9375
            },
            'Computing': {
                notes: 6,
                percentage: 9.375
            },
            'IA': {
                notes: 2,
                percentage: 3.125
            },
            'Law': {
                notes: 2,
                percentage: 3.125
            },
            'Linguistics': {
                notes: 1,
                percentage: 1.5625
            },
            'Museums': {
                notes: 2,
                percentage: 3.125
            },
            'Philosophy': {
                notes: 0,
                percentage: 0
            },
            'Web': {
                notes: 3,
                percentage: 4.6875
            },
            'TOTAL': {
                notes: 64,
                percentage: 10.92
            }
        }, {
            'chapter': 8,
            'title':'The Forms of Resource Descriptions' ,
            'LIS': {
                notes: 3,
                percentage: 5.35714285714286,
                length: 65, 
                lenpercent: 1.94, 
                notesData : [
					{ section: 8.2, category: 'LIS', length: 27, percentage: 0.9 },
					{ section: 8.2, category: 'LIS', length: 33, percentage: 1.1 },
					{ section: 8.2, category: 'LIS', length: 5, percentage: 0.17 }
                ]
            },
            'Archives': {
                notes: 0,
                percentage: 0,
                length: 0, 
                lenpercent: 0, 
                notesData : [

                ]
            },
            'Business': {
                notes: 1,
                percentage: 1.78571428571429,
                length: 19, 
                lenpercent: 0.57, 
                notesData : [
                	{ section: 8.2, category: 'BUSINESS', length: 19, percentage: 0.63 }
                ]
            },
            'Cognitive Science': {
                notes: 2,
                percentage: 3.57142857142857,
                length: 103, 
                lenpercent: 3.08, 
                notesData : [
                	{ section: 8.2, category: 'COGNITIVE SCIENCE', length: 65, percentage: 2.16 },
					{ section: 8.3, category: 'COGNITIVE SCIENCE', length: 38, percentage: 1.27 }
                ]
            },
            'Computing': {
                notes: 36,
                percentage: 64.2857142857143,
                length: 2201, 
                lenpercent: 65.82, 
                notesData : [
                	{ section: 8.2, category: 'COMPUTING', length: 44, percentage: 1.47 },
					{ section: 8.2, category: 'COMPUTING', length: 169, percentage: 5.63 },
					{ section: 8.2, category: 'COMPUTING', length: 38, percentage: 1.27 },
					{ section: 8.2, category: 'COMPUTING', length: 47, percentage: 1.57 },
					{ section: 8.2, category: 'COMPUTING', length: 36, percentage: 1.2 },
					{ section: 8.2, category: 'COMPUTING', length: 93, percentage: 3.1 },
					{ section: 8.2, category: 'COMPUTING', length: 54, percentage: 1.8 },
					{ section: 8.2, category: 'COMPUTING', length: 57, percentage: 1.9 },
					{ section: 8.2, category: 'COMPUTING', length: 26, percentage: 0.87 },
					{ section: 8.2, category: 'COMPUTING', length: 129, percentage: 4.3 },
					{ section: 8.2, category: 'COMPUTING', length: 33, percentage: 1.1 },
					{ section: 8.2, category: 'COMPUTING', length: 38, percentage: 1.27 },
					{ section: 8.2, category: 'COMPUTING', length: 95, percentage: 3.16 },
					{ section: 8.2, category: 'COMPUTING', length: 42, percentage: 1.4 },
					{ section: 8.2, category: 'COMPUTING', length: 33, percentage: 1.1 },
					{ section: 8.2, category: 'COMPUTING', length: 72, percentage: 2.4 },
					{ section: 8.2, category: 'COMPUTING', length: 65, percentage: 2.16 },
					{ section: 8.2, category: 'COMPUTING', length: 91, percentage: 3.03 },
					{ section: 8.2, category: 'COMPUTING', length: 63, percentage: 2.1 },
					{ section: 8.2, category: 'COMPUTING', length: 55, percentage: 1.83 },
					{ section: 8.2, category: 'COMPUTING', length: 164, percentage: 5.46 },
					{ section: 8.2, category: 'COMPUTING', length: 87, percentage: 2.9 },
					{ section: 8.2, category: 'COMPUTING', length: 171, percentage: 5.69 },
					{ section: 8.3, category: 'COMPUTING', length: 12, percentage: 0.4 },
					{ section: 8.3, category: 'COMPUTING', length: 2, percentage: 0.07 },
					{ section: 8.3, category: 'COMPUTING', length: 1, percentage: 0.03 },
					{ section: 8.3, category: 'COMPUTING', length: 64, percentage: 2.13 },
					{ section: 8.3, category: 'COMPUTING', length: 17, percentage: 0.57 },
					{ section: 8.3, category: 'COMPUTING', length: 47, percentage: 1.57 },
					{ section: 8.3, category: 'COMPUTING', length: 21, percentage: 0.7 },
					{ section: 8.3, category: 'COMPUTING', length: 48, percentage: 1.6 },
					{ section: 8.3, category: 'COMPUTING', length: 54, percentage: 1.8 },
					{ section: 8.3, category: 'COMPUTING', length: 30, percentage: 1 },
					{ section: 8.3, category: 'COMPUTING', length: 90, percentage: 3 },
					{ section: 8.3, category: 'COMPUTING', length: 56, percentage: 1.86 },
					{ section: 8.4, category: 'COMPUTING', length: 57, percentage: 1.9 }

                ]
            },
            'IA': {
                notes: 0,
                percentage: 0,
                length: 0, 
                lenpercent: 0, 
                notesData : [

                ]
            },
            'Law': {
                notes: 0,
                percentage: 0,
                length: 0, 
                lenpercent: 0, 
                notesData : [

                ]
            },
            'Linguistics': {
                notes: 8,
                percentage: 14.2857142857143,
                length: 313, 
                lenpercent: 9.36, 
                notesData : [
                	{ section: 8.2, category: 'LINGUISTICS', length: 37, percentage: 1.23 },
					{ section: 8.2, category: 'LINGUISTICS', length: 44, percentage: 1.47 },
					{ section: 8.3, category: 'LINGUISTICS', length: 54, percentage: 1.8 },
					{ section: 8.3, category: 'LINGUISTICS', length: 17, percentage: 0.57 },
					{ section: 8.3, category: 'LINGUISTICS', length: 51, percentage: 1.7 },
					{ section: 8.3, category: 'LINGUISTICS', length: 41, percentage: 1.37 },
					{ section: 8.3, category: 'LINGUISTICS', length: 53, percentage: 1.76 },
					{ section: 8.3, category: 'LINGUISTICS', length: 16, percentage: 0.53 }

                ]
            },
            'Museums': {
                notes: 0,
                percentage: 0,
                length: 0, 
                lenpercent: 0, 
                notesData : [

                ]
            },
            'Philosophy': {
                notes: 0,
                percentage: 0,
                length: 0, 
                lenpercent: 0, 
                notesData : [

                ]
            },
            'Web': {
                notes: 6,
                percentage: 10.7142857142857,
                length: 302, 
                lenpercent: 9.03, 
                notesData : [
                	{ section: 8.2, category: 'WEB', length: 7, percentage: 0.23 },
					{ section: 8.4, category: 'WEB', length: 42, percentage: 1.4 },
					{ section: 8.4, category: 'WEB', length: 17, percentage: 0.57 },
					{ section: 8.4, category: 'WEB', length: 61, percentage: 2.03 },
					{ section: 8.4, category: 'WEB', length: 95, percentage: 3.16 },
					{ section: 8.4, category: 'WEB', length: 80, percentage: 2.66 }
                ]
            },
            'TOTAL': {
                notes: 56,
                percentage: 9.55,
                length: 3003, 
                lenpercent: 100, 
                notesData : [
                	{ section: 8.2, category: 'BUSINESS', length: 19, percentage: 0.63 },
					{ section: 8.2, category: 'COGNITIVE SCIENCE', length: 65, percentage: 2.16 },
					{ section: 8.3, category: 'COGNITIVE SCIENCE', length: 38, percentage: 1.27 },
					{ section: 8.2, category: 'COMPUTING', length: 44, percentage: 1.47 },
					{ section: 8.2, category: 'COMPUTING', length: 169, percentage: 5.63 },
					{ section: 8.2, category: 'COMPUTING', length: 38, percentage: 1.27 },
					{ section: 8.2, category: 'COMPUTING', length: 47, percentage: 1.57 },
					{ section: 8.2, category: 'COMPUTING', length: 36, percentage: 1.2 },
					{ section: 8.2, category: 'COMPUTING', length: 93, percentage: 3.1 },
					{ section: 8.2, category: 'COMPUTING', length: 54, percentage: 1.8 },
					{ section: 8.2, category: 'COMPUTING', length: 57, percentage: 1.9 },
					{ section: 8.2, category: 'COMPUTING', length: 26, percentage: 0.87 },
					{ section: 8.2, category: 'COMPUTING', length: 129, percentage: 4.3 },
					{ section: 8.2, category: 'COMPUTING', length: 33, percentage: 1.1 },
					{ section: 8.2, category: 'COMPUTING', length: 38, percentage: 1.27 },
					{ section: 8.2, category: 'COMPUTING', length: 95, percentage: 3.16 },
					{ section: 8.2, category: 'COMPUTING', length: 42, percentage: 1.4 },
					{ section: 8.2, category: 'COMPUTING', length: 33, percentage: 1.1 },
					{ section: 8.2, category: 'COMPUTING', length: 72, percentage: 2.4 },
					{ section: 8.2, category: 'COMPUTING', length: 65, percentage: 2.16 },
					{ section: 8.2, category: 'COMPUTING', length: 91, percentage: 3.03 },
					{ section: 8.2, category: 'COMPUTING', length: 63, percentage: 2.1 },
					{ section: 8.2, category: 'COMPUTING', length: 55, percentage: 1.83 },
					{ section: 8.2, category: 'COMPUTING', length: 164, percentage: 5.46 },
					{ section: 8.2, category: 'COMPUTING', length: 87, percentage: 2.9 },
					{ section: 8.2, category: 'COMPUTING', length: 171, percentage: 5.69 },
					{ section: 8.3, category: 'COMPUTING', length: 12, percentage: 0.4 },
					{ section: 8.3, category: 'COMPUTING', length: 2, percentage: 0.07 },
					{ section: 8.3, category: 'COMPUTING', length: 1, percentage: 0.03 },
					{ section: 8.3, category: 'COMPUTING', length: 64, percentage: 2.13 },
					{ section: 8.3, category: 'COMPUTING', length: 17, percentage: 0.57 },
					{ section: 8.3, category: 'COMPUTING', length: 47, percentage: 1.57 },
					{ section: 8.3, category: 'COMPUTING', length: 21, percentage: 0.7 },
					{ section: 8.3, category: 'COMPUTING', length: 48, percentage: 1.6 },
					{ section: 8.3, category: 'COMPUTING', length: 54, percentage: 1.8 },
					{ section: 8.3, category: 'COMPUTING', length: 30, percentage: 1 },
					{ section: 8.3, category: 'COMPUTING', length: 90, percentage: 3 },
					{ section: 8.3, category: 'COMPUTING', length: 56, percentage: 1.86 },
					{ section: 8.4, category: 'COMPUTING', length: 57, percentage: 1.9 },
					{ section: 8.2, category: 'LINGUISTICS', length: 37, percentage: 1.23 },
					{ section: 8.2, category: 'LINGUISTICS', length: 44, percentage: 1.47 },
					{ section: 8.3, category: 'LINGUISTICS', length: 54, percentage: 1.8 },
					{ section: 8.3, category: 'LINGUISTICS', length: 17, percentage: 0.57 },
					{ section: 8.3, category: 'LINGUISTICS', length: 51, percentage: 1.7 },
					{ section: 8.3, category: 'LINGUISTICS', length: 41, percentage: 1.37 },
					{ section: 8.3, category: 'LINGUISTICS', length: 53, percentage: 1.76 },
					{ section: 8.3, category: 'LINGUISTICS', length: 16, percentage: 0.53 },
					{ section: 8.2, category: 'LIS', length: 27, percentage: 0.9 },
					{ section: 8.2, category: 'LIS', length: 33, percentage: 1.1 },
					{ section: 8.2, category: 'LIS', length: 5, percentage: 0.17 },
					{ section: 8.2, category: 'WEB', length: 7, percentage: 0.23 },
					{ section: 8.4, category: 'WEB', length: 42, percentage: 1.4 },
					{ section: 8.4, category: 'WEB', length: 17, percentage: 0.57 },
					{ section: 8.4, category: 'WEB', length: 61, percentage: 2.03 },
					{ section: 8.4, category: 'WEB', length: 95, percentage: 3.16 },
					{ section: 8.4, category: 'WEB', length: 80, percentage: 2.66 }

                ]
            }
        }, {
            'chapter': 9,
            'title':'Interactions with Resources' ,
            'LIS': {
                notes: 8,
                percentage: 16.6666666666667
            },
            'Archives': {
                notes: 0,
                percentage: 0
            },
            'Business': {
                notes: 8,
                percentage: 16.6666666666667
            },
            'Cognitive Science': {
                notes: 1,
                percentage: 2.08333333333333
            },
            'Computing': {
                notes: 23,
                percentage: 47.9166666666667
            },
            'IA': {
                notes: 1,
                percentage: 2.08333333333333
            },
            'Law': {
                notes: 0,
                percentage: 0
            },
            'Linguistics': {
                notes: 0,
                percentage: 0
            },
            'Museums': {
                notes: 5,
                percentage: 10.4166666666667
            },
            'Philosophy': {
                notes: 0,
                percentage: 0
            },
            'Web': {
                notes: 3,
                percentage: 6.25
            },
            'TOTAL': {
                notes: 48,
                percentage: 8.19
            }
        }, {
            'chapter': 10,
            'title':'The Organizing System Roadmap' ,
            'LIS': {
                notes: 3,
                percentage: 13.6363636363636
            },
            'Archives': {
                notes: 0,
                percentage: 0
            },
            'Business': {
                notes: 5,
                percentage: 22.7272727272727
            },
            'Cognitive Science': {
                notes: 0,
                percentage: 0
            },
            'Computing': {
                notes: 12,
                percentage: 54.5454545454545
            },
            'IA': {
                notes: 0,
                percentage: 0
            },
            'Law': {
                notes: 1,
                percentage: 4.54545454545455
            },
            'Linguistics': {
                notes: 0,
                percentage: 0
            },
            'Museums': {
                notes: 1,
                percentage: 4.54545454545455
            },
            'Philosophy': {
                notes: 0,
                percentage: 0
            },
            'Web': {
                notes: 0,
                percentage: 0
            },
            'TOTAL': {
                notes: 22,
                percentage: 3.75
            }
        }, {
            'chapter': 11,
            'title':'Case Studies' ,
            'LIS': {
                notes: 1,
                percentage: 5
            },
            'Archives': {
                notes: 3,
                percentage: 15
            },
            'Business': {
                notes: 7,
                percentage: 35
            },
            'Cognitive Science': {
                notes: 1,
                percentage: 5
            },
            'Computing': {
                notes: 6,
                percentage: 30
            },
            'IA': {
                notes: 0,
                percentage: 0
            },
            'Law': {
                notes: 2,
                percentage: 10
            },
            'Linguistics': {
                notes: 1,
                percentage: 5
            },
            'Museums': {
                notes: 3,
                percentage: 15
            },
            'Philosophy': {
                notes: 2,
                percentage: 10
            },
            'Web': {
                notes: 1,
                percentage: 5
            },
            'TOTAL': {
                notes: 20,
                percentage: 3.41
            }
        }
	];

d3.select('#tdoViz').append('div')
		.attr('id','tooltip')
		.attr('class','hidden')
		.append('span')
			.attr('id','value')
d3.select('#tooltip').append('div')
			.attr('id','stats');


$(document).ready(function() {
	createStackBar();
	createChapterContentPieChart(1);
	showDisciplineLabels(disciplines,20,'#chapterLabels');
	chapterDetails(1,'#chapterDetails');
})


function disciplineBreakdown() {
	$('#main').show();
	$('#main .chart').html('');
	$('#breakdownSelected').html('');

	var width = 600

	var categories = disciplineTotals.map(function(d) {
			return d.name;
		});

	disciplinesPercentage = disciplineTotals.map(function(d) {
		return d.data.map(function(o,i) {
			return {
				y: o.percentage,
				x: o.cat,
				n: o.notes,
				name: d.name
			}
		})
	})



	var svg = d3.select('div #main .chart').append('svg')
				.attr('id','book')
				.attr('width',width)
				.attr('height',60);

	$('#main .title').show();
	$('#main .title').text("Discipline Breakdown")

	var xPercentageScale = d3.scale.linear()
					.domain([0,100])
					.range([0,width]);

	var values = disciplinesPercentage[0].map(function (d) {
	        return d.cat;
	    });
	var stack = d3.layout.stack();
	stack(disciplinesPercentage);

	disciplineSideBySide();

	var rects = svg.selectAll('rect')
					.data(disciplinesPercentage)
					.enter()
					.append('rect')
					.attr({
						class: "discipline",
						x: function(d) {
							return xPercentageScale(d[0].y0)
						},
						y: 10,
						height: 30,
						width: function(d) {
							return xPercentageScale(d[0].y);
						},
						discipline: function(d) {
							return d[0].name;
						},
						text: function(d) {
							if (xPercentageScale(d[0].y) > 35) {
								return d[0].y +"%";
							}
							return;
						}
					})
					.style('fill', function(d,i) {
						return colors(i);
					})
					.on('mouseover',function(d,i) {
						var t = xPercentageScale(d[0].y0);
						var text = d[0].name+": "+d[0].y+"% of total";
						d3.select("#tooltip")
							.style('margin-left', function() {
								if (xPercentageScale(d[0].y) >50) {
									return t+'px';
								}
								else {
									return t-75 +'px';
								}
							})
							//.style('width',text.length*5)
							.classed('hidden',false)
							.select('#value')
							.text(text);

						d3.select("#stats")
							.text("Notes: "+d[0].n);

						//breakdown('#breakdownOver',d,i);
					})
					.on('mouseout',function(d) {
						d3.select('#tooltip').classed('hidden',true);
						// $("#breakdownOver").html(' ');
					})
					.on('click', function(d,i) {
						selectDiscipline(disciplines[i]);
						//breakdown('#breakdownSelected',d,i);
					});

}


function breakdown(id,discipline,index) {

	$(id).html('');
	discipline = discipline[0].name;
	var data = disciplinesBreakdown[discipline].map(function(d) {
		return d;
	});

	var height = 70;
	var bdown = d3.select('div '+id).append('svg')
		.attr('id','disciplineBreakdown')
		.attr('width',370)
		.attr('height',120)

	var y = d3.scale.linear()
				.domain([0,40])
				.range([0,height]);

	bdown.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr({
			class: 'chapter',
			x: function(d,i) {
				return (i)*31+25;
			},
			width: 30,
			height:0,
			y:height,
			fill: function(d) {
				return colors(index);
			}
		})
		.on('click', function(d) {
			chapterBreakdown();
			chapterDetails(d.chapter,'#chapterSelected');
	    })
	    .on('mouseover', function(d) {
	    	chapterBreakdown();
	    	chapterDetails(d.chapter,'#chapterOver');
	    	if (d.chapter === 1 || d.chapter == 8) {
				chapterDetails(d.chapter,'#chapterSelected');
			}
	    })
		.transition()
	      .delay(function(d, i) { return i * 100; })
	      .duration(300)
	      .attr('y', function(d) { 
	      		return height - y(d.notes)
	      })
	      .attr('height', function(d) { 
	      		return y(d.notes);
	      	});
	     

	bdown.selectAll('text')
		.data(data)
		.enter()
		.append("text")
		.text(function(d) {
			return d.notes;
		})
		.attr({
			x: function(d,i) {
				return (i * 31)+25+8;
			},
			y : height-5
		})
		.transition()
			.delay(function(d, i) { return i * 100; })
			.duration(300)
			.attr('y', function(d) { 
				if (d.notes > 4) {
					return (height) - y(d.notes)+15;
				}
				return height - y(d.notes)-5;
			})
			.attr("fill", function(d) {
				if (d.notes>4) {
					return "white";
				}
			});

	var x = d3.scale.ordinal()
				.domain(["1","2","3","4","5","6","7","8","9","10","11"])
				.rangeRoundBands([20,370])

	var xAxis = d3.svg.axis()
					.scale(x)
					.orient("bottom");

	bdown.append("g")
			.attr("class", "x axis")
			.attr("transform","translate (0,"+height+")")
			.call(xAxis)
		.append('text')
			.attr('x',330)
			.attr('y',25)
			.attr('dx','.71em')
			.text("chapter")

	var y = d3.scale.linear()
				.domain([0,40])
				.range([height,0]); 

	var yAxis = d3.svg.axis()
				.scale(y)
				.orient('left')
				.ticks(10,"");

	bdown.append('g')
			.attr("class","y axis")
			.attr("transform", "translate(20,0)")
			.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy",".71em")
			.style("text-anchor","end")
			.text("# of notes")
	
	bdown.append("text")
		.attr({
			class: 'chartTitle',
			transform: "translate(150,"+(height+40)+")",
		})
		.text(discipline);
}	  


/*
	Function that will create the chapter breakdown by the number of notes in the book.
*/
function chapterBreakdown() {
	d3.select('#tdoViz').append('div')
		.attr('id','tooltip2')
		.attr('class','hidden')
		.append('span')
			.attr('id','value');

	d3.select('#tooltip2').append('div')
				.attr('id','stats');

    var totals = chaptersBreakdown.map(function(d) {
    	return d.TOTAL;
    });

    $('#chapters').show();
	$('#chapters .chart').html('');
	
    $('#chapters .title').show();
    $('#chapters .title').text("Chapter Breakdown")

    var svg = d3.select('div #chapters .chart').append('svg')
    			.attr('width',800)
    			.attr('height',60);   

    totals = chaptersBreakdown.map(function(d,i) {
			return [{
				y: d.TOTAL.percentage,
				x: "Chapter "+(i+1),
				n: d.TOTAL.notes,
				name: d.chapter,
				title: d.title
			}]
	})	

	var xPercentageScale = d3.scale.linear()
					.domain([0,100])
					.range([0,800]);
	
	var stack = d3.layout.stack();
	stack(totals);	

	var rects = svg.selectAll('rect')
					.data(totals)
					.enter()
					.append('rect')
					.attr({
						class: "chapter",
						x: function(d) {
							return xPercentageScale(d[0].y0)
						},
						y: 10,
						height: 30,
						width: function(d) {
							return xPercentageScale(d[0].y);
						},
						discipline: function(d) {
							return d[0].name;
						},
						text: function(d) {
							if (xPercentageScale(d[0].y) > 35) {
								return d[0].y +"%";
							}
							return;
						}
					})
					.style('fill', function(d,i) {
						return hue(i);
						// return 'teal';
					})
					.on('mouseover',function(d,i) {
						var t = xPercentageScale(d[0].y0);
						var text = d[0].x+": "+d[0].y+"% of total";
						d3.select("#tooltip2")
							.attr("y", function() {

							})
							.style('margin-left', function() {
								if (xPercentageScale(d[0].y) >50) {
									return t+'px';
								}
								else {
									return t-75 +'px';
								}
							})
							.classed('hidden',false)
							.select('#value')
							.text(text);

						chapterDetails(i+1,'#chapterOver');
						if (i+1 === 1 || i+1 == 8) {
							chapterDetails(i+1,'#chapterSelected');
						}
					})
					.on('mouseout',function(d) {
						d3.select('#tooltip2').classed('hidden',true);
						// $("#chapterOver").html(' ');
					})
					.on('click', function(d,i) {
						chapterDetails(i+1,'#chapterSelected');
					})	
}


/*
	Function that will create the discipline breakdown of the chapter in particular, right side will be number of notes and left side will be the length of notes.
*/
function chapterDetails(chapter,target) {
	
	var chartWidth = 300;
	var barHeight = 20;

	showDisciplineLabels(disciplines,barHeight,'#chapterDisciplines');

	$(target).show();
	$(target).html('');

	var chapterData=[];
	var data =[];
	chaptersBreakdown.map(function(d) {
		if (d.chapter == chapter) {
			$.each(disciplines, function(i,key) {
				var temp = {
					'discipline': key,
					'notes': d[key].notes,
					'percentage':d[key].percentage
				};
				// Testing for note length mode just for chapter 1.
				if ((d.chapter == 1 || chapter == 8) && target == '#chapterOver') {
					temp['length'] = d[key].length;
					temp['lenpercent'] = d[key].lenpercent;
					temp['notesData'] = d[key].notesData;

					data.push(d[key].length);
				} 
				else {
					data.push(d[key].notes);
				}

				chapterData.push(temp)
			})
		}		
	});

	// console.log(chapterData);
	var svg = d3.select("div"+target).append("svg")
					.attr({
						'width': chartWidth,
						'height':280
					})
		
		svg.append("text")
			.attr({
				class: 'chartTitle',
				transform: "translate(150,260)"
			})
			.text("Chapter "+chapter);

		// svg.append("text")
		// 	.attr({
		// 		class: 'chartTitle',
		// 		transform: "translate(5,280)"
		// 	})
		// 	.text(chapters[chapter-1].title);

	var max;
	if ((chapter === 1 || chapter == 8) && target == '#chapterOver') {
		var x = d3.scale.linear()
		    .domain([0, 2250])
		    .range([0, chartWidth-20]);

		var xOver = d3.scale.linear()
		    .domain([1200,0])
		    .range([0, chartWidth-20]);
	}
	else {
		max = d3.max(data, function(d) { 
					// return d3.max(d.data, function(n) { 
					// 	return n.notes+1; 
					// });
					return d;
				}); 

		var x = d3.scale.linear()
		    .domain([0, max+1])
		    .range([0, chartWidth-20]);

    	var xOver = d3.scale.linear()
		    .domain([max+1,0])
		    .range([0, chartWidth-20]);
	}
		

	var bar = svg.selectAll("g")
	    .data(chapterData)
	  	.enter().append("g")
	    .attr({	   
	    	"transform": function(d, i) { 
	    		return "translate(0," + i * barHeight + ")"
	    	}
	    });

	bar.append("rect")
	    .attr("width", function(d) {
	    	if (target === 'chapterOver')
	    		if (chapter === 1 || chapter == 8)
	    			return x(d.length);
	    		else 
	    			return x(d.notes);
	    	else 
	    		return 0;
	    })
	    .attr("height", barHeight - 1)
	    .attr({
	    	fill: function(d,i) {
	    		return colors(i);
	    	},
	    	x: function(d) {
	    		if (target == '#chapterOver')
	    			return chartWidth //- x(d3.max(data)+1);
	    		else
	    			return 0;
	    	}

	    })
	    .transition()
	      .delay(function(d, i) { return i * 100; })
	      .duration(300)
	      .attr('x', function(d) { 
	      		if (target === '#chapterOver')
	      			if (chapter === 1 || chapter == 8)
		    			return chartWidth -x(d.length);
		    		else
	      				return chartWidth -x(d.notes);
	      		else
	      			return 0;
	      })
	      .attr('width', function(d) {
	      		if ((chapter === 1 || chapter == 8) && target == '#chapterOver')
	    			return x(d.length);
	    		else
	      			return x(d.notes);
	      	});

	var xAxisSelected = d3.svg.axis()
			.scale(x)
			.orient("bottom");

	var xAxisOver = d3.svg.axis()
			.scale(xOver)
			.orient("bottom");

	if (target == '#chapterOver') {
		svg.append("g")
			.attr("class", "x axis")
			.attr("transform","translate(19,220)")
			.call(xAxisOver)
		svg.append('text')
			.attr('x',20)
			.attr('y',215)
			// .attr('dx','.31em')
			.text(function () { 
				if (chapter == 1 || chapter == 8)
					return "# of words"
				else
					return "# of notes"
			})
	}
	else {
		svg.append("g")
				.attr("class", "x axis")
				.attr("transform","translate(0,220)")
				.call(xAxisSelected)
			.append('text')
				.attr('x',260)
				.attr('y',-5)
				.attr('dx','.31em')
				.text("# of notes");
	}


	bar.append("text")
	    .attr({
	    	x : function(d) {
	    		if (target == '#chapterOver') {
	    			if (chapter == 1 || chapter == 8) {
	    				if (d.length < 100)
		    				return chartWidth - (x(d.length) +20);
		    			return chartWidth - (x(d.length) -5);
	    			}
	    			else {
	    				return chartWidth - (x(d.notes)-5);
	    			}
	    		}
	    		else {
	    			if (d.notes > 0) {
			    		if (d.notes >9)
			    			return x(d.notes)-20;
			    		else	
			    			return x(d.notes)-10;
			    		
			    		// else
			    		// 	 	
			    	} 
	    		}	
	    	},
	    	y: barHeight / 2,
	    	dy: ".35em",
	    	fill: function(d) {
	    		if (target == '#chapterOver' && (chapter == 1 || chapter == 8)) {
	    			if (d.length <100 )
	    				return 'black';
	    			else
	    				return 'white';
	    		}
	    		else
	    			return "white";
	    	}
	    })
	    .text(function(d) {
	    	if (target == '#chapterOver' && (chapter === 1 || chapter == 8)) {
	    		if (d.length > 0)
	    			return d.length; 
	    	}
    		else {
    			if (d.notes > 0)
	    			return d.notes; 
    		} 
	    	
	    });
}


/*
	Function that will display the labels of the disciplines in the chapter breakdown detail chart.
*/
function showDisciplineLabels(disciplines,barHeight,target) {
	$(target).html('');
	$(target).show();
	var svg = d3.select("div"+target).append('svg')
				.attr('height',250)

	var bar = svg.selectAll('g')
		.data(disciplines)
	  	.enter().append("g")
	    .attr({
	    	"transform": function(d, i) { 
	    		return "translate(0," + i * barHeight + ")"
	    	}
	    });

	bar.selectAll('rect')
		.attr({

		})

	bar.append("text")
	    .attr({
	    	y: barHeight / 2,
	    	dy: ".45em",
	    	fill: function(d) {
	    		return "black";
	    	}
	    })
	    .text(function(d) { 
	    	return d; 
	    })
	    .style('text-anchor','end');
}


/*
	This function will handle the selection/unselection of the two disciplines that will be compared in the Side by Side Discipline Breakdown.

*/
function selectDiscipline(selection) {
	var index = $.inArray(selection,disciplineSelections);
	if (index != -1) {
		disciplineSelections.splice(index,1);
	} else {
		disciplineSelections.push(selection);
	}

	disciplineSideBySide();
}


/*
	Function that will display the Discipline Breakdon side by side bars by chapter.
*/
function disciplineSideBySide() {

	$('#sidebyside').remove();
	var margin = 25;
	var width = 600;
	var height = 180;
	var groupPadding = .2;

	var temp = [];
	$.each(disciplines, function(i,d) {
		if ($.inArray(d,disciplineSelections)!=-1)
			temp.push(d);
	})
	disciplineSelections = temp;

	var svg = d3.select("div#main .chart").append('svg')
					.attr({
						'display':'block',
						'width': width,
						'height':height,
						'id':'sidebyside'
					});

	//Processing the data to get it in the correct structure needed.
	var data = [];
	for (var i = 1; i<12; i++) {
		var obj = {
			'chapter': i,
			'data': []
		};
		$.each(disciplineSelections, function (j,d) {
			var t = $.grep(disciplinesBreakdown[d], function (n,k) {
					return (n.chapter == i);
				});
			obj.data.push({
				'discipline': d,
				'notes': t[0].notes
			})
		})

		data.push(obj);
	}

	var x0 = d3.scale.ordinal()
				.domain(["1","2","3","4","5","6","7","8","9","10","11"])
				.rangeBands([margin, (width-100)-margin],groupPadding);
	var x1 = d3.scale.ordinal();
	var y = d3.scale.linear()
    			.range([height-margin, 0]);

	x1.domain(disciplineSelections).rangeRoundBands([0,x0.rangeBand()]);
	var maxValue = d3.max(data, function(d) { 
		return d3.max(d.data, function(n) { 
			return n.notes+1; 
		}); 
	});

	y.domain([0, maxValue]);

	var ticks;
	if (maxValue > 5) {
		ticks = maxValue/5;
	} else {
		ticks = maxValue;
	}


	var xAxis = d3.svg.axis()
	    .scale(x0)
	    .orient("bottom")
	    .tickSize(0,0);

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left")
	    .ticks(ticks)
	    // .tickFormat(d3.format(".2s"));

	var barGroups = svg.selectAll('g')
		.data(data)
		.enter()
		.append('g')
			.attr('transform',function(d) {
				return "translate("+x0(d.chapter)+",0)";
			})	
			.attr('class',function(d) {
				return 'sidebyside ggroup ch'+d.chapter;
			})
			.on('mouseover', function(d) {
				console.log(d.chapter);
				$('g.sidebyside.ch'+d.chapter+' text').attr('fill','black');
			})
			.on('mouseout', function(d) {				
				$('g.sidebyside.ch'+d.chapter+' text').attr('fill','white');
			});		

	svg.append('span')
		.attr("id","sidebysideTooltip");

	barGroups.selectAll("rect")
      	.data(function(d) {
      		return d.data;
      	})
	    .enter()
	    .append("rect")
	      .attr({
	      	"width": function(d,i) {
	      		return x1.rangeBand()
	      	},
	      	"x": function(d,i) { 
	      		return x1(d.discipline);
	      	},
	      	"y": function(d) { 
	      		return height-margin;
	      		//return y(d.notes); 
	      	},
	      	"height": function(d) { 
	      		return 0;
	      		//return (height-margin) - y(d.notes); 
	      	},
	      	"fill": function(d,i) { 
	      		return colors($.inArray(d.discipline,disciplines)); 
	      	},
	      	'notes':function(d) {
	      		return d.notes;
	      	}
	      })
	      .on('mouseover',function(d) {

	      })
	      .transition()
			.delay(function(d, i) { return i * 200; })
			.duration(100)
			.attr('y', function(d) { 
				return y(d.notes); 
			})
			.attr('height', function(d) { 
				return (height-margin) - y(d.notes);
			});

	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + (height-margin) + ")")
		.call(xAxis)
		.append('text')
			.attr({
				'transform': 'translate(250,21)'
			})
			.style("text-anchor", "end")
	  		.text("Chapters");

	svg.append("g")
	  .attr("class", "y axis")
	  .attr("transform", "translate(20,0)")
	  .call(yAxis)
	.append("text")
	  .attr("transform", "rotate(-90)")
	  .attr("y", 5)
	  .attr("dy", ".71em")
	  .style("text-anchor", "end")
	  .text("# of notes");

	// barGroups.selectAll('.sidebysideLabel')
	// 	.data(function(d) {
	// 		return d.data
	// 	})
	// 	.enter()
	// 	.append('text')
	// 	.attr({
	// 		'x': function(d,i){
	// 			return x1(d.discipline)+(x1.rangeBand()/2)-5;
	// 		},
	// 		'y': function(d,i) {
	// 			return y(d.notes)-10;
	// 		},
	// 		'fill': function(d) {
	// 			return 'white';
	// 			// return colors($.inArray(d.discipline,disciplines)); 
	// 		}			
	// 	})
	// 	.text(function(d) {
	// 		if (d.notes > 0)
	// 			return d.notes;
	// 	})

	var chartLabels = svg.selectAll('.disciplineBreakdownLabels')
		.data(disciplineSelections)
		.enter()
		.append('g')
			.attr({
				'class':'disciplineBreakdownLabels',
				'transform': function(d,i) {
					var spacing = height/disciplines.length;
					return "translate("+(width-110)+","+((i+1)*spacing)+")";
				}
			});

	chartLabels.append('text')
		.attr({
			'fill':'black',
			'font-size':'8pt',
			'dx':'10px'
		})
		.text(function(d) {
			return d;
		});

	chartLabels.append('rect')
		.attr({
			'y':-8,
			'width':8,
			'height':8,
			'fill': function(d,i) {
				var index = $.inArray(d,disciplines);
				return colors(index);
			}
		})

	if (disciplineSelections.length==0) {
		var box = svg.append('g')
			.attr({
				'transform': 'translate(100,50)'
			});

		box.append('rect')
			.attr({

				'width': 320,
				'height':50,
				'fill': hue(0)
			})

		box.append('text')
			.attr({
				'max-width':250,
				'dy': 25,
				'dx': 15,
			})
			.text('Please select a discipline from the bar above.')
	}
}


/*
	Function that will create the stack bar chart of the distribution between notes and content for every chapter in the book.
*/
function createStackBar() {

	var width = getParentWidth($("#stacked")),
		height = 300,
		margin = 20;


	var data = chapterPercentages;

	var svg = d3.select('div#stacked').append('svg')
				.attr({
					'width': width,
					'height':height
				});

	

	var x = d3.scale.ordinal()
				.domain(data.map(function(d) {
					return d.chapter;
				}))
				// .range([20,width-margin])
				.rangeRoundBands([margin+10,width-margin],.1);

	var y = d3.scale.linear()
				.domain([d3.max(data,function(d) {
					return d.totalLength
				}),0])
				.range([0,height-90]);

	var xAxis = d3.svg.axis()
					.scale(x)
					.orient('bottom')
					.tickSize(0,0);

	var yAxis = d3.svg.axis()
					.scale(y)
					.orient('left')
					.ticks(5)
					.tickFormat(d3.format(".2s"));

	var bars = svg.selectAll('.ch')
					.data(data)
					.enter()
					.append('g')
					.attr({
						'class':'g',
						'transform': function(d) {
							return 'translate('+ x(d.chapter) +',0)';
						}
					})
					.on('click', function(d) {
						createChapterContentDistribution(d.chapter);
					});

	bars.selectAll('rect')
		.data(function(d) {
			return d.lengths;
		})
		.enter()
		.append('rect')
		.attr({
			'width': x.rangeBand(),
			'y': function(d) {
				return y(d.y1)
			},
			'height': function(d) {
				return y(d.y0) - y(d.y1)
			},
			'fill': function (d) {
				if (d.cat == 'Content')
					return hue(7);
				else 
					return hue(11);
			},
			'value': function(d) {
				return d.value;	
			}
		})

	bars.selectAll('text')
		.data(function(d) {
			return d.lengths
		})
		.enter()
		.append('text')
		.attr({
			transform: function(d) {
				return 'translate(5,'+(y(d.y0)-5)+')';
			},
			fill: function(d) {
				if (d.cat == 'Content') 
					return 'white';
				else
					return 'black';
			},
			'font-size': '8px'

		})
		.text(function(d) {
			return d.percentage+"%";
		})


	svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height-90) + ")")
      .call(xAxis)
    .append("text")
	  .attr("transform", "translate("+(width/2)+",0)")
	  .attr("y", 20)
	  .attr("dy", ".81em")
	  .style("text-anchor", "end")
	  .text("Chapter");

	svg.append("g")
	  .attr("class", "y axis")
	  .attr("transform", "translate("+(margin+10)+",0)")
	  .call(yAxis)
	.append("text")
	  .attr("transform", "rotate(-90)")
	  .attr("y", 5)
	  .attr("dy", ".81em")
	  .style("text-anchor", "end")
	  .text("Length");

	svg.append('rect')
		.attr({
			width: 10,
			height:10,
			x: width/3,
			y:height-50,
			fill: hue(7)
		})

	svg.append('text')
		.attr({
			x: (width/3)+15,
			y:height-40,
			'font-size':'12px'
		})
		.text("Content")

	svg.append('rect')
		.attr({
			width: 10,
			height:10,
			x: (width/2),
			y:height-50,
			fill: hue(11)
		});
	svg.append('text')
		.attr({
			x: (width/2)+15,
			y:height-40,
			'font-size':'12px'
		})
		.text("Notes")
}


/*
	Function that creates the single chapter distribution between notes and content. It builds an horizontal stacked bar chart that will be used at the beginning of each one of the chapter within the ebook.
*/
function createChapterContentDistribution(chapter) {

	$('#chapterStats').html('');
	//Adding the title to the chapter distribution
	$('#chapterStats').append('<h2>Chapter '+chapter+' </h2>');
	
	var width = getParentWidth($('#chapterStats')),
		height = 100;

	var svg = d3.select('div#chapterStats').append('svg')
				.attr({
					'class': 'chapterContentDistribution',
					'height': height,
					'width': width
				});

	
	var barHeight = 50;
	var data;
	$.each(chapterPercentages, function(i,d) {
			if (d.chapter === chapter) 
				data = d;
		});

	var x = d3.scale.linear()
				.domain([0,data.totalLength])
				.range([0,width]);

	var bars = svg.selectAll('.chapterPortions')
		.data(data.lengths)
		.enter()
		.append('g');

	bars.append('rect')
			.attr({
				'x': function(d) {
					return x(d.y0);
				},
				'width': function(d) {
					return x(d.value);
				},
				'height': barHeight,
				'fill': function (d) {
					if (d.cat == 'Content')
						return hue(7);
					else 
						return hue(11);
				},
				'percentage': function (d) {
					return d.percentage;
				}	
			});

	bars.append('text')
		.attr({
			'class': 'barLabel',
			'fill': function(d) {
				if (d.cat == 'Content')
					return 'white';
				else 
					return 'black';
			},
			'y': barHeight-5,
			'x': function(d) {
				return x(d.y0)+5;
			},
			'font-size': '12px'
		})
		.text(function(d) {
			return d.percentage +" %";	
		});

	svg.append('rect')
		.attr({
			width: 10,
			height:10,
			x: width/3,
			y:height-(barHeight-5),
			fill: hue(7)
		})

	svg.append('text')
		.attr({
			x: (width/3)+18,
			y:height-(barHeight),
			'font-size':'12px'
		})
		.text("Content");

	svg.append('rect')
		.attr({
			width: 10,
			height:10,
			x: (width/2),
			y:height-(barHeight-5),
			fill: hue(11)
		});
	svg.append('text')
		.attr({
			x: (width/2)+18,
			y:height-(barHeight),
			'font-size':'12px'
		})
		.text("Notes");
}

function getParentWidth(element) {
	var width = $(element).parent().width();
	if (width > 600) {
		return 600;
	} else {
		return width;
	}
}



/*
	Function the will create the pie chart with the content vs notes pie chart at the beginning of every chapter.
*/
function createChapterContentPieChart(chapter) {
	var width = 250,
		height = 250,
		radius = Math.min(width,height/2);


	var data;
	$.each(chapterPercentages, function(i,d) {
		if (d.chapter == chapter)
			data = d;
	});

	var arc = d3.svg.arc()
				.outerRadius(radius-10)
				.innerRadius(0);

	var pie = d3.layout.pie()
				.sort(null)
				.startAngle(1.1*Math.PI)
				.endAngle(3.1*Math.PI)
				.value(function (d) {
					return d.value
				})

	var svg = d3.select('div#chapterPie').append('svg')
					.attr({
						'class': 'pieChart',
						'width': width,
						'height': height
					})
				.append('g')
					.attr('transform', 'translate('+(width/2)+','+(height/2)+')');

	var g = svg.selectAll('.arc')
		.data(pie(data.lengths))
		.enter()
		.append('g')
			.attr({
				'class':'arc'
			});

	function arcTween(a) {
		var i = d3.interpolate(this._current,a);
		this._current = i(0);
		return function(t) {
			return arc(i(t));
		};
	}

	g.append('path')
		.attr({
			// 'd':arc,
			'fill': function(d) {
				if (d.data.cat == 'Content')
					return hue(7);
				else 
					return hue(11);
			},
			'stroke': '#FFF'
		})
		.transition().delay(function(d, i) { return i * 500; }).duration(500)
		.attrTween('d', function(d) {
		   var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
		   return function(t) {
		       d.endAngle = i(t);
		     return arc(d);
		   }
		});

	g.append('text')
		.attr({
			'transform': function(d) {
				return "translate("+arc.centroid(d)+")";
			},
			'dy': '.35em',
			'text-anchor': 'middle',
			'fill': function(d) {
				if (d.data.cat == 'Content')
					return 'white';
				else 
					return 'black';
			}
		})
		.text(function(d) {
			return d.data.cat;
		})

	g.append('text')
		.attr({
			'transform': function(d) {
				return 'translate('+arc.centroid(d)+")";
			},
			'dy': '1.8em',
			'dx':'.3em',
			'font-size': '10pt',
			'font-weight': 'bold',
			'text-anchor': 'middle',
			'fill': function(d) {
				if (d.data.cat == 'Content')
					return 'white';
				else 
					return 'black';
			}
		})
		.text(function(d) {
			return d.data.percentage +"%";
		})
}










