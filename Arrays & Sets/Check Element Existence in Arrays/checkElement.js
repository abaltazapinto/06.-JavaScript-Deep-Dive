const temperatures = [69, 82, 73, 64]; // isRecordTemp  ???

console.log(temperatures.indexOf(82))
console.log(temperatures.indexOf(50))
console.log(temperatures.indexOf(50) > -1)
console.log(temperatures.includes(50))


const temperatures1 =[
    {degrees: 69, isrecordTemp:false},
    {degrees: 82,isrecordTemp:true},
    {degrees: 73, isrecordTemp:false},
    {degrees: 64,isrecordTemp:false}
    ]

console.log(temperatures1.some(temperature => temperature.isrecordTemp === true ))


console.log(temperatures1.every(temperature => temperature.isrecordTemp))