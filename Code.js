const DEFAULT_DESTINATION_LAN = 'en';

const LANGUAGE_MAP =
    [
        { text: 'Detect Language', val: '' },
        { text: 'Afrikaans', val: 'af' },
        { text: 'Albanian', val: 'sq' },
        { text: 'Amharic', val: 'am' },
        { text: 'Arabic', val: 'ar' },
        { text: 'Armenian', val: 'hy' },
        { text: 'Azerbaijani', val: 'az' },
        { text: 'Basque', val: 'eu' },
        { text: 'Belarusian', val: 'be' },
        { text: 'Bengali', val: 'bn' },
        { text: 'Bosnian', val: 'bs' },
        { text: 'Bulgarian', val: 'bg' },
        { text: 'Catalan', val: 'ca' },
        { text: 'Cebuano', val: 'ceb' },
        { text: 'Chinese (Simplified)', val: 'zh-CN' },
        { text: 'Chinese (Traditional)', val: 'zh-TW' },
        { text: 'Corsican', val: 'co' },
        { text: 'Croatian', val: 'hr' },
        { text: 'Czech', val: 'cs' },
        { text: 'Danish', val: 'da' },
        { text: 'Dutch', val: 'nl' },
        { text: 'English', val: 'en' },
        { text: 'Esperanto', val: 'eo' },
        { text: 'Estonian', val: 'et' },
        { text: 'Finnish', val: 'fi' },
        { text: 'French', val: 'fr' },
        { text: 'Frisian', val: 'fy' },
        { text: 'Galician', val: 'gl' },
        { text: 'Georgian', val: 'ka' },
        { text: 'German', val: 'de' },
        { text: 'Greek', val: 'el' },
        { text: 'Gujarati', val: 'gu' },
        { text: 'Haitian Creole', val: 'ht' },
        { text: 'Hausa', val: 'ha' },
        { text: 'Hawaiian', val: 'haw' },
        { text: 'Hebrew', val: 'he' },
        { text: 'Hindi', val: 'hi' },
        { text: 'Hmong', val: 'hmn' },
        { text: 'Hungarian', val: 'hu' },
        { text: 'Icelandic', val: 'is' },
        { text: 'Igbo', val: 'ig' },
        { text: 'Indonesian', val: 'id' },
        { text: 'Irish', val: 'ga' },
        { text: 'Italian', val: 'it' },
        { text: 'Japanese', val: 'ja' },
        { text: 'Javanese', val: 'jv' },
        { text: 'Kannada', val: 'kn' },
        { text: 'Kazakh', val: 'kk' },
        { text: 'Khmer', val: 'km' },
        { text: 'Korean', val: 'ko' },
        { text: 'Kurdish', val: 'ku' },
        { text: 'Kyrgyz', val: 'ky' },
        { text: 'Lao', val: 'lo' },
        { text: 'Latin', val: 'la' },
        { text: 'Latvian', val: 'lv' },
        { text: 'Lithuanian', val: 'lt' },
        { text: 'Luxembourgish', val: 'lb' },
        { text: 'Macedonian', val: 'mk' },
        { text: 'Malagasy', val: 'mg' },
        { text: 'Malay', val: 'ms' },
        { text: 'Malayalam', val: 'ml' },
        { text: 'Maltese', val: 'mt' },
        { text: 'Maori', val: 'mi' },
        { text: 'Marathi', val: 'mr' },
        { text: 'Mongolian', val: 'mn' },
        { text: 'Myanmar (Burmese)', val: 'my' },
        { text: 'Nepali', val: 'ne' },
        { text: 'Norwegian', val: 'no' },
        { text: 'Nyanja (Chichewa)', val: 'ny' },
        { text: 'Pashto', val: 'ps' },
        { text: 'Persian', val: 'fa' },
        { text: 'Polish', val: 'pl' },
        { text: 'Portuguese (Portugal, Brazil)', val: 'pt' },
        { text: 'Punjabi', val: 'pa' },
        { text: 'Romanian', val: 'ro' },
        { text: 'Russian', val: 'ru' },
        { text: 'Samoan', val: 'sm' },
        { text: 'Scots Gaelic', val: 'gd' },
        { text: 'Serbian', val: 'sr' },
        { text: 'Sesotho', val: 'st' },
        { text: 'Shona', val: 'sn' },
        { text: 'Sindhi', val: 'sd' },
        { text: 'Sinhala (Sinhalese)', val: 'si' },
        { text: 'Slovak', val: 'sk' },
        { text: 'Slovenian', val: 'sl' },
        { text: 'Somali', val: 'so' },
        { text: 'Spanish', val: 'es' },
        { text: 'Sundanese', val: 'su' },
        { text: 'Swahili', val: 'sw' },
        { text: 'Swedish', val: 'sv' },
        { text: 'Tagalog (Filipino)', val: 'tl' },
        { text: 'Tajik', val: 'tg' },
        { text: 'Tamil', val: 'ta' },
        { text: 'Telugu', val: 'te' },
        { text: 'Thai', val: 'th' },
        { text: 'Turkish', val: 'tr' },
        { text: 'Ukrainian', val: 'uk' },
        { text: 'Urdu', val: 'ur' },
        { text: 'Uzbek', val: 'uz' },
        { text: 'Vietnamese', val: 'vi' },
        { text: 'Welsh', val: 'cy' },
        { text: 'Xhosa', val: 'xh' },
        { text: 'Yiddish', val: 'yi' },
        { text: 'Yoruba', val: 'yo' },
        { text: 'Zulu', val: 'zu' }
    ];


