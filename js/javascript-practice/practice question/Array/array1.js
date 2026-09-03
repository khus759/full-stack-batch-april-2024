const rainbowColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
console.log(
    "Rainbow Colors :", rainbowColors.join("+ ")
)
rainbowColors[0] = "Pink" // adding pink
console.log("add in rainbow :", rainbowColors)
rainbowColors.length = 5 // removing last two colors
console.log("remove last two colors :", rainbowColors)
rainbowColors[rainbowColors.length] = "Pritam" // adding purple at the end
rainbowColors[rainbowColors.length] = "Priyanshu" // adding purple at the end
console.log("add two more colors :", rainbowColors)

rainbowColors.push = ("kaju katli",null,undefined) // adding kaju katli in last
console.log("add kaju katli :", rainbowColors)
rainbowColors.reverse()
console.log("reverse rainbow colors :", rainbowColors)