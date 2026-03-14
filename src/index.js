const FileService = require('./services/FileService');
const SecretSantaService = require('./services/SecretSantaService');
const Employee = require('./models/Employee');
const Validator = require('./utils/Validator');

async function main() {

    try {

        const rawEmployees = FileService.readEmployees('./data/Employee-List.xlsx');

        Validator.validateEmployees(rawEmployees);

        const employees = rawEmployees.map(e =>
            new Employee(e.Employee_Name, e.Employee_EmailID)
        );

        const santaService = new SecretSantaService(employees);

        const assignments = santaService.generateAssignments();

        await FileService.writeAssignments('./data/secret_santa_output.csv', assignments);

        console.log("Secret Santa assignments created!");

    }
    catch(error) {

        console.error("Error:", error.message);

    }

}

main();