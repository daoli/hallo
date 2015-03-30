Hallo
============

[Hallo](https://github.com/bergie/hallo) is the simplest web editor imaginable.
Now available in meteor package.

# Install
```sh
meteor add daoli:hallo
```

# Use

In your template, define the editable elements. For example, in Jade:
```css
  .hallo-editable Hello Hallo.js
  .hallo-editable meteor add daoli:hallo
  .hallo-editable Hello
```

In your JavaScript/CoffeeScript, activate Hallo.js:
```javascript
activate_hallo = ->
  $('.hallo-editable').hallo {
    plugins: {
      halloformat: {
        "formattings": {
          "bold": true,
          "italic": true,
          "strikeThough": false,
          "underline": true
          }
        }
      halloheadings: {}
      hallojustify: {}
      hallolists: {}
      halloreundo: {}
    }
  }

root.Meteor.startup ->
  activate_hallo()
```
