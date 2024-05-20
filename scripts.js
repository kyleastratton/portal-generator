// ! Navbar logic

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// ! Accordion logic

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.getElementById("accordion1").click();
document.getElementById("accordion2").click();

// ! Generator

const firstName = maleNames.concat(femaleNames);

function generateName(selectorId) {
  let maleNames = ["Andrew", "Adam", "Adrian", "Alan", "Allan", "Aaron", "Alex", "Alexander", "Anthony", "Austin", "Archer", "Arthur", "Aiden", "Abraham", "Alfred", "Alastair", "Alasdair", "Arnold", "Angus", "Ben", "Benjamin", "Barry", "Brandon", "Blair", "Bryce", "Blake", "Brian", "Bryan", "Bradley", "Bruce", "Billy", "Bob", "Charles", "Charlie", "Carl", "Connor", "Cory", "Calvin", "Cameron", "Christian", "Callum", "Clark", "Chandler", "Christopher", "Chris", "Callan", "Craig", "Daniel", "David", "Derek", "Donald", "Declan", "Damian", "Drew", "Danny", "Darren", "Douglas", "Duncan", "Dustin", "Dennis", "Darnell", "Desmond", "Domenic", "Dwight", "Drake", "Eric", "Ethan", "Elijah", "Ezekiel", "Elliot", "Evan", "Eugene", "Edmund", "Ewan", "Earl", "Emmit", "Erwin", "Edward", "Fraser", "Franic", "Fred", "Frank", "Fletcher", "Graham", "Gerald", "Gary", "Gabriel", "Gavin", "George", "Grant", "Garrett", "Gregory", "Gordon", "Geoffrey", "Harry", "Henry", "Hector", "Harvey", "Hugo", "Hank", "Isaac", "Irwin", "James", "Jamie", "Jerry", "John", "Jack", "Jacob", "Joseph", "Joshua", "Jordon", "Justin", "Jeremy", "Johnny", "Jake", "Kyle", "Kevin", "Kaiden", "Kane", "Kenneth", "Kieran", "Kian", "Lewis", "Liam", "Lucas", "Luke", "Lachlan", "Martin", "Michael", "Matthew", "Macolm", "Martin", "Nathan", "Nicholas", "Neil", "Oscar", "Oliver", "Owen", "Peter", "Paul", "Patrick", "Phillip", "Pierce", "Ross", "Reese", "Ryan", "Rory", "Richard", "Steven", "Stephen", "Sam", "Samual", "Spencer", "Shane", "Shawn", "Sean", "Scott", "Simon", "Trevor", "Thomas", "Taylor", "Tyler", "Timothy", "Troy", "Tony", "Toby", "Todd", "Victor", "Vincent", "William", "Warren", "Walter", "Wayne", "Zachary", "Zane", "Zack"];

  let femaleNames = ["Ashley", "Amber", "Alice", "Alicia", "Alison", "Allison", "Amelia", "Amy", "Aria", "Abigail", "Addison", "Audrey", "Anne", "Anna", "Alexis", "Andrea", "Ariel", "Arianna", "Alexandra", "Annie", "Angela", "Arielle", "Astrid", "April", "Allana", "Abby", "Angelica", "Adrianna", "Andi", "Brooke", "Barbara", "Beverely", "Bailey", "Blake", "Bella", "Brianna", "Bonnie", "Bethany", "Bridget", "Charlotte", "Chloe", "Cora", "Caroline", "Caitlin", "Carly", "Clara", "Catherine", "Christina", "Chelsea", "Carolyn", "Connie", "Cheryl", "Candice", "Daisey", "Danielle", "Demi", "Deborah", "Emma", "Ellie", "Erica", "Emily", "Elizabeth", "Eva", "Erin", "Evelyn", "Elaine", "Eileen", "Franchesca", "Florance", "Gabriella", "Grace", "Gemma", "Gracie", "Gwen", "Gloria", "Gloria", "Gerogie", "Hazel", "Harper", "Hailey", "Hazel", "Heidi", "Holly", "Helen", "Hannah", "Harriet", "Helena", "Hayley", "Harrietta", "Isobel", "Ivy", "Irene", "Imogene", "Jessica", "Jade", "Jesse", "June", "Juliette", "Jasmine", "Juliana", "Jane", "Juliet", "Jocelyn", "Jacqueline", "Jennifer", "Joy", "Jamie", "Jemma", "Katie", "Karen", "Kylie", "Kimberley", "Khloe", "Kiara", "Kate", "Keira", "Kayleigh", "Kelsey", "Kathryn", "Kathleen", "Kelly", "Lucy", "Lauren", "Lily", "Leah", "Lillian", "Luciana", "Lucille", "Laura", "Lexi", "Leslie", "Lara", "Linda", "Lorraine", "Lesly", "Lillith", "Mary", "Margaret", "Mia", "Maddison", "Melanie", "Madeline", "Molly", "Mabel", "Melissa", "Michelle", "Murphy", "Miranda", "Marie", "Megan", "Nancy", "Natalie", "Natalia", "Nicole", "Nicola", "Nadia", "Natasha", "Nadine", "Niomi", "Norma", "Olivia", "Ophelia", "Penelope", "Piper", "Paige", "Poppy", "Pauline", "Paula", "Patricia", "Riley", "Ruby", "Ruth", "Ryleigh", "Rachel", "Rachael", "Rosemary", "Rosie", "Rose", "Robin", "Robyn", "Rebecca", "Rhianna", "Roslyn", "Sophie", "Sophia", "Scarlett", "Sarah", "Sienna", "Sara", "Summer", "Samantha", "Skye", "Sage", "Sabrina", "Sylvia", "Stephanie", "Sasha", "Sam", "Samira", "Sharon", "Shannon", "Stacey", "Susanna", "Susan", "Stacy", "Sally", "Shirley", "Sheila", "Shae", "Siobhan", "Tyler", "Teagan", "Teresa", "Theresa", "Tara", "Tamara", "Toni", "Tahlia", "Violet", "Victoria", "Valarie", "Vanessa", "Veronica", "Vivian", "Wendy", "Whittney", "Yasmine", "Yvonne", "Zoe", "Zoey", "Zara", "Zahra"];

  let surname = [
    "Abbett",
    "Abbott",
    "Abrahams",
    "Accord",
    "Ackerman",
    "Adams",
    "Addington",
    "Ahmed",
    "Alderson",
    "Allen",
    "Altman",
    "Anderson",
    "Archer",
    "Armstrong",
    "Ash",
    "Ashford",
    "Ashton",
    "Aspen",
    "Atkins",
    "Atkinson",
    "Austin",
    "Avery",
    "Bachelor",
    "Bailey",
    "Baker",
    "Baldwin",
    "Ball",
    "Banks",
    "Barber",
    "Barker",
    "Barnes",
    "Barnett",
    "Barr",
    "Barrett",
    "Bates",
    "Baxter",
    "Becker",
    "Bell",
    "Benjamin",
    "Benne",
    "Bennett",
    "Benson",
    "Berkeley",
    "Bernhard",
    "Berry",
    "Birch",
    "Bird",
    "Black",
    "Blackburn",
    "Blackwell",
    "Blackwood",
    "Blyth",
    "Bolton",
    "Bond",
    "Booth",
    "Boswell",
    "Bowman",
    "Boyd",
    "Boyle",
    "Bradford",
    "Bradshaw",
    "Braithwaite",
    "Brannigan",
    "Bray",
    "Brent",
    "Brett",
    "Bridges",
    "Briggs",
    "Brock",
    "Brooks",
    "Brown",
    "Browne",
    "Bruce",
    "Bryant",
    "Bryne",
    "Buchanan",
    "Buckingham",
    "Buckley",
    "Bull",
    "Burke",
    "Burney",
    "Burns",
    "Burrows",
    "Burton",
    "Butcher",
    "Butler",
    "Cain",
    "Calder",
    "Calderwood",
    "Campbell",
    "Carell",
    "Carlock",
    "Carpenter",
    "Carr",
    "Carroll",
    "Carter",
    "Cartwright",
    "Cassell",
    "Cassells",
    "Cavanagh",
    "Cavanaugh",
    "Cedar",
    "Chadwick",
    "Chambers",
    "Chang",
    "Changretta",
    "Chaplin",
    "Chapman",
    "Chase",
    "Cheney",
    "Cherry",
    "Christensan",
    "Christie",
    "Clancy",
    "Clark",
    "Clarke",
    "Clements",
    "Clifford",
    "Coates",
    "Cochran",
    "Coen",
    "Cole",
    "Coleman",
    "Collins",
    "Colman",
    "Combs",
    "Conrad",
    "Cook",
    "Cooper",
    "Coppersmith",
    "Cortez",
    "Cosgrove",
    "Coulter",
    "Cox",
    "Craig",
    "Crain",
    "Crane",
    "Crawford",
    "Cruickshank",
    "Cunningham",
    "Curtis",
    "Cutter",
    "Dale",
    "Dalgleish",
    "Daniels",
    "Davenport",
    "Davey",
    "David",
    "Davidson",
    "Davies",
    "Davison",
    "Dawson",
    "Day",
    "Dean",
    "Deans",
    "Delaney",
    "Deluca",
    "Demarco",
    "Dempsey",
    "Devine",
    "Devlin",
    "Diaz",
    "Dickson",
    "Dixon",
    "Dodd",
    "Doherty",
    "Donaldson",
    "Donnell",
    "Donnelly",
    "Douglas",
    "Doyle",
    "Ducksworth",
    "Dudley",
    "Duffy",
    "Duncan",
    "Dunlop",
    "Dunn",
    "Durst",
    "Dutton",
    "Dyer",
    "Edwards",
    "Eisenberg",
    "Eldridge",
    "Elliot",
    "Ellis",
    "Elm",
    "Evans",
    "Fairley",
    "Farmer",
    "Farnsworth",
    "Farrell",
    "Faulkner",
    "Fenton",
    "Ferguson",
    "Ferrall",
    "Field",
    "Finch",
    "Finlay",
    "Finley",
    "Finn",
    "Firth",
    "Fisher",
    "Fitz",
    "Fitzgerald",
    "Fitzpatrick",
    "Flanagan",
    "Fleetwood",
    "Fleming",
    "Flemming",
    "Fletcher",
    "Flores",
    "Flynn",
    "Foley",
    "Forbes",
    "Foreman",
    "Forrest",
    "Foster",
    "Fowler",
    "Frankson",
    "Freeman",
    "Frost",
    "Fry",
    "Fuller",
    "Fulton",
    "Galbraith",
    "Gallagher",
    "Garcia",
    "Gardiner",
    "Gardner",
    "Garrett",
    "Gately",
    "Gent",
    "Gibbons",
    "Gibson",
    "Gillett",
    "Gilmour",
    "Glassford",
    "Glover",
    "Goddard",
    "Gold",
    "Gonzales",
    "Goodfellow",
    "Goodman",
    "Goodwin",
    "Gordon",
    "Gorman",
    "Gould",
    "Graham",
    "Gray",
    "Green",
    "Greene",
    "Greenwood",
    "Gregory",
    "Grey",
    "Grierson",
    "Griffin",
    "Griggs",
    "Grimes",
    "Groves",
    "Gunn",
    "Haggerty",
    "Hahn",
    "Halford",
    "Hall",
    "Halpert",
    "Halsey",
    "Hamlin",
    "Hancock",
    "Hannah",
    "Hannon",
    "Hanson",
    "Hardie",
    "Harding",
    "Hardwick",
    "Hardy",
    "Hargreaves",
    "Harper",
    "Harris",
    "Harrison",
    "Hart",
    "Harte",
    "Hartley",
    "Harwood",
    "Hawking",
    "Hawkins",
    "Hawthorn",
    "Hay",
    "Haynes",
    "Haywood",
    "Healy",
    "Heath",
    "Helm",
    "Hemlock",
    "Henderson",
    "Hendley",
    "Hendry",
    "Henry",
    "Herd",
    "Herrmann",
    "Hicks",
    "Higgins",
    "Hill",
    "Hilton",
    "Hobbs",
    "Hodges",
    "Hoffman",
    "Hogarth",
    "Hogg",
    "Holden",
    "Holden",
    "Holland",
    "Holloway",
    "Holmes",
    "Hood",
    "Hooper",
    "Hoover",
    "Hope",
    "Hopkins",
    "Houghton",
    "Howard",
    "Howell",
    "Hughes",
    "Hume",
    "Hunt",
    "Hunter",
    "Hurst",
    "Hutchins",
    "Hutchinson",
    "Hutchison",
    "Hyde",
    "Hynd",
    "Ingram",
    "Iqbal",
    "Irvine",
    "Jackson",
    "Jacobson",
    "Jamieson",
    "Jarvis",
    "Jenkins",
    "Jenner",
    "Jennings",
    "Jenson",
    "Johnson",
    "Johnston",
    "Jones",
    "Jordan",
    "Juniper",
    "Kaur",
    "Kearney",
    "Kellogg",
    "Kellogg",
    "Kelly",
    "Kemp",
    "Kennedy",
    "Kent",
    "Kepner",
    "Kerr",
    "Ketchum",
    "Keyes",
    "Khan",
    "Kim",
    "Kimber",
    "King",
    "Kirby",
    "Kirk",
    "Kirkman",
    "Kirkpatrick",
    "Kirkwood",
    "Klein",
    "Knight",
    "Knott",
    "Knowles",
    "Koopman",
    "Kutner",
    "Lamb",
    "Lambert",
    "Lane",
    "Langley",
    "Larson",
    "Lasky",
    "Laurie",
    "Law",
    "Lawson",
    "Lazarus",
    "Lee",
    "Lees",
    "Lennon",
    "Lewin",
    "Lewis",
    "Lister",
    "Little",
    "Lloyd",
    "Locke",
    "Long",
    "Lowe",
    "Lucas",
    "Lynch",
    "Lyons",
    "MacAndrew",
    "MacDonald",
    "MacFarlane",
    "MacGregor",
    "MacInnes",
    "MacKay",
    "MacKenzie",
    "MacLachlan",
    "MacManus",
    "MacMillan",
    "MacNeil",
    "MacRoberts",
    "MacTavish",
    "Maclean",
    "Macleod",
    "Maguire",
    "Mahoney",
    "Malik",
    "Malone",
    "Mann",
    "Manning",
    "Marek",
    "Markhov",
    "Markle",
    "Marsden",
    "Marsh",
    "Marshall",
    "Marston",
    "Martell",
    "Martin",
    "Martinez",
    "Mason",
    "Matthews",
    "Maxwell",
    "May",
    "McAdams",
    "McAnulty",
    "McBride",
    "McCarthy",
    "McCay",
    "McCluskey",
    "McColl",
    "McCormack",
    "McCracken",
    "McCreary",
    "McCullough",
    "McCumisky",
    "McCusker",
    "McDermitt",
    "McDonald",
    "McDonnell",
    "McDougall",
    "McDowell",
    "McEleney",
    "McFarlane",
    "McFazdean",
    "McGill",
    "McGinty",
    "McGowan",
    "McGregor",
    "McIntosh",
    "McIntyre",
    "McKee",
    "McKendrick",
    "McKenna",
    "McKenzie",
    "McKidd",
    "McKie",
    "McKinnon",
    "McLaren",
    "McLaughlin",
    "McLean",
    "McLellan",
    "McLennan",
    "McLeod",
    "McMillan",
    "McNab",
    "McNeill",
    "McPherson",
    "McQueen",
    "McShane",
    "Mellor",
    "Mendez",
    "Metcalfe",
    "Meyer",
    "Middleton",
    "Millar",
    "Miller",
    "Mills",
    "Milne",
    "Milton",
    "Mitchell",
    "Monroe",
    "Montgomery",
    "Moore",
    "Morales",
    "Moreland",
    "Morgan",
    "Morris",
    "Morrison",
    "Morton",
    "Moss",
    "Moss",
    "Muir",
    "Muirhead",
    "Munro",
    "Murdock",
    "Murphy",
    "Murray",
    "Nash",
    "Nelson",
    "Newman",
    "Newton",
    "Nicholls",
    "Nightingale",
    "Nixon",
    "Noble",
    "Norman",
    "Norton",
    "Nottingham",
    "Novak",
    "O'Brien",
    "O'Connoll",
    "O'Connor",
    "O'Donnell",
    "O'Leary",
    "O'Malley",
    "O'Neill",
    "O'Sullivan",
    "Oak",
    "Ormiston",
    "Orr",
    "Osborne",
    "Osbourne",
    "Owens",
    "Page",
    "Palmer",
    "Park",
    "Parker",
    "Parkes",
    "Parkinson",
    "Parks",
    "Parsons",
    "Patel",
    "Patel",
    "Patterson",
    "Payne",
    "Payton",
    "Peacock",
    "Pearce",
    "Pearson",
    "Peck",
    "Peletier",
    "Penn",
    "Pepper",
    "Peters",
    "Pettigrew",
    "Phelps",
    "Phillips",
    "Pickering",
    "Pine",
    "Pollard",
    "Pollock",
    "Polson",
    "Poole",
    "Porter",
    "Posner",
    "Potter",
    "Potts",
    "Poulson",
    "Powell",
    "Prescott",
    "Preston",
    "Price",
    "Prince",
    "Pringle",
    "Purdie",
    "Quin",
    "Quinn",
    "Rafferty",
    "Rahmam",
    "Ralston",
    "Ramirez",
    "Ramos",
    "Ramsay",
    "Ramsey",
    "Rayburn",
    "Reed",
    "Reeves",
    "Reid",
    "Rettie",
    "Reynolds",
    "Rhodes",
    "Rice",
    "Richards",
    "Richardson",
    "Riddell",
    "Riggs",
    "Riley",
    "Ritchie",
    "Rivers",
    "Robbins",
    "Roberts",
    "Robertson",
    "Robinovitch",
    "Robins",
    "Robinson",
    "Robson",
    "Rodriguez",
    "Rodríguez",
    "Rogers",
    "Roland",
    "Roland",
    "Rose",
    "Ross",
    "Rowan",
    "Rowe",
    "Rowland",
    "Rowley",
    "Runne",
    "Russell",
    "Rutherford",
    "Sabre",
    "Salmon",
    "Samson",
    "Sanchez",
    "Sanders",
    "Sanderson",
    "Santiago",
    "Saunders",
    "Schmidt",
    "Schmitt",
    "Schofield",
    "Schwarz",
    "Scott",
    "Sharp",
    "Sharpe",
    "Shaw",
    "Shelby",
    "Shelton",
    "Shepherd",
    "Sheppard",
    "Sherman",
    "Shore",
    "Short",
    "Siggard",
    "Silverman",
    "Simmons",
    "Simpson",
    "Sims",
    "Sinclair",
    "Singleton",
    "Skinner",
    "Slater",
    "Sloan",
    "Smalls",
    "Smart",
    "Smith",
    "Snow",
    "Solomans",
    "Somerville",
    "Spalding",
    "Sparks",
    "Specter",
    "Spencer",
    "Spring",
    "Stanley",
    "Stark",
    "Stein",
    "Stephenson",
    "Sterling",
    "Stevens",
    "Stevenson",
    "Stewart",
    "Stiles",
    "Stokes",
    "Stone",
    "Strong",
    "Sullivan",
    "Summer",
    "Sumners",
    "Sutherland",
    "Sutton",
    "Swan",
    "Sweeney",
    "Sweeny",
    "Swift",
    "Sycamore",
    "Tait",
    "Tanaka",
    "Tate",
    "Tayler",
    "Taylor",
    "Thomas",
    "Thompson",
    "Thomson",
    "Thorne",
    "Thornton",
    "Thorpe",
    "Todd",
    "Tomlinson",
    "Torres",
    "Townsend",
    "Trenton",
    "Tucker",
    "Turnbull",
    "Turner",
    "Urban",
    "Vale",
    "Valentia",
    "Vaughn",
    "Vickers",
    "Vickers",
    "Vincent",
    "Waddell",
    "Wade",
    "Walford",
    "Walker",
    "Wall",
    "Wallace",
    "Walls",
    "Walnut",
    "Walsh",
    "Walton",
    "Ward",
    "Warner",
    "Waters",
    "Watkins",
    "Watson",
    "Watts",
    "Weaver",
    "Webb",
    "Webber",
    "Webster",
    "Welch",
    "Welche",
    "Wellick",
    "Wells",
    "Wernstrom",
    "Wessing",
    "West",
    "Weston",
    "Wexler",
    "Wheaton",
    "Wheeler",
    "Whitaker",
    "White",
    "Whitebeam",
    "Whitehead",
    "Whitehouse",
    "Whitman",
    "Whitmore",
    "Whittle",
    "Whyte",
    "Wilde",
    "Wilkins",
    "Wilkinson",
    "Williams",
    "Williamson",
    "Willow",
    "Wilson",
    "Winter",
    "Witcher",
    "Wong",
    "Wood",
    "Woodcock",
    "Woods",
    "Woodward",
    "Wright",
    "Wyatt",
    "Wynn",
    "Yates",
    "Young",
    "Zane",
    "Ziegler",
  ];

  const firstName = maleNames.concat(femaleNames);
  let getFirstName = Math.floor(Math.random() * firstName.length);
  let generatedFirstName = firstName[getFirstName];
  let getSurname = Math.floor(Math.random() * surname.length);
  let generatedSurname = surname[getSurname];
  document.getElementById(selectorId).value =
    generatedFirstName + " " + generatedSurname;
}