/**
 * Callback for rendering the main card.
 * @return {CardService.Card} The card to show the user.
 */
function onHomepage(e) {
    return createHomepageCard(e);
}

function onFileScopeGranted(e) {
    return createHomepageCard(e);
}

/**
 * Callback function for a button action. Instructs Docs to display a
 * permissions dialog to the user, requesting `drive.file` scope for the
 * current file on behalf of this add-on.
 *
 * @param {Object} e The parameters object that contains the document’s ID
 * @return {editorFileScopeActionResponse}
 */
function onRequestFileScopeButtonClicked(e) {
    return CardService.newEditorFileScopeActionResponseBuilder()
        .requestFileScopeForActiveDocument().build();
}

function createHomepageCard(e) {
    var slidesEventObject = e['slides'];

    if (slidesEventObject['addonHasFileScopePermission']) {
        return createSelectionCard(e, DEFAULT_DESTINATION_LAN);
    } else {
        var builder = CardService.newCardBuilder();
        var cardSection = CardService.newCardSection();

        cardSection.addWidget(
            CardService.newTextParagraph().setText(
                'The add-on needs permission to translate this presentation.'));

        var buttonAction = CardService.newAction()
            .setFunctionName('onRequestFileScopeButtonClicked');

        var button = CardService.newTextButton()
            .setText('Request permission')
            .setOnClickAction(buttonAction);

        cardSection.addWidget(button);

        return builder.addSection(cardSection).build();
    }
}

/**
 * Main function to generate the main card.
 * @param {String} destinationLanguage Language of the translation.
 * @return {CardService.Card} The card to show to the user.
 */
function createSelectionCard(e, destinationLanguage) {
    var builder = CardService.newCardBuilder();

    // "Translation" language selection & text input section
    builder.addSection(CardService.newCardSection()
        .addWidget(generateLanguagesDropdown('destination', 'To: ', destinationLanguage)));

    //Buttons section
    builder.addSection(CardService.newCardSection()
        .addWidget(CardService.newButtonSet()
            .addButton(CardService.newTextButton()
                .setText('Translate Presentation')
                .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
                .setOnClickAction(CardService.newAction().setFunctionName('translatePresentation'))
                .setDisabled(false))));

    return builder.build();

}

/**
 * Helper function to generate the drop down language menu. It checks what language the user had selected.
 * @param {String} fieldName
 * @param {String} fieldTitle
 * @param {String} previousSelected The language the user previously had selected.
 * @return {CardService.SelectionInput} The card to show to the user.
 */
function generateLanguagesDropdown(fieldName, fieldTitle, previousSelected) {
    var selectionInput = CardService.newSelectionInput().setTitle(fieldTitle)
        .setFieldName(fieldName)
        .setType(CardService.SelectionInputType.DROPDOWN);

    LANGUAGE_MAP.forEach((language, index, array) => {
        selectionInput.addItem(language.text, language.val, language.val == previousSelected);
    })

    return selectionInput;
}

/**
 * Recursively gets child text elements a list of elements.
 * @param {PageElement[]} elements The elements to get text from.
 * @return {Text[]} An array of text elements.
 */
function getElementTexts(elements) {
    let texts = [];
    elements.forEach((element) => {
        switch (element.getPageElementType()) {
            case SlidesApp.PageElementType.GROUP:
                element.asGroup().getChildren().forEach((child) => {
                    texts = texts.concat(getElementTexts(child));
                });
                break;
            case SlidesApp.PageElementType.TABLE:
                const table = element.asTable();
                for (let y = 0; y < table.getNumColumns(); ++y) {
                    for (let x = 0; x < table.getNumRows(); ++x) {
                        texts.push(table.getCell(x, y).getText());
                    }
                }
                break;
            case SlidesApp.PageElementType.SHAPE:
                texts.push(element.asShape().getText());
                break;
        }
    });
    return texts;
}

/**
 * Translates all slide elements within the active presentation
 * to the target language using Apps Script's Language service.
 */
function translatePresentation(e) {
    const targetLanguage = e.formInput.destination;
    const presentation = SlidesApp.getActivePresentation();
    const slides = presentation.getSlides();

    let texts = [];

    slides.forEach((slide) => {
        const elements = slide.getPageElements();
        const elementTexts = getElementTexts(elements);
        texts = texts.concat(elementTexts);
    });

    // Translate all elements in-place.
    texts.forEach((text) => {
        text.setText(LanguageApp.translate(text.asRenderedString(), '', targetLanguage));
    });
}
