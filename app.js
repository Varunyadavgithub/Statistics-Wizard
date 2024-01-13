function calculate(type) {
    let input = document.getElementById('numbers').value;
    let numbers = input.split(',').map(function(item) {
        return parseFloat(item);
    });

    if (numbers.length === 0 || isNaN(numbers[0])) {
        let output=document.getElementById('result')
        output.innerText = 'Please enter valid numbers !';
        return;
    }

    
    let result;
    if(type==='mean'){
        result=`Mean is: ${calculateMean(numbers).toFixed(2)}`;
    }
    else if(type==='median'){
        result=`Median is: ${calculateMedian(numbers)}`;
    }
    else if(type==='mode'){
        result=`Mode is: ${calculateMode(numbers).join(', ')} not possible to this dataset.`;
    }

    document.getElementById('result').innerText = result;
}

// function to find the Mean of given data...
function calculateMean(numbers) {
    const sum = numbers.reduce((a,b)=>a+b,0)
    return sum/numbers.length;
}

// function to find the Median of given data...
function calculateMedian(numbers) {
    const sorted = numbers.sort((a,b)=>a-b);
    if(sorted.length % 2 === 0){
        return (sorted[sorted.length/2-1]+sorted[sorted.length/2])/2;
    }
    else{
        return sorted[Math.floor(sorted.length/2)];
    }
}

// function to find the Mode of given data...
function calculateMode(numbers) {
    const frequencyTable = {};
    numbers.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);
    let modes = [];
    let maxFrequency = 0;
    for(const key in frequencyTable){
        if(frequencyTable[key] > maxFrequency){
            modes=[Number(key)];
            maxFrequency=frequencyTable[key];
        }
        else if(frequencyTable[key] === maxFrequency){
            modes.push(Number(key));
        }
    }
    if(modes.length === Object.keys(frequencyTable).length)modes=[];
    return modes;
}
