Prism.languages.elixir={comment:{pattern:/(^|[^#])#(?![{#]).*/m,lookbehind:!0},regex:/~[rR](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|[^}])+\}|<(?:\\>|[^>])+>)[uismxfr]*/,string:[{pattern:/~[cCsSwW](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|#\{[^}]+\}|[^}])+\}|<(?:\\>|[^>])+>)[csa]?/,inside:{}},{pattern:/("""|''')[\s\S]*?\1/,inside:{}},{pattern:/("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,inside:{}}],atom:{pattern:/(^|[^:]):\w+/,lookbehind:!0,alias:'symbol'},"attr-name":/\w+:(?!:)/,capture:{pattern:/(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,lookbehind:!0,alias:'function'},argument:{pattern:/(^|[^&])&\d+/,lookbehind:!0,alias:'variable'},attribute:{pattern:/@[\S]+/,alias:'variable'},number:/\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,keyword:/\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,boolean:/\b(?:true|false|nil)\b/,operator:[/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,{pattern:/([^<])<(?!<)/,lookbehind:!0},{pattern:/([^>])>(?!>)/,lookbehind:!0}],punctuation:/<<|>>|[.,%\[\]{}()]/},Prism.languages.elixir.string.forEach(function(a){a.inside={interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:'punctuation'},rest:Prism.util.clone(Prism.languages.elixir)}}}});