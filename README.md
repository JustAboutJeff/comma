# Dynamic Punctuation
> Helping anyone learn proper grammar through authentic practice exercises.

Created by [Jeff Belser](http://www.twitter.com/JustAboutJeff) for [NoRedInk](https://noredink.com/)

##About

Dynamic Punctuation is a JS/CSS/HTML application that helps anyone practice their english grammar. The initial prototype was built in a few hours, over a few cups of coffee, on a lazy Sunday.

##Install

- Fork the repo and clone the files onto your local machine:

		$ git clone https://github.com/JustAboutJeff/comma.git
    	
- Open your web browser of choice and navigate to the local path of **index.html**:

		file:///Users/MyOSXUserName/directory/comma/index.html
		
- Enjoy

##Usage

After the application is up and running in your browser you should see the instructions and an exercise sentence. Click the words shown within the sentence to dynamically add or remove commas.

##Design

To build Dynamic Punctuation I first focused on how the user could click each word to add punctuation to the sentence. My approach was to wrap each word within a separate span tag, thereby creating a HTML structure for the CSS and JS to interact with at a word-by-word level.

Within the CSS, I used a **:after** pseudo selector on the **.comma** class to dynamically insert content after each word (in this case a ','). This allowed me to adjust the content of each span tag by toggling a style property as opposed to rebuilding or inserting HTML text content with every click. This design decision is important because I plan to add other punctuation style classes in the future.

Within the JavaScript file, I wrapped my scripting logic within a CommaMachine object. Within this object, I attached a click handler to the **p.content** DOM element and rely on event delegation to target the individual child span that was clicked. Elsewhere in the CommaMachine object, a **toggleComma** function is fired off from the click handler to strip the span's inner text of extraneous punctuation using a regex, and then toggle on the **.comma** class. The entirety of the JS scripting is launched with a simple call to **CommaMachine.init()** from within jQuery's **$.ready** callback.

##Final Thoughts

Thanks to NoRedInk for creating an interesting challenge. A few features I'm excited to improve on in the future:

- Build a random sentence generator using an external API and AJAX.
- Add a punctuation select button to incorporate periods, semi-colons, etc.
- Improve the UI by increasing focus on the content.
- Deploy a live version of the app online.

---

Last Updated: Summer 2013






