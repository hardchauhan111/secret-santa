class Validator {

    static validateEmployees(data) {

        if (!data || data.length === 0) {
            throw new Error("Employee file is empty");
        }

        data.forEach(emp => {

            if (!emp.Employee_Name || !emp.Employee_EmailID) {
                throw new Error("Invalid employee record");
            }

        });
    }
}

module.exports = Validator;