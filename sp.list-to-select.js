/**!
 * @author Steve Piron <https://twitter.com/stevepiron>
 * @requires jQuery
 *
 * A jQuery plugin turning lists into selects.
 */
(function( $ ) {

    var defaults;
    var params;

    var $document = $(document);

    // ====================================================================== //
    // Functions
    // ====================================================================== //

    /**
     * @function `turnIntoSelect`
     *
     * Turns a given list into a select.
     *
     * @param $list {jQuery} - the list to transform.
     * @param i {integer} - the loop index.
     */
    function turnIntoSelect( $list, i ) {
        var $li = $list.find('li');
        var className = (params.classes !== 'js-created-select') ? 'js-created-select' : '';
        var selectHtml = '<select class="'+params.classes+' '+className+'" id="js-created-select-'+i+'">';
        $li.each(function(l, li) {
            var $this = $(li);
            var $link = $this.find('a');
            var value = '';
            var label = '';
            if( !$link.length ) {
                if( params.useAttrAsValue.length ) {
                    value = $this.attr(params.useAttrAsValue);
                }
                else {
                    value = $this.text();
                }
                if( params.useAttrAsLabel.length ) {
                    label = $this.attr(params.useAttrAsLabel);
                }
                else {
                    label = value;
                }
            }
            else {
                if( params.useAttrAsValue.length ) {
                    value = $this.attr(params.useAttrAsValue);
                }
                else {
                    value = $link.attr('href');
                }
                if( params.useAttrAsLabel ) {
                    var attrOnLi = $this.attr(params.useAttrAsLabel);
                    var attrOnLink = $link.attr(params.useAttrAsLabel);
                    switch (true) {
                        case (typeof attrOnLi !== typeof undefined && attrOnLi !== false):
                            label = attrOnLi;
                            break;
                        case (typeof attrOnLink !== typeof undefined && attrOnLink !== false):
                            label = attrOnLink;
                            break;
                        default:
                            label = $this.text();
                    }
                }
                else {
                    label = $link.text();
                }
            }
            var selected = (params.selectFirst && l === 0) ? ' selected': '';
            var optionHtml = '<option value="'+value+'"'+selected+'>' + label + '</option>';
            selectHtml += optionHtml;
        });
        selectHtml += '</select>';
        var $select = $(selectHtml);
        $select.insertAfter($list);
        if( typeof params.onAfterInit == 'function' ) {
            params.onAfterInit();
        }
    }

    // ====================================================================== //
    // Plugin
    // ====================================================================== //

    $.fn.spListToSelect = function( options ) {

        /**
         * Note: using `return` keeps jQuery's chaining possibility
         */
        return this.each(function(i, inst) {

            var $this = $(inst);

            defaults = {
                classes: 'js-created-select',
                selectFirst: false,
                useAttrAsValue: false,
                useAttrAsLabel: false,
                onAfterInit: undefined
            };

            params = $.extend( defaults, options );

            turnIntoSelect( $this, i );

        });
    };

}( jQuery ));
