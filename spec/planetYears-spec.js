When a user submits their birthday, calculate their age.
  example input: 2000, 01(month), 01(day)
  example output: newAge = 19, //5 months, 6 days; try not to use



When a user submits their age, return their age in mercuryYears
  example input: 50
  example output: (50/.24)=208.3 in mercuryYears

When a user submits their age, return their age in venusYears
  example input: 21
  example output: (21/.62)=33.87 in venusYears

When a user submits their age, return their age in marsYears
  example input: 21
  example output: (21/1.88)=11.17 in marsYears

When a user submits their age, return their age in jupiterYears
  example input: 50
  example output: (50/11.86)=4.21 in jupiterYears

I'm going to use 80 as my life expectancy to reduce complexity.

When user submits their age, return their age in planetYears
  example input: 50
  example mercury output: (50/.24)=208.3
  and also return planetLife - planetYears = yearsLeft
  example mercuryLife = 333.3
  example timeLeft:(333.3-208.3)= 125 mercury yearsLeft.

When yearsLeft is a negative congradulate them and return the absolute value of yearsLeft back in a string.
  example input: 100
  example jupiter output: (100/11.86)=8.431 in jupiterYears
  jumpiterLife = 6.745
  jupiter timeLeft = (6.745-8.431)= -1.686
  example string: "Well done, you've lived " + Math.abs(timeLeft) + "longer than average!"
