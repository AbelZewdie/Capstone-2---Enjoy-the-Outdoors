# `ABEL HORIZONS` | Where wanderlust meets discovery!

## Home Page | `First Slide`
* Stunning visuals showcasing a variety of travel destinations immediately capture **attention and inspire wanderlust**. <hr>

<img alt="Home Page" width=100% src="../Capstone 2 - Enjoy the Outdoors/screenshots/mainPage1.png">

## Home Page | `Second Slide`
* A **well-organized layout** with clear navigation makes it easy for visitors to find what they're looking for and keeps them engaged. <hr>
<img alt="Home Page" width=100% src="../Capstone 2 - Enjoy the Outdoors/screenshots/mainPage2.png">

## Home Page | `Third Slide`
* Color scheme and fonts that evoke a sense of **adventure**, **relaxation**, or **luxury** depending on your target audience. <hr>
<img alt="Home Page" width=100% src="../Capstone 2 - Enjoy the Outdoors/screenshots/mainPage3.png">

## Mountain Page | `Mountain Search`
* Dive into our comprehensive search for the perfect mountain adventure. Find hiking trails, ski slopes, scenic viewpoints, and mountain towns - **all tailored to your skill level and interests.** <hr>
<img alt="Home Page" width=100% src="../Capstone 2 - Enjoy the Outdoors/screenshots/mountainPage.png">

## Parks Page | `Parks Search`
* Find the perfect park for a day of family adventure. Search for parks with **playgrounds**, **splash pads**, **picnic areas**, and **kid-friendly activities** <hr>
<img alt="Home Page" width=100% src="../Capstone 2 - Enjoy the Outdoors/screenshots/parksPage.png">

## Contact Page | `Contact Us`
* We're here to assist you with any questions, concerns, or booking needs.  Don't hesitate to **contact us!**<hr>
<img alt="Home Page" width=100% src="../Capstone 2 - Enjoy the Outdoors/screenshots/contactUsPage.png">

## Footer
* Our footer provides easy access to all the essential resources you need to plan your trip, from **contact information** to **social media links**.<hr>
<img alt="Home Page" width=100% src="../Capstone 2 - Enjoy the Outdoors/screenshots/footer.png">

## Favorite Code | `Parks Javascript`
* <Readability:> I really like how this code separates phone and fax number formatting into clear variables `(phoneDisplay and faxDisplay)`. It makes the logic easy to follow.
* <Maintainability:> This code is well-structured and uses clear variable names. It would be easy for someone else to understand and modify if needed. <hr>
```
    const phoneDisplay = park.Phone ? `<span class="bold">Phone:</span> ${park.Phone}` : "";
    const faxDisplay = park.Fax ? `<span class="bold">Fax:</span> ${park.Fax}` : "";

    let contactInfo = '';
    if (faxDisplay) { 
        contactInfo += `${faxDisplay}<br>`;
    }
    if (phoneDisplay) { 
        contactInfo += phoneDisplay;
    }
```