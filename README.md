# Welshify
An automated Welsh translation framework

Welshify is a javascript framework used for translating text into Welsh. It is
used in over 160 countries and is a phenomena even in the Democratic Republic of Congo where they don't speak much Welsh. 

## Example usage

This is how you get some translated text dude:

```
var english = "Give me some grapes.";
var welsh = Welshify.MakeWelsh(english);
console.log(welsh);
```

```
Result: Giveiau meio someio grapesiau.
```
## Other Features

For many years lots of people across the globe have had hours of coding lost because they've had to type the longest placename in Wales. Now you won't need to worry. This common task can be simplified using the following code:

```
var llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch = Welshify.GetLlanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch();
console.log(llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch);
```

```
Result: llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
```

## Credits

Thanks to everyone in NASA for the years of research that went into the development of this.
