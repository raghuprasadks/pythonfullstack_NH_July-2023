/**
employees=
[
{
    code:1,
    name:'ravi',
    dept:'IT',
    sal:383838
},
{
    code:2,
    name:'ramya',
    dept:'IT',
    sal:383838
},
{
    code:3,
    name:'rohit',
    dept:'Accounts',
    sal:383839
}
]

//console.log(employee)
//console.log("dept" ,employee.dept)

for (i=0;i<employees.length;i++){
    //console.log(employees[i])
    if (employees[i].dept=='IT')
        console.log(employees[i])
}
 */
employees=[]
console.log('Object constructure')
function employee(code,name,dept,sal){
    this.code =code
    this.name = name
    this.dept = dept
    this.sal = sal
    this.info = function(){
        console.log("Code - ",this.code," name - ",this.name)
    }
}

emp1 = new employee(1,'akash','IT',39393)
emp2 = new employee(2,'kruti','HR',29393)
emp3 = new employee(3,'smitha','Accounts',59393)

employees.push(emp1)
employees.push(emp2)
employees.push(emp3)

console.log("new employees ",employees)

for (i=0;i<employees.length;i++){
    emp = employees[i]
    console.log(emp.info())
}