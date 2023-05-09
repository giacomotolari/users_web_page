# USERS WEB PAGE

## WHAT WILL BE LEARN ?

- create react basic-project
- install, bind and use scss in react
- useState
- useEffect
- fetch in react
- localStorage in react
- react forms
- react icons
- useRef

### We will create a web page where we can add users with a form and save them in the localStorage.

### The first users of the page will be taken from an API.

### See the image to give you an idea of what the page will look like.

![GIF preview](https://github.com/giacomotolari/users_web_page/blob/main/users-page.gif)

## TASK 1 - react-init

Create a react basic project.

## TASK 2 - scss

Install and use scss (give a style with scss and test if it works).

## TASK 3 - API-fetch

Fetch from this [API](https://jsonplaceholder.typicode.com/users) when the component ***App*** as first time loads.

## TASK 4 - localStorage
    
Save the response of the fetch in a key called ***users*** in the localStorage because we want save the users in the localStorage and if we refresh the web page, we still can see the users.
## TASK 5 - state-init-value
    
Create a state called ***users*** which has as its initial value the value of the ***key users in the localstorage***.

## TASK 6 - update fetch

Update the fetch code, because you only want to fetch if the ***users state*** is not empty.

## TASK 8 - show-users
    
Show all users in the UI .
Show only the name, username and email of each user.

## TASK 8 - form
    
Create a form, that allows you to add a new user on the ***users*** state.
When you create a new user, he/she must be saved in the localStorage also.
You need an input for the name, username and email and password (you don't need to show the password in the UI).
## TASK 9 - styling
    
Style the App to your taste (use scss).

## TASK 10 - password-toggle
    
Add an icon in the input-password that gives you the possibility to hide the password, if the password is hidden then show another icon that gives you the possibility to show the password (then you will only be able to see one icon).

Use the [react-icons](https://react-icons.github.io/react-icons/) as icons.

## TASK 11 - empty-fields

Make the input-fields empty after the new user is created

## TASk 12 - form-validation

Non field can be empty and you can't have more users with the same username.

## TASk 13 - disable-submit-button

If the validations are not true disable the click of the submit button.

## TASk 14 - newUser-state

Update the Form code using only one state called newUser instead to have a state per input.

## TASK 15 - input-focus

Give inputs a different backgroundColor when they are focused.

## TASK 16 - hover-border

Change the border colour of the containers showing each user in the UI when hovering with the mouse.

## TASK 17 - autofocus

Give a focus on the name input in the form when the component loads.
