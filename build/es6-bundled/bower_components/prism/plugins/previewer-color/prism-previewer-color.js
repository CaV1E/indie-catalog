(function(){if(('undefined'===typeof self||self.Prism)&&('undefined'===typeof global||global.Prism)){var a={css:!0,less:!0,markup:{lang:'markup',before:'punctuation',inside:'inside',root:Prism.languages.markup&&Prism.languages.markup.tag.inside['attr-value']},sass:[{lang:'sass',before:'punctuation',inside:'inside',root:Prism.languages.sass&&Prism.languages.sass['variable-line']},{lang:'sass',inside:'inside',root:Prism.languages.sass&&Prism.languages.sass['property-line']}],scss:!0,stylus:[{lang:'stylus',before:'hexcode',inside:'rest',root:Prism.languages.stylus&&Prism.languages.stylus['property-declaration'].inside},{lang:'stylus',before:'hexcode',inside:'rest',root:Prism.languages.stylus&&Prism.languages.stylus['variable-declaration'].inside}]};Prism.hooks.add('before-highlight',function(b){if(b.language&&a[b.language]&&!a[b.language].initialized){var c=a[b.language];'Array'!==Prism.util.type(c)&&(c=[c]),c.forEach(function(d){var e,f,g,h;!0===d?(e='important',f=b.language,d=b.language):(e=d.before||'important',f=d.inside||d.lang,g=d.root||Prism.languages,h=d.skip,d=b.language),!h&&Prism.languages[d]&&(Prism.languages.insertBefore(f,e,{color:/\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i},g),b.grammar=Prism.languages[d],a[b.language]={initialized:!0})})}}),Prism.plugins.Previewer&&new Prism.plugins.Previewer('color',function(b){return this.style.backgroundColor='',this.style.backgroundColor=b,!!this.style.backgroundColor})}})();