function generateMatterNumber(selectorId, nameId) {
  let name = document.getElementById(nameId).value;
  let splitName = name.split(" ");
  let surname = splitName[1];
  let clientNumber = getRandomInt(99);
  if (clientNumber < 10){
    clientNumber = clientNumber.toString().padStart(2, '0')
  }
  let fileNumber = getRandomInt(99);
  if (fileNumber < 10) {
    fileNumber = fileNumber.toString().padStart(2, '0')
  }
  let result = surname.substring(0, 3);
  let result1 = result.toUpperCase();
  let result2 = result1 + clientNumber + "-" + fileNumber;
  document.getElementById(selectorId).value = result2;
}

//! NUMBERS

// function generateRandomNumber() {
//     let RndInteger = Math.floor(Math.random() * 1000);
//     document.getElementById('generatedNumber').value = RndInteger;
// }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomAmount(min, max) {
  return Math.random() * (max - min) + min;
}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function generateRandomNumber(selectorId) {
  let number = parseFloat(getRandomAmount(0, 250000).toFixed(2));
  let number1 = numberWithCommas(number);
  document.getElementById(selectorId).value = number1;
}

//! Functions for random numbers and characters

function generateCharacter(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateNumber(length) {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// 1, i, l, 0, o removed (incl. caps) to avoid confusion between each other

function generateMixed(length) {
  var result = "";
  var characters = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//! Password Generator

function assignPassword() {
  const password = generateMixed(12);
  document.getElementById("generatedPassword").value = password;
}

//! Chained Password

function assignApplePass() {
  const password1 = generateMixed(5);
  const password2 = generateMixed(5);
  const password3 = generateMixed(5);
  const applePass = password1 + "-" + password2 + "-" + password3;
  document.getElementById("applePass").value = applePass;
}

//! Address Generator

function getStreetPrefix(streetPrefix) {
  const streetPrefix1 = streetPrefix;
  return Math.floor(Math.random() * streetPrefix1.length);
}

function getStreetName(streetNames) {
  const streetNames1 = streetNames;
  return Math.floor(Math.random() * streetNames1.length);
}

function getTown(towns) {
  const towns1 = towns;
  return Math.floor(Math.random() * towns1.length);
}

// Onlick function
function generateAddress() {
  const towns = [
    "Avon",
    "Bedfordshire",
    "Berkshire",
    "Buckinghamshire",
    "Cambridgeshire",
    "Cheshire",
    "Cleveland",
    "Cornwall",
    "Cumbria",
    "Derbyshire",
    "Devon",
    "Dorset",
    "Durham",
    "East-Sussex",
    "Essex",
    "Gloucestershire",
    "Hampshire",
    "Herefordshire",
    "Hertfordshire",
    "Isle-of-Wight",
    "Kent",
    "Lancashire",
    "Leicestershire",
    "Lincolnshire",
    "London",
    "Merseyside",
    "Middlesex",
    "Norfolk",
    "Northamptonshire",
    "Northumberland",
    "North-Humberside",
    "North-Yorkshire",
    "Nottinghamshire",
    "Oxfordshire",
    "Rutland",
    "Shropshire",
    "Somerset",
    "South-Humberside",
    "South-Yorkshire",
    "Staffordshire",
    "Suffolk",
    "Surrey",
    "Tyne-and-Wear",
    "Warwickshire",
    "West-Midlands",
    "West-Sussex",
    "West-Yorkshire",
    "Wiltshire",
    "Worcestershire",
    "Avon",
    "Bedfordshire",
    "Berkshire",
    "Buckinghamshire",
    "Cambridgeshire",
    "Cheshire",
    "Cleveland",
    "Cornwall",
    "Cumbria",
    "Derbyshire",
    "Devon",
    "Dorset",
    "Durham",
    "East Sussex",
    "Essex",
    "Gloucestershire",
    "Hampshire",
    "Herefordshire",
    "Hertfordshire",
    "Isle of Wight",
    "Kent",
    "Lancashire",
    "Leicestershire",
    "Lincolnshire",
    "London",
    "Merseyside",
    "Middlesex",
    "Norfolk",
    "Northamptonshire",
    "Northumberland",
    "North Humberside",
    "North Yorkshire",
    "Nottinghamshire",
    "Oxfordshire",
    "Rutland",
    "Shropshire",
    "Somerset",
    "South Humberside",
    "South Yorkshire",
    "Staffordshire",
    "Suffolk",
    "Surrey",
    "Tyne and Wear",
    "Warwickshire",
    "West Midlands",
    "West Sussex",
    "West Yorkshire",
    "Wiltshire",
    "Worcestershire",
    "Clwyd",
    "Dyfed",
    "Gwent",
    "Gwynedd",
    "Mid-Glamorgan",
    "Powys",
    "South-Glamorgan",
    "West-Glamorgan",
    "Clwyd",
    "Dyfed",
    "Gwent",
    "Gwynedd",
    "Mid Glamorgan",
    "Powys",
    "South Glamorgan",
    "West Glamorgan",
    "Aberdeenshire",
    "Angus",
    "Argyll",
    "Ayrshire",
    "Banffshire",
    "Berwickshire",
    "Bute",
    "Caithness",
    "Clackmannanshire",
    "Dumfriesshire",
    "Dunbartonshire",
    "East-Lothian",
    "Fife",
    "Inverness-shire",
    "Kincardineshire",
    "Kinross-shire",
    "Kirkcudbrightshire",
    "Lanarkshire",
    "Midlothian",
    "Moray",
    "Nairnshire",
    "Orkney",
    "Peeblesshire",
    "Perthshire",
    "Renfrewshire",
    "Ross-shire",
    "Roxburghshire",
    "Selkirkshire",
    "Shetland",
    "Stirlingshire",
    "Sutherland",
    "West Lothian",
    "Wigtownshire",
    "Aberdeenshire",
    "Angus",
    "Argyll",
    "Ayrshire",
    "Banffshire",
    "Berwickshire",
    "Bute",
    "Caithness",
    "Clackmannanshire",
    "Dumfriesshire",
    "Dunbartonshire",
    "East Lothian",
    "Fife",
    "Inverness-shire",
    "Kincardineshire",
    "Kinross-shire",
    "Kirkcudbrightshire",
    "Lanarkshire",
    "Midlothian",
    "Moray",
    "Nairnshire",
    "Orkney",
    "Peeblesshire",
    "Perthshire",
    "Renfrewshire",
    "Ross-shire",
    "Roxburghshire",
    "Selkirkshire",
    "Shetland",
    "Stirlingshire",
    "Sutherland",
    "West Lothian",
    "Wigtownshire",
    "Antrim",
    "Armagh",
    "Down",
    "Fermanagh",
    "Londonderry",
    "Tyrone",
  ];
  const streetNames = [
    "Road",
    "Lane",
    "Avenue",
    "Boulevard",
    "Street",
    "Grove",
    "Crescent",
  ];
  const streetPrefix = [
    "Oak",
    "Birch",
    "Willow",
    "Beech",
    "Spruce",
    "Walnut",
    "Cherry",
    "Maple",
    "Alder",
    "Ash",
    "Aspen",
    "Cedar",
    "Elm",
    "Hawthorn",
    "Hemlock",
    "Hornbeam",
    "Juniper",
    "Lime",
    "Pine",
    "Sycamore",
    "Whitebeam",
    "Yew",
    "High",
    "Church",
    "Park",
    "Main",
    "Queens",
    "Kings",
    "Grange",
    "New",
    "Mill",
    "North",
    "East",
    "South",
    "West",
  ];
  const generatedNumber = getRandomInt(1000);
  const generatedStreetPrefix = getStreetPrefix(streetPrefix);
  const generatedStreetName = getStreetName(streetNames);
  const generatedTown = getTown(towns);
  const generatedPostcode1 = generateCharacter(2);
  const generatedPostcode2 = generateNumber(2);
  const generatedPostcode3 = generateNumber(1);
  const generatedPostcode4 = generateCharacter(2);
  const fullPostcode =
    generatedPostcode1 +
    generatedPostcode2 +
    " " +
    generatedPostcode3 +
    generatedPostcode4;
  document.getElementById("address").value =
    generatedNumber +
    " " +
    streetPrefix[generatedStreetPrefix] +
    " " +
    streetNames[generatedStreetName] +
    ", " +
    towns[generatedTown] +
    ", " +
    fullPostcode;
}

//! Payment type

function generatePaymentType(selectorId) {
  const paymentTypes = [
    "Cheque",
    "CHAPS",
    "BACS",
    "Next Day BACS",
    "Faster Payments",
    "Petty Cash",
    "Credit Card",
    "Debit Card",
  ];
  getPaymentTypes = Math.floor(Math.random() * paymentTypes.length);
  let generatedPaymentTypes = paymentTypes[getPaymentTypes];
  document.getElementById(selectorId).value = generatedPaymentTypes;
}

//! Mobile Number Generator

function generateMobile() {
  const mobileNumber = "0770 090 0" + generateNumber(3);
  document.getElementById("mobile").value = mobileNumber;
}

//! Generate sort code

// function generateSortCode() {
//     let sortcode1 = generateNumber(6);
//     document.getElementById("sortCode").value = sortcode1;
// }

function formatSortCode(str) {
  return (String(str).match(/.{1,2}/g) || []).join("-");
}

formatSortCode(123456789);

function generateSortCode(id) {
  let sortcode2 = generateNumber(6);
  let sortcode3 = formatSortCode(sortcode2);
  document.getElementById(id).value = sortcode3;
}

//! Generate account number

function generateAccountNumber(id) {
  const accountnumber1 = generateNumber(4);
  const accountnumber2 = generateNumber(4);
  document.getElementById(id).value =
    accountnumber1 + " " + accountnumber2;
}

//! Banks

function generateBank(selectorId) {
  const banks = [
    "Bank of Scotland",
    "Halifax",
    "Lloyds",
    "Royal Bank of Scotland",
    "NatWest",
    "HSBC",
    "Barclays",
    "Clydesdale",
    "Virgin Money",
    "Santander",
    "Nationwide Building Society",
    "Bank of Ireland",
    "Metro Bank",
    "TSB Bank",
    "Starling",
    "Monzo",
    "Tide",
    "Yorkshire Building Society",
    "Bank of Ireland",
    "Accord Mortgages",
    "First Direct",
    "Sainsbury's Bank",
    "Scottish Building Society",
    "Tesco Bank",
    "The Co-operative Bank",
    "Couttes & Co",
    "Coventry Building Society",
    "M&S Bank",
    "Aldermore",
    "Atom Bank",
    "Skipton Building Society",
    "The Post Office",
    "L&C",
    "Leeds Building Society",
    "Newcastle Building Society",
    "Danske Bank",
    "Coventry Building Society",
    "Investec Specialist Bank",
    "Masthaven Bank",
    "Shawbrook Bank",
    "Handelsbanken",
  ];
  getBanks = Math.floor(Math.random() * banks.length);
  let generatedBank = banks[getBanks];
  document.getElementById(selectorId).value = generatedBank;
}

//! IBAN

// function generateIban() {
//     const countryCode = generateCharacter(2);
//     const checkDigits = generateNumber(2);
//     const bban = generateCharacter(4) + generateNumber(6) + generateNumber(8);
//     document.getElementById("iban").value = countryCode + checkDigits + bban;
// }

const countryCode = [
  "AF",
  "AL",
  "DZ",
  "AS",
  "AD",
  "AO",
  "AI",
  "AQ",
  "AG",
  "AR",
  "AM",
  "AW",
  "AU",
  "AT",
  "AZ",
  "BS",
  "BH",
  "BD",
  "BB",
  "BY",
  "BE",
  "BZ",
  "BJ",
  "BM",
  "BT",
  "BO",
  "BQ",
  "BA",
  "BW",
  "BV",
  "BR",
  "IO",
  "BN",
  "BG",
  "BF",
  "BI",
  "CV",
  "KH",
  "CM",
  "CA",
  "KY",
  "CF",
  "TD",
  "CL",
  "CN",
  "CX",
  "CC",
  "CO",
  "KM",
  "CD",
  "CG",
  "CK",
  "CR",
  "HR",
  "CU",
  "CW",
  "CY",
  "CZ",
  "CI",
  "DK",
  "DJ",
  "DM",
  "DO",
  "EC",
  "EG",
  "SV",
  "GQ",
  "ER",
  "EE",
  "SZ",
  "ET",
  "FK",
  "FO",
  "FJ",
  "FI",
  "FR",
  "GF",
  "PF",
  "TF",
  "GA",
  "GM",
  "GE",
  "DE",
  "GH",
  "GI",
  "GR",
  "GL",
  "GD",
  "GP",
  "GU",
  "GT",
  "GG",
  "GN",
  "GW",
  "GY",
  "HT",
  "HM",
  "VA",
  "HN",
  "HK",
  "HU",
  "IS",
  "IN",
  "ID",
  "IR",
  "IQ",
  "IE",
  "IM",
  "IL",
  "IT",
  "JM",
  "JP",
  "JE",
  "JO",
  "KZ",
  "KE",
  "KI",
  "KP",
  "KR",
  "KW",
  "KG",
  "LA",
  "LV",
  "LB",
  "LS",
  "LR",
  "LY",
  "LI",
  "LT",
  "LU",
  "MO",
  "MG",
  "MW",
  "MY",
  "MV",
  "ML",
  "MT",
  "MH",
  "MQ",
  "MR",
  "MU",
  "YT",
  "MX",
  "FM",
  "MD",
  "MC",
  "MN",
  "ME",
  "MS",
  "MA",
  "MZ",
  "MM",
  "NA",
  "NR",
  "NP",
  "NL",
  "NC",
  "NZ",
  "NI",
  "NE",
  "NG",
  "NU",
  "NF",
  "MP",
  "NO",
  "OM",
  "PK",
  "PW",
  "PS",
  "PA",
  "PG",
  "PY",
  "PE",
  "PH",
  "PN",
  "PL",
  "PT",
  "PR",
  "QA",
  "MK",
  "RO",
  "RU",
  "RW",
  "RE",
  "BL",
  "SH",
  "KN",
  "LC",
  "MF",
  "PM",
  "VC",
  "WS",
  "SM",
  "ST",
  "SA",
  "SN",
  "RS",
  "SC",
  "SL",
  "SG",
  "SX",
  "SK",
  "SI",
  "SB",
  "SO",
  "ZA",
  "GS",
  "SS",
  "ES",
  "LK",
  "SD",
  "SR",
  "SJ",
  "SE",
  "CH",
  "SY",
  "TW",
  "TJ",
  "TZ",
  "TH",
  "TL",
  "TG",
  "TK",
  "TO",
  "TT",
  "TN",
  "TR",
  "TM",
  "TC",
  "TV",
  "UG",
  "UA",
  "AE",
  "GB",
  "UM",
  "US",
  "UY",
  "UZ",
  "VU",
  "VE",
  "VN",
  "VG",
  "VI",
  "WF",
  "EH",
  "YE",
  "ZM",
  "ZW",
  "AX",
];

const bankCode = [
  "AIBK",
  "ALDB",
  "ATMB",
  "BOFS",
  "BARC",
  "HOAB",
  "CLRB",
  "CLYD",
  "CPBK",
  "COUT",
  "GOLD",
  "HLFX",
  "MIDL",
  "CHAS",
  "LOYD",
  "MYMB",
  "MONZ",
  "NWBK",
  "REVO",
  "RBSS",
  "SANB",
  "ABBY",
  "SWIB",
  "WWLL",
  "SRLG",
  "TANM",
  "TSBS",
  "ULSB",
  "NRNB",
  "YORK",
];

// NEW RANDOM NUMBER TEST

const randomArrayInRange = (min, max, n) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

// Example
randomArrayInRange(10, 99, 1); // Output 1 number between 10 - 99

function generateIban() {
  const countryCode = "GB";
  const checkDigits = randomArrayInRange(10, 99, 1);
  const bankCode1 = Math.floor(Math.random() * bankCode.length);
  const generatedBankCode = bankCode[bankCode1];
  const sortCode = randomArrayInRange(100000, 999999, 1);
  const accountNumber = randomArrayInRange(10000000, 99999999, 1);
  document.getElementById("iban").value =
    countryCode + checkDigits + generatedBankCode + sortCode + accountNumber;
}

//! SWIFT

function generateSwift() {
  const bankCode = generateCharacter(4);
  const countryCode = generateNumber(2);
  const locationCode = generateCharacter(2);
  const branchCode = generateCharacter(2);
  document.getElementById("swiftCode").value =
    bankCode + countryCode + locationCode + branchCode;
}

//? Deleted these?
const newArray = surname.sort();

//! Work type

function generateWorkType(selectorId) {
  const workType = [
    "Company Incorporation",
    "Contracts",
    "Corporate Services",
    "Governance",
    "Insolvencies",
    "Mergers & Acquisitions",
    "Partnerships",
    "Purchase of Business & Franchise",
    "Sale of Business & Franchise",
    "Commercial Lease",
    "Commercial Purchase",
    "Commercial Sale",
    "Commercial Transfer",
    "Planning & Development",
    "Refinance",
    "Buy to Let",
    "New Build Purchase",
    "New Build Sale",
    "Purchase",
    "Registration",
    "Remortgage",
    "Sale",
    "Tenancy",
    "Transfer",
    "High Court",
    "Justice of the Peace Court",
    "Post-Conviction Case",
    "Potential Case",
    "Sheriff Appeal Court",
    "Sheriff Court (Solemn)",
    "Sheriff Court (Summary)",
    "Employment",
    "Estate Dispute",
    "Executry",
    "Children - Adoption",
    "Children - Child Care",
    "Children - Private Child Proceeding",
    "Family",
    "Financial",
    "Divorce & Dissolution",
    "Pre & Post Nuptial Agreements",
    "Mediation",
    "Appeal",
    "Asylum",
    "Entry Clearence",
    "Immigration",
    "Leave to Remain",
    "Nationality",
    "Copyright",
    "Intellectual Property General",
    "Patents",
    "Trade Marks",
    "Debt Recovery",
    "Litigation",
    "Ordinary Cause",
    "Property Disputes",
    "Simple Procedure",
    "Summary Cause",
    "Bankruptcy",
    "Civil Proceedings",
    "Consuler General",
    "Eduction",
    "Entertainment and Media Law",
    "Generic",
    "Housing",
    "Licensing",
    "Mental Health",
    "Clinical Negligence",
    "Personal Injury",
    "Road Traffic Accident",
    "Accounting",
    "Advice",
    "General",
    "Miscellaneous",
    "Management of Affairs",
    "Power of Attorney",
    "Trusts",
    "Wills",
    "Wills & Power of Attorney",
  ];
  let getworkType = Math.floor(Math.random() * workType.length);
  let generatedworkType = workType[getworkType];
  document.getElementById(selectorId).value = generatedworkType;
}

// ! UUID Generator

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function generateUUID() {
  generatedUUID = uuidv4();
  document.getElementById("uuid").value = generatedUUID;
}

function generateMixed(length) {
  var result = "";
  var characters = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// ! Password Generator

function generatePassword() {
  const password1 = generateMixed(5);
  const password2 = generateMixed(5);
  const password3 = generateMixed(5);
  const applePass = password1 + "-" + password2 + "-" + password3;
  document.getElementById("password").value = applePass;
}

// ! Landlines

// ! copyToClipboard function

// function copyToClipboard(id) {
//     var copyText = document.getElementById(id);
//     var textArea = document.createElement("textarea");
//     textArea.value = copyText.textContent;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("Copy");
//     textArea.remove();
// }

function copyToClipboard(id) {
  var copyText = document.getElementById(id);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

// ! New navbar logic

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}

// ? Not in use

// ! Event Listeners
// toggle.addEventListener("click", toggleMenu, false);
// for (let item of items) {
//   if (item.querySelector(".submenu")) {
//     item.addEventListener("click", toggleItem, false);
//   }
//   item.addEventListener("keypress", toggleItem, false);
// }

// document.addEventListener("click", closeSubmenu, false);

// ! Store & Retrieve themes in local storage

// Select the button
//const btn = document.querySelector(".btn-toggle");
// Select the theme preference from localStorage
//const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
//if (currentTheme == "dark") {
// ...then use the .dark-theme class
//document.body.classList.add("dark-theme");
//}

// Listen for a click on the button
//btn.addEventListener("click", function() {
// Toggle the .dark-theme class on each click
//document.body.classList.toggle("dark-theme");

// Let's say the theme is equal to light
//let theme = "light";
// If the body contains the .dark-theme class...
//if (document.body.classList.contains("dark-theme")) {
// ...then let's make the theme dark
//theme = "dark";
//}
// Then save the choice in localStorage
//localStorage.setItem("theme", theme);
//});

// ! Old navbar logic

// function updatePageName() {
//     let text = document.getElementById("active").innerHTML;
//     document.getElementById("pagename").textContent = text;
// }

// updatePageName();

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// custom length name functions

let maleNames1 = maleNames.filter((maleNames) => maleNames.length > 2);
let maleNames2 = maleNames1.filter((maleNames1) => maleNames1.length < 4);
console.log("maleName:", maleNames2);

let femaleNames1 = femaleNames.filter((femaleNames) => femaleNames.length > 4);
let femaleNames2 = femaleNames1.filter(
  (femaleNames1) => femaleNames1.length < 6
);
console.log("femaleName:", femaleNames2);

let surname1 = surname.filter((surname) => surname.length > 7);
let surname2 = surname1.filter((surname1) => surname1.length < 9);
console.log("surname:", surname2);
