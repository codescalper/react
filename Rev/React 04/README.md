
## Chapter 4 -  Events && Event Bubbling

 
- **Assignment 1** : Make a simple page with 1 Image, 1button, 1 form Input text box and try to apply these events .

	-	Image : **onMouseOver** : when you hover on image. Image should increase in size. Think of any way where you can do it. Also, try that when you "move out" the mouse, it should be back to normal size.
	-	Button  : **onDoubleClick**: when you doubleClick a button. show some alert box. Also make a console.log for single click event. Is console.log printed twice on double click ? check this ?
	-	Input Textbox : **onFocus**, **onBlur** are 2 events which occur when you enter or exit an input text box by click of mouse etc. Use it to display some console.log, which print "focused on the textbox", "out of textbox".
	-  **onCopy, onCut, onPaste** are 3 events which you can use on any text value etc. try to use it on a paragraph and just alert the user that something is copied, cut or pasted.
	


- **Assignment 2** : Make a form using `` < Form> `` tag and put an textbox and button inside this form. try to click the button after entering into textbox. Does form reloads ? Can you try to stop is using `e.preventDefault`. Try it.

- **Assignment 3** : use an Input Textbox : after you enter some text. try to press **ENTER** button and show the an alert or console.log. You can capture the **onKeyPress** event, button how you will you make it work only for "Enter" ? It should not work on pressing of other keys. [*Hint: Explore the synthetic event object* ]


- **Assignment 4** :  This is continuation of previous assignment **RESUME Builder**.
	- Add a **print** button to print the current resume. You can use a DOM method ``window.print`` to print the PDF.


- **Assignment 5** : Can you try the challenge of passing the function in one Prop like `onPlay` and the message inside that function to be accessed from other prop `message` [ As shown in Chapter Video ]

### Special Assignments ==============

- **Assignment 6** : Using **event bubbling** concept print the name of Parents to Child of any clicked element. It should be order in "**GrandParent >Parent > Child**" this kind of order. Where "Child" represents the current clicked element.

- **Assignment 7** : Make a custom event called **onClose**. this event should close the current browser tab. you can apply it to a button on click or anywhere.

### Related Videos : 

1. HTML DOM Elements and manipulation [Video](https://youtu.be/kwfbaHNZ_aU)
2. HTML DOM Events and  manipulation : [Video](https://youtu.be/5kpe_tg_Cis)
