# jQuery list to select
A jQuery plugin turning lists into selects.

## Default initialization
```js
$('.js-lang-switcher').spListToSelect();
```

## Settings
Option | Type | Default | Description
------ | ---- | ------- | -----------
classes | string | 'js-created-select' | The classes to apply to the select, space-separated.
selectFirst | boolean | false | Whether or not to select the first option in the list.
useAttrAsValue | string | false | The name of the attribute holding the value.
useAttrAsLabel | string | false | The name of the attribute holding the label.
onAfterInit | function | undefined | A function to be executed after initialization.

## Initialization with custom settings
```js
var init_complete = false;
var $select;

$('.js-lang-switcher').spListToSelect({
    classes: 'js-lang-switcher-select',
    selectFirst: true,
    useAttrAsLabel: 'title',
    onAfterInit: function() {
        $select = $(document).find('.'+'js-lang-switcher-select');
        init_complete = true;
    }
});
```

### Dependencies
jQuery

### License
Copyright © Steve Piron
