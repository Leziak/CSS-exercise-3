const formula = (pay, hours, days) => {
    return pay * hours * days;
}

const taxedSalary = (tax,salary) => salary*(1-tax);

const compute = () => {
    let mypay = document.getElementById('pay'), 
    myhours = document.getElementById('hours'), 
    mydays = document.getElementById('days'),
    student = document.getElementById('student'),
    result = parseInt(mypay.value) * parseInt(mydays.value) * parseInt(myhours.value)

    student.checked ? alert(result * 0.85) : alert(result * 0.75); 
    document.getElementById('output').innerHTML = student.checked ? result * 0.85 : result * 0.75;
    mypay.value = '', myhours.value = '', mydays.value = '';
}

