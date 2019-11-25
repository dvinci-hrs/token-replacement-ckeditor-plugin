/**
 * @fileOverview Definition for token plugin dialog.
 *
 */

'use strict';

CKEDITOR.dialog.add('token', function (editor) {
    var lang = editor.lang.token;
    var generalLabel = editor.lang.common.generalTab;
    var tokens = {};
    tokens.data = [["", ""]];
    if (typeof editor.config.availableTokens != "undefined") {
        tokens.data = editor.config.availableTokens;
    }

    return {
        title: lang.title,
        minWidth: 300,
        minHeight: 60,
        contents: [
            {
                id: 'info',
                label: generalLabel,
                title: generalLabel,
                elements: [
                    // Dialog window UI elements.
                    {
                        id: "name",
                        type: "select",
                        style: 'width: 300px; min-width: 450px',
                        className: "cke_dialog_ui_input_select2",
                        label: lang.name,
                        'default': '',
                        required: true,
                        items: tokens.data,
                        setup: function (widget) {
                            this.setValue(widget.data.name);
                        },
                        commit: function (widget) {
                            widget.setData('name', this.getValue());
                        }
                    }
                ]
            }
        ]
    };
});
