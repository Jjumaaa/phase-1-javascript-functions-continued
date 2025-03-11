// code your solution here

let saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = (flair = "*") => {
    return (adjective = "a hard worker") => {
        return `You are ${flair}${adjective}${flair}!`
    }
}