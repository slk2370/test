// // Your project has a service which calculates a risk score based on entered parameters, using an API POST request to submit the desired data. The service will accept both single or multiple queries (tests) in the same request as seen in the example below. The service expects the following JSON request format:

// // {
// //   "risk_analysis_request": [
// //     {
// //       "test": {
// //         "company_id": 1,
// //         "company_name": "",
// //         "company_size": 1,
// //         "target_industries": [""],
// //         "target_region_id": ""
// //       }
// //     }
// //   ]
// // }
// // Using the provided information, write a Python (or language of your choice) function to create a sample of 20 test cases from a mix of the provided variables and your generated values. It should print out the resulting JSON request to be used in your testing. The test cases should include tests covering the following specific situations:

// // A construction company looking to enter the South African market with 800 employees.
// // An Information Services company investigating potential risks in entering this market, as well as Printing and Publishing, in the Americas. They have 100 employees.
// // Request Format Details
// // test : A dictionary with one key (“request_1” e.g.) with the value being a dictionary containing query data.

// // company_id : 6 digit numeric unique identifier for the test company

// // company_name : Alpha-numeric value

// // company_size : 1 digit numeric value from the provided “company_sizes” dictionary. This size ranking is determined by the number of employees.

// // Size	Number of Employees
// // Small	<100
// // Medium	100-500
// // Large	501-5000
// // Global	>5000
// // target_industries : list (length of 1 or 2) of strings which should come from provided “industries” list

// // target_region_id : 3 character length alpha-numeric value from the provided “region_codes” dictionary

// // industries = ["Business Services", "Communications", "Computer Hardware"]
// const region_codes = {"Australia": "A1", "Oceania": "A3" , "East Asia": "B5"};


// // company_sizes = {"Small": 1, "Medium": 2, "Large": 3, "Global": 4}
// // For example:
// // {"risk_analysis_request": [
// //   {
// //     "request_1": {
// //       "company_id": 344128,
// //       "company_name": "TestCompany_1",
// //       "company_size": 3,
// //       "target_industries": [
// //         "Retail",
// //         "Wholesale"
// //       ],
// //       "target_region_id": "E91"
// //     }
// //   },
// //   {
// //     "request_2": {
// //       "company_id": 847114,
// //       "company_name": "TestCompany_2",
// //       "company_size": 1,
// //       "target_industries": [
// //         "Printing and Publishing"
// //       ],
// //       "target_region_id": "F57"
// //     }
// //   }
// //   ]
// // }
// // Start Call
// // Mikhail Efimov

let industries = ["Business Services", "Communications", "Computer Hardware", "Computer Software", "Construction", "Food and Tobacco Manufacturing", "Information Services", "Mining and Extraction", "Printing and Publishing", "Retail", "Travel", "Utilities", "Wholesale"]
let region_codes = {"Australia": "A1", "Oceania": "A3" , "East Asia": "B5", "South Asia": "B15", "North Africa": "C8", "Central Africa": "C32", "South Africa": "C38", "Middle East": "D29", "East Europe": "E91", "West Europe": "E33", "North America": "F53", "Central America": "F57", "South America": "F62"}
let companySize = {"Small": 1, "Medium": 2, "Large": 3, "Global": 4}
let n = 20

function num(n){
           return Math.floor(Math.random()*n).toString()
        }

function companySizeGenerator(numberOfPeople){     
        if (numberOfPeople < 100){
            return companySize.Small
        }
        else if (100 <= numberOfPeople && numberOfPeople < 500){
            return companySize.Medium
        }
        else if (500 <= numberOfPeople && numberOfPeople < 5000){
            return companySize.Large

        } else if(5000 <= numberOfPeople){
            return companySize.Global
        }else{
            return error 
        }    
    }

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
     return (arr.splice(randomIndex, 1)[0])
}

function pickRandomValue(obj) {
    const values = Object.values(obj);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }

function testDataGenerator(){
    let a = {}
    let riskAnalysisRequest = []
    for(let i = 1; i <= 20; i++){
    let testData = {
                "company_id": num(1000000),
                "company_name": i+'_company',
                "company_size": companySizeGenerator(num(6000)),
                "target_industries": industries[num(industries.length)],
                "target_region_id":  pickRandomValue(region_codes)
              }
    riskAnalysisRequest['request_'+i] = testData
}
a["riskAnalysisRequest"] = riskAnalysisRequest
return a
}

console.log(testDataGenerator())
