const XLSX = require('xlsx');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

class FileService {

    static readEmployees(filePath) {

        const workbook = XLSX.readFile(filePath);

        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        const rows = XLSX.utils.sheet_to_json(sheet);

        return rows;
    }

    static async writeAssignments(filePath, assignments) {

        const writer = createCsvWriter({
            path: filePath,
            header: [
                {id:'Employee_Name', title:'Employee_Name'},
                {id:'Employee_EmailID', title:'Employee_EmailID'},
                {id:'Secret_Child_Name', title:'Secret_Child_Name'},
                {id:'Secret_Child_EmailID', title:'Secret_Child_EmailID'}
            ]
        });

        await writer.writeRecords(assignments);
    }
}

module.exports = FileService;