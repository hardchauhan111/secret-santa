class SecretSantaService {

    constructor(employees) {
        this.employees = employees;
    }

    shuffle(array) {

        for (let i = array.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    generateAssignments() {

        let children = [...this.employees];

        let valid = false;

        while (!valid) {

            this.shuffle(children);

            valid = true;

            for (let i = 0; i < this.employees.length; i++) {

                if (this.employees[i].email === children[i].email) {

                    valid = false;

                    break;
                }
            }
        }

        const result = [];

        for (let i = 0; i < this.employees.length; i++) {

            result.push({
                Employee_Name: this.employees[i].name,
                Employee_EmailID: this.employees[i].email,
                Secret_Child_Name: children[i].name,
                Secret_Child_EmailID: children[i].email
            });
        }

        return result;
    }
}

module.exports = SecretSantaService;