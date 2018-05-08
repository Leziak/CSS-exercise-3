const formula = (pay, hours, days) => {
    return pay * hours * days;
}

const taxedSalary = (tax,salary) => salary*(1-tax);

const compute = () => {
    let mypay = document.getElementById('pay'), 
    myhours = document.getElementById('hours'), 
    mydays = document.getElementById('days'),
    student = document.getElementById('student'),
    result = parseInt(mypay.value) * parseInt(mydays.value) * parseInt(myhours.value);

    if(student.value==='' || myhours.value==='' || mydays.value==='') {
        alert('Fill out all the fields!');
        return;
    }
    
    document.getElementById('output').innerHTML = `Your monthly salary is ${student.checked ? result * 0.85 : result * 0.75} dollars.`;

    mypay.value = '', myhours.value = '', mydays.value = '';
}

