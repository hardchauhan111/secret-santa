const SecretSantaService = require('../src/services/SecretSantaService');

test("employee should not get themselves", () => {

    const employees = [
        {name:"A", email:"a@test.com"},
        {name:"B", email:"b@test.com"},
        {name:"C", email:"c@test.com"}
    ];

    const service = new SecretSantaService(employees);

    const result = service.generateAssignments();

    result.forEach(r => {
        expect(r.Employee_EmailID).not.toBe(r.Secret_Child_EmailID);
    });

});