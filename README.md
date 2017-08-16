# Welshify
An automated Welsh translation framework

Welshify is a javascript framework used for translating text into Welsh. It is
used in over 160 countries and is the result of many years of research conducted by NASA. 

## Example usage

This is how you get some translated text:

```
var english = "Give me some grapes.";
var welsh = Welshify.MakeWelsh(english);
console.log(welsh);
```

```
Result: Giveiau meio someio grapesiau.
```

### Another example

```
var english = "Excuse me. Can you help me find the nearest restaurant?";
var welsh = Welshify.MakeWelsh(english);
console.log(welsh);
```

```
Result: Excuseio meiau. Canio youiau helpiau meiau findio theiau nearestio restaurantiau?
```

You can see how english is translated seamlessly into Welsh and it's instant. You will not have to wait until the following working day for translation to occur.


## Other Features

### Longest placename 

For many years lots of people across the globe have had hours of coding lost because they've had to type the longest placename in Wales. Now you won't need to worry. This common task can be simplified using the following code:

```
var llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch = Welshify.GetLlanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch();
console.log(llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch);
```

```
Result: llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
```

### The Roof (circumflex)

Now the roof can be added to a string and it's brilliant. The best thing is it can be used in conjunction with the Welshify feature. Example usage:

```
var english = "Give me some grapes.";
var welsh = Welshify.MakeWelsh(english) + Welshify.GetRoofio();
console.log(welsh);
```

```
Result: Give me some grapes.^
```
You can see the roof has been added to the end of the word, much like the 
Welsh language does.

### Get Country

Now countries have their Welsh equivalent, in Welsh. Welshify has made each country more Welshy, thanks to Welshify's unique Welsh translation. It's Welsh! 

Here's how it works.

```
var country = Welshify.GetCountry(73);
console.log(country);
```

```
Result: Franceiau
```

All you need to do is put a number inside the Welshify.GetCountry() method and Welshify will give you the 73rd country in the list of countries, whatever that is.

### Get Day

Welshify offers tremendous day translation capabilities and it's better than onion gravy. Here's how it works.

```
var dayTranslate = Days.Get1stOfJanuary();
console.log(dayTranslate);
```

```
Result: 1stiau Januaryio
```

### Exception Handling

Each Welshify feature now returns a 'Wexpection' which, of course, has been Welshifyed.

The error below is returned when a country cannot be found in the list.

```
Error: ah there we are then!
```


## Credits

Thanks to everyone in NASA for the years of research that went into the development of this.